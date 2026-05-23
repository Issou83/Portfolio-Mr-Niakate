import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';
import Project7 from './pages/Project7';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import LocalLanding from './pages/LocalLanding';
import ServiceLanding from './pages/ServiceLanding';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter>
    <AnimatePresence>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projet-1' element={<Project1 />} />
      <Route path='/projet-2' element={<Project2 />} />
      <Route path='/projet-3' element={<Project3 />} />
      <Route path='/projet-4' element={<Project4 />} />
      <Route path='/projet-5' element={<Project5 />} />
      <Route path='/projet-6' element={<Project6 />} />
      <Route path='/projet-7' element={<Project7 />} />
      <Route path='/creation-site-internet-pau' element={<LocalLanding area="pau" />} />
      <Route path='/creation-site-internet-gan' element={<LocalLanding area="gan" />} />
      <Route path='/creation-site-web-bearn' element={<LocalLanding area="bearn" />} />
      <Route path='/creation-site-vitrine' element={<ServiceLanding service="vitrine" />} />
      <Route path='/refonte-site-web' element={<ServiceLanding service="refonte" />} />
      <Route path='/developpement-application-web' element={<ServiceLanding service="app" />} />
      <Route path='/seo-local-pau' element={<ServiceLanding service="seo" />} />
      <Route path='/creation-site-ecommerce' element={<ServiceLanding service="ecommerce" />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
