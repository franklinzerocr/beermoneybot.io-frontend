import React from 'react';
import Header from './components/Header';
import ContainerMain from './containers/ContainerMain';
import SectionOperations from './components/SectionOperations';
import SectionAnalysis from './components/SectionAnalysis';
import SectionExchanges from './components/SectionExchanges';
import SectionAccess from './components/SectionAccess';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <ContainerMain>
        <SectionOperations />
        <SectionAnalysis />
        <SectionExchanges />
        <SectionAccess />
      </ContainerMain>
      <Footer />
    </div>
  );
};

export default App; 
