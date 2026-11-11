const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const assert = require('assert/strict');
const build = path.resolve(__dirname,'../build');
const sitemap = fs.readFileSync(path.join(build,'sitemap.xml'),'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/nkdevweb.netlify.app([^<]*)<\/loc>/g)].map(m => m[1]);
const seenTitles = new Set();
for (const route of [...routes,'/404']) {
 const file = path.join(build, route === '/404' ? '404.html' : route === '/' ? 'index.html' : `${route.slice(1)}/index.html`);
 const d = new JSDOM(fs.readFileSync(file,'utf8')).window.document;
 assert.equal(d.documentElement.lang,'fr');
 assert.equal(d.querySelectorAll('h1').length,1,`One H1: ${route}`);
 assert.ok(d.querySelector('#root').textContent.length > 350,`Pre-rendered content: ${route}`);
 assert.equal(d.querySelector('link[rel="canonical"]').href,`https://nkdevweb.netlify.app${route}`);
 assert.ok(!seenTitles.has(d.title),`Unique title: ${route}`); seenTitles.add(d.title);
 assert.equal(d.querySelectorAll('script[type="application/ld+json"]').length,1);
 const graph = JSON.parse(d.querySelector('#page-jsonld').textContent)['@graph'];
 const faq = graph.find(node => node['@type'] === 'FAQPage');
 if (faq) for (const q of faq.mainEntity) { assert.ok(d.body.textContent.includes(q.name)); assert.ok(d.body.textContent.includes(q.acceptedAnswer.text)); }
 if (route === '/404') assert.match(d.querySelector('meta[name="robots"]').content,/noindex/);
 for (const image of d.querySelectorAll('img')) { assert.ok(image.alt); assert.ok(image.getAttribute('width')); const img = path.join(build,image.getAttribute('src').replace(/^\.\//,'').replace(/^\//,'')); assert.ok(fs.existsSync(img),`Image exists: ${img}`); }
 for (const a of d.querySelectorAll('a[href]')) {
  const href = a.getAttribute('href');
  if (!href.startsWith('/') || href.startsWith('//')) continue;
  const target = href.split('#')[0] || '/';
  assert.ok(routes.includes(target),`Internal link ${href} on ${route}`);
 }
}
console.log(`Verified ${routes.length} sitemap pages + 404: HTML content, unique metadata, matching FAQ schema, images and internal links.`);
