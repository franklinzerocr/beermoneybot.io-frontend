import React from 'react'
import Header from '../components/Header';
import ContainerMain from '../containers/ContainerMain';
import Footer from '../components/Footer';
import SectionTeam from '../components/SectionTeam';
import {MetaTags} from 'react-meta-tags';


const Team = () => {
  return (
    <>
      <MetaTags>
        <title>Team | Beermoney Bot</title>
        <meta property="og:title" content="Team | Beermoney Bot"/>
        <meta name="og:description" content="Equipo de Beermoney Bot" />
        <meta name="description" content="Equipo de Beermoney Bot" />
      </MetaTags>
      <Header small={'small'} />
      <ContainerMain>
        <SectionTeam />
      </ContainerMain>
      <Footer />
    </>
  )
}

export default Team
