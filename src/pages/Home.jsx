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
          <meta name="description" content="Beermoney Bot description" />
          <meta property="og:title" content="MyApp" />
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