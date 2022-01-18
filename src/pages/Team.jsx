import React from 'react'
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import Footer from '../components/Footer';
import SectionTeam from '../components/SectionTeam';
import {ReactTitle} from 'react-meta-tags';

const Team = () => {
  return (
    <>
      <ReactTitle title="Team | Beermoney Bot"/>
      <Header small={'small'} />
        <ContainerMain>
          <SectionTeam />
        </ContainerMain>
      <Footer />
    </>
  )
}

export default Team
