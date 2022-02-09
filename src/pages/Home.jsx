import React from 'react';
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import SectionOperations from '../components/SectionOperations';
import SectionAnalysis from '../components/SectionAnalysis';
import SectionExchanges from '../components/SectionExchanges';
import SectionAccess from '../components/SectionAccess';
import Footer from '../components/Footer';
import { MetaTags } from 'react-meta-tags';
import imagecard from '../assets/imagecard.jpg';

const Home = () => {
  return (
    <>
      <MetaTags>
        <title>Home | Beermoney Bot</title>
        <meta name='title' content='Beermoney Bot' />
        <meta property='og:title' content='Beermoney Bot' />
        <meta name='og:description' content='¿Un Robot que haga trading mejor que un humano? Bro... Hold my Beer' />
        <meta name='description' content='¿Un Robot que haga trading mejor que un humano? Bro... Hold my Beer' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://beermoneybot.io/' />
        <meta property='og:description' content='¿Un Robot que haga trading mejor que un humano? Bro... Hold my Beer' />

        <meta property='og:image' content={imagecard} />
        <meta property='twitter:image' content={imagecard} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://beermoneybot.io/' />
        <meta property='twitter:title' content='Beermoney Bot' />
        <meta property='twitter:description' content='¿Un Robot que haga trading mejor que un humano? Bro... Hold my Beer' />
      </MetaTags>
      <Header />
      <ContainerMain>
        <SectionOperations />
        <SectionAnalysis />
        <SectionExchanges />
        <SectionAccess />
      </ContainerMain>
      <Footer />
    </>
  );
};

export default Home;
