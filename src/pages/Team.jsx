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
        <meta name="description" content="Beermoney Bot Team description" />
        <meta property="og:title" content="MyApp" />
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
