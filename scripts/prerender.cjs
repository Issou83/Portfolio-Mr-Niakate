/* Build real HTML for every public route, using the same React components. */
process.env.NODE_ENV = 'production';
const fs = require('fs');
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');
const sourceRoot = path.resolve(__dirname, '../src') + path.sep;
const originalJs = Module._extensions['.js'];
const compile = (module, filename) => {
  if (!filename.startsWith(sourceRoot)) return originalJs(module, filename);
  const { code } = babel.transformFileSync(filename, {
    babelrc: false, configFile: false,
    presets: [[require.resolve('babel-preset-react-app'), { runtime: 'classic' }]],
  });
  module._compile(code, filename);
};
Module._extensions['.js'] = compile;
Module._extensions['.jsx'] = compile;
for (const extension of ['.png','.jpg','.svg','.ttf']) Module._extensions[extension] = (module, filename) => { module.exports = '/' + path.relative(sourceRoot, filename).replaceAll(path.sep, '/'); };
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('../src/App').default;
const { SEOContext } = require('../src/components/SEO');
const { JSDOM } = require('jsdom');
const buildDir = path.resolve(__dirname, '../build');
const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
const routes = ['/', '/contact', '/creation-site-internet-pau', '/creation-site-internet-gan', '/creation-site-web-bearn', '/creation-site-vitrine', '/refonte-site-web', '/developpement-application-web', '/seo-local-pau', '/creation-site-ecommerce', ...Array.from({ length: 7 }, (_,i) => `/projet-${i+1}`)];
const originalError = console.error;
// Router Links use layout effects in the browser; those effects are unnecessary at build time.
console.error = (...args) => { if (!String(args[0]).includes('useLayoutEffect does nothing on the server')) originalError(...args); };
for (const route of [...routes, '/404']) {
  let seo;
  const html = renderToString(React.createElement(SEOContext.Provider, { value: value => { seo = value; } }, React.createElement(App, { Router: StaticRouter, routerProps: { location: route } })));
  if (!seo) throw new Error(`Missing SEO for ${route}`);
  const dom = new JSDOM(template);
  const document = dom.window.document;
  document.title = seo.title;
  const setMeta = (name,value,property = false) => {
    const attr = property ? 'property' : 'name';
    let node = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!node) { node = document.createElement('meta'); document.head.append(node); }
    node.setAttribute(attr,name); node.setAttribute('content',value);
  };
  setMeta('description',seo.description); setMeta('robots',seo.robots);
  for (const [key,value] of Object.entries({title:seo.title,description:seo.description,url:seo.canonical,image:seo.image,type:seo.type})) setMeta(`og:${key}`,value,true);
  for (const [key,value] of Object.entries({card:'summary_large_image',title:seo.title,description:seo.description,image:seo.image})) setMeta(`twitter:${key}`,value);
  document.head.querySelector('link[rel="canonical"]').setAttribute('href',seo.canonical);
  document.head.querySelectorAll('script[type="application/ld+json"]').forEach(node => node.remove());
  const schema = document.createElement('script'); schema.id = 'page-jsonld'; schema.type = 'application/ld+json'; schema.textContent = JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c'); document.head.append(schema);
  document.getElementById('root').innerHTML = html;
  document.querySelector('noscript')?.remove();
  const target = route === '/' ? path.join(buildDir,'index.html') : route === '/404' ? path.join(buildDir,'404.html') : path.join(buildDir,route.slice(1),'index.html');
  fs.mkdirSync(path.dirname(target),{recursive:true}); fs.writeFileSync(target, dom.serialize());
}
console.error = originalError;
fs.writeFileSync(path.join(buildDir,'_redirects'), routes.filter(route => route !== '/').flatMap(route => [`${route} ${route}/index.html 200`, `${route}/ ${route}/index.html 200`]).join('\n') + '\n/* /404.html 404\n');
console.log(`Pre-rendered ${routes.length} public pages and a noindex 404 page.`);
