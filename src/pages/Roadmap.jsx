import React from 'react'
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import Footer from '../components/Footer';
import SectionRoadmap from '../components/SectionRoadmap';



const Roadmap = () => {
  return (
    <>
      <Header small={'small'} />
        <ContainerMain>
          <SectionRoadmap />
        </ContainerMain>
      <Footer />
    </>
  )
}

export default Roadmap
