import React from "react";
import Header from "./components/Header";
import ContainerMain from "./containers/ContainerMain";
import SectionWhat from "./components/SectionWhat";
import SectionOperate from "./components/SectionOperate";
import SectionVerify from "./components/SectionVerify";
import SectionUse from "./components/SectionUse";
import SectionExchange from "./components/SectionExchange";
import SectionSuscription from "./components/SectionSuscription"; 
import Footer from "./components/Footer";
import './App.css';

const App = () =>{
  return (
    <div className="App">
      <Header/>
      <ContainerMain>
        <SectionWhat/>
        <SectionOperate/>
        <SectionVerify/>
        <SectionUse/>
       <SectionExchange/>
       <SectionSuscription/>
     </ContainerMain>
      <Footer/>
    </div>
  );
}

export default App;
