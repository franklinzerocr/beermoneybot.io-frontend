import React from 'react';
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import SectionOperations from '../components/SectionOperations';
import SectionAnalysis from '../components/SectionAnalysis';
import SectionExchanges from '../components/SectionExchanges';
import SectionAccess from '../components/SectionAccess';
import Footer from '../components/Footer';
import {MetaTags} from 'react-meta-tags';



const Home = () => {
  return (
    <>
      <MetaTags>
          <title>Home | Beermoney Bot</title>
          <meta property="og:title" content="Home | Beermoney Bot"/>
          <meta name="og:description" content="¿Un Robot que haga trading mejor que un humano? Bro... Hold my Beer" />
          <meta name="description" content="¿Un Robot que haga trading mejor que un humano? Bro... Hold my Beer" />
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