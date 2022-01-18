import React from 'react'
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import Footer from '../components/Footer';
import SectionRoadmap from '../components/SectionRoadmap';
import {ReactTitle} from 'react-meta-tags';

const Roadmap = () => {
  return (
    <>
      <ReactTitle title="Roadmap | Beermoney Bot"/>
      <Header small={'small'} />
        <ContainerMain>
          <SectionRoadmap />
        </ContainerMain>
      <Footer />
    </>
  )
}

export default Roadmap
