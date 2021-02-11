import React, { lazy, Suspense } from 'react';
import '../../App.css';
// import Cards from '../Cards';
// import Banner from '../Banner';
// import Footer from '../Footer';


//import with loading
const Cards = lazy (() => import('../Cards'));
const Banner = lazy(() => import('../Banner'));
const Footer = lazy(() => import('../Footer'));

function Home() {
  return (
    <>
      <Suspense fallback={<p>Carregando...</p>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <Cards />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
      <Footer />
      </Suspense>

    </>
  );
}

export default Home;
