import React from 'react';
import Header from '../Header/Header';
import ShortHistory from '../ShortHistory/ShortHistory';
import Footer from '../Footer/Footer';
import CarouselHome from '../CarouselHome/CarouselHome';
import Podcast from '../Podcast/Podcast';
import Episodes from '../Episodes/Episodes';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Helmet>
        <title>Under Club</title>
        <meta name="title" content="Under Club" />
        <meta
          name="description"
          content="Under Club pertenece al puñado de clubes que han sabido construir una identidad sonora en conjunto con su público. Desde Buenos Aires hacia todo el mundo."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://underclub.com.ar/" />
        <meta property="og:title" content="Under Club" />
        <meta
          property="og:description"
          content="Under Club pertenece al puñado de clubes que han sabido construir una identidad sonora en conjunto con su público. Desde Buenos Aires hacia todo el mundo."
        />
        <meta
          property="og:image"
          content="https://static.ra.co/images/clubs/ar-under-logo.jpg?dateUpdated=1678803496050"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://underclub.com.ar/" />
        <meta property="twitter:title" content="Under Club" />
        <meta
          property="twitter:description"
          content="Under Club pertenece al puñado de clubes que han sabido construir una identidad sonora en conjunto con su público. Desde Buenos Aires hacia todo el mundo."
        />
        <meta
          property="twitter:image"
          content="https://static.ra.co/images/clubs/ar-under-logo.jpg?dateUpdated=1678803496050"
        />
      </Helmet>
      <Header />
      <ShortHistory />
      <CarouselHome />
      <Podcast />
      <Episodes />
      <Footer />
    </motion.div>
  );
};

export default Home;
