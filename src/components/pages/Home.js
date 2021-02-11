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
      <Suspense fallback={<img style={{height: 300, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading..."/> }>
        <Banner />
      </Suspense>
      <Suspense fallback={<p style={{top: 300, bottom: 0, left: 0, right: 0, margin: "auto"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading..."/> }>
        <Cards />
      </Suspense>
      <Suspense fallback={<p style={{top: 500, bottom: 0, left: 0, right: 0, margin: "auto"}} src="https://www.eurobitume.eu/fileadmin/generic/pits_downloadcenter/Resources/Public/images/loading.gif" alt="loading..."/> }>
      <Footer />
      </Suspense>

    </>
  );
}

export default Home;
