import React from "react";
import Header from "./components/Header";
import ContainerMain from "./containers/ContainerMain";
import SectionWhat from "./components/SectionWhat"; 
import SectionOperate from "./components/SectionOperate";
import SectionUse from "./components/SectionUse";
import SectionAccess from "./components/SectionAccess";
import Footer from "./components/Footer";
import './App.css';

const App = () =>{
  return (
    <div className="App">
      <Header/>
      <ContainerMain>
        <SectionWhat />
        <SectionOperate/>
        <SectionUse/>
       <SectionAccess/>
     </ContainerMain>
      <Footer/>
    </div>
  );
}

export default App;
