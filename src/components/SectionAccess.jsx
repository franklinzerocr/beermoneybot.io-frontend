import React from 'react';
import '../styles/Access_style.scss';
import logo from '../assets/Logos/loguito.png';
import { useNavigate } from "react-router-dom";

const SectionAccess = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/team')
  }
  return (
    <>
      <section className='main-access-container'>
        <div className='title-container title-left' id='access'>
          <h2 className='first-word '>Solicita tu </h2>
          <h2 className='second-word tabbed-left'>Acceso Anticipado</h2>
        </div>
        <section className='plans-container-slider'>
          <article className='plans-container-card'>
            <h3 className='plan-card-title'>
              Beermoney Bot se encuentra en una fase de acceso semiprivado, para solicitar acceso debes comunicarte con nuestro equipo
              <img src={logo} alt='' className='recommended'></img>
            </h3>

            <div className='plan-info-container'>
              <input type='text' id='femail' name='femail' placeholder='Email'></input>
              <input type='text' id='ftuser' name='ftuser' placeholder='Telegram'></input>
              <input type='text' id='ftext' name='ftext' placeholder='¿Cómo llegaste a este proyecto?'></input>
              <button className='plan-card-button' onClick={() => handleSubmit()}>Enviar</button>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default SectionAccess;
