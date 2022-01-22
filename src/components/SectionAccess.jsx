import React, { useRef } from 'react';
import '../styles/Access_style.scss';
import logo from '../assets/Logos/loguito.png';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const SectionAccess = (e) => {
  const navigate = useNavigate();
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm('serivico de correo', 'template a usar', form.current, 'id de usuario')
    emailjs.sendForm('service_rseoszi', 'template_jb4wvfj', form.current, 'user_a901ZJVys82iwiQRZjzSO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    navigate('/thanks')
  }
  return (
    <>
      <section className='main-access-container'>
        <div className='title-container title-left' id='access'>
          <div className="title-container-aux">
            <h2 className='first-word '>Solicita tu </h2>
            <h2 className='second-word tabbed-left'>Acceso Anticipado</h2>
          </div>
          <div id="circle-access"></div>
        </div>
        <section className='plans-container-slider'>
          <article className='plans-container-card'>
            <h3 className='plan-card-title'>
              <b>
                Beermoney Bot se encuentra en una fase de acceso semiprivado
              </b>
              <br />
              <small> <b> Para solicitar acceso debes comunicarte con nuestro equipo</b></small>
              <img src={logo} alt='' className='recommended'></img>
            </h3>

            <form className='plan-info-container' ref={form} onSubmit={handleSubmit}>
              <input type='email' id='femail' name='femail' placeholder='Email' required minLength="5" maxLength="60"></input>
              <input type='text' id='ftuser' name='ftuser' placeholder='Telegram' required minLength="2" maxLength="60"></input>
              <input type='text' id='ftext' name='ftext' placeholder='¿Cómo llegaste a este proyecto?' required minLength="5" maxLength="150"></input>
              <button className='plan-card-button' type="submit"><b>Enviar</b></button>
            </form>
          </article>
        </section>
      </section>
    </>
  );
};

export default SectionAccess;
