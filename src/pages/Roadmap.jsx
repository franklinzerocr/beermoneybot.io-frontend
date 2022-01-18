import React from 'react'
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import Footer from '../components/Footer';
import SectionRoadmap from '../components/SectionRoadmap';
import {MetaTags} from 'react-meta-tags';

const Roadmap = () => {
  return (
    <>
      <MetaTags>
        <title>Roadmap | Beermoney Bot</title>
        <meta name="description" content="Beermoney Bot Roadmap description" />
        <meta property="og:title" content="MyApp" />
      </MetaTags>
      <Header small={'small'} />
      <ContainerMain>
        <SectionRoadmap />
      </ContainerMain>
      <Footer />
    </>
  )
}

export default Roadmap
