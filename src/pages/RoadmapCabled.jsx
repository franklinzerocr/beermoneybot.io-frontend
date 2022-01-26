import React from 'react'
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import Footer from '../components/Footer';
import SectionRoadmapCabled from '../components/SectionRoadmapCabled';
import {MetaTags} from 'react-meta-tags';

const Roadmap = () => {
  return (
    <>
      <MetaTags>
        <title>Roadmap | Beermoney Bot</title>
        <meta property="og:title" content="Roadmap | Beermoney Bot"/>
        <meta name="og:description" content="Beermoney Bot Roadmap" />
        <meta name="description" content="Beermoney Bot Roadmap" />
      </MetaTags>
      <Header small={'small'} />
      <ContainerMain>
        <SectionRoadmapCabled />
      </ContainerMain>
      <Footer />
    </>
  )
}

export default Roadmap
