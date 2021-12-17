import React from "react";
import Header from "./components/Header";
import ContainerMain from "./containers/ContainerMain";
import SectionRoi from "./components/SectionRoi"; 
import SectionHowItWork from "./components/SectionHowItWork";
import SectionExchanges from "./components/SectionExchanges";
import SectionAccess from "./components/SectionAccess";
import Footer from "./components/Footer";
import './App.css';

const App = () =>{
  return (
    <div className="App">
      <Header/>
      <ContainerMain>
        <SectionRoi />
        <SectionHowItWork/>
        <SectionExchanges/>
       <SectionAccess/>
     </ContainerMain>
      <Footer/>
    </div>
  );
}

export default App;
