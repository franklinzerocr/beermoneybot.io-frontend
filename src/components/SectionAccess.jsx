import React, { useRef } from 'react';
import '../styles/Access_style.scss';
import logo from '../assets/Logos/loguito.png';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ReCAPTCHA from "react-google-recaptcha";


const SectionAccess = (e) => {
  const navigate = useNavigate();
  const form = useRef();
  const captcha = useRef(null);
  const [captchaValid, setCaptchaValid] = React.useState(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [mySelect, setMySelect] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    // emailjs.sendForm('serivico de correo', 'template a usar', form.current, 'id de usuario')
    // emailjs.sendForm('service_rseoszi', 'template_jb4wvfj', form.current, 'user_a901ZJVys82iwiQRZjzSO')
    emailjs.sendForm('service_byy3rbf', 'template_cezuxnv', form.current, 'user_MmdiIBDzdFj4QZkkPVicV')
      .then((result) => {
        console.log(result.text);
        setIsSubmitting(false)
        navigate('/thanks')
      }, (error) => {
        console.log(error.text);
        alert('No se pudo procesar su solicitud')
      });
  }
  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptchaValid(true)
    }
    if (!captcha.current.getValue()) {
      setCaptchaValid(false)
    }
  }
  const handleSelect = () => {
    setMySelect(false)
  }
  return (
    <>
      <section className='main-access-container'>
        <div className='title-container title-left' id='access'>
          <div className="title-container-aux">
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
              <h2 className='first-word '>Solicita tu </h2>
              <h2 className='second-word tabbed-left'>Acceso Anticipado</h2>
            </AnimationOnScroll>
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

            <form className='plan-info-container' ref={form} onSubmit={handleSubmit} autoComplete="off">
              <input type='text' id='fname' name='fname' placeholder='Nombre Completo' required minLength="5" maxLength="60"></input>
              <input type='email' id='femail' name='femail' placeholder='Email' required minLength="5" maxLength="60"></input>
              <input type='text' id='ftwuser' name='ftwuser' placeholder='Twitter' required minLength="2" maxLength="60"></input>
              <input type='text' id='ftuser' name='ftuser' placeholder='Telegram' required minLength="2" maxLength="60"></input>
              <select name="fhowArrived" id='fhowArrived' defaultValue={"¿Cómo llegaste a este proyecto?"} onChange={handleSelect} required className={mySelect && 'gray-default'}>  
                <option value="¿Cómo llegaste a este proyecto?" disabled hidden>¿Cómo llegaste a este proyecto?</option>
                <option value="Web">Web</option>
                <option value="Twitter">Twitter</option>
                <option value="Recomendación">Recomendación</option>
                <option value="Otro">Otro</option>
              </select>
              <textarea id="fabout" name="fabout" rows="4" cols="50" placeholder='Háblanos un poco de tí...' required minLength="2" maxLength="160">
              </textarea>
              <br />
              <br />
              <div className='captcha-container'>
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Lc0ZFoeAAAAAPIksMFDS-02qLlFsHZ95bQKmDpu"
                  onChange={onChange}
                />
              </div>
              <button className='plan-card-button' type="submit" disabled={captchaValid && !mySelect ? false : true}>
                {!isSubmitting ?
                  <b>Enviar</b>
                  :
                  <i className="fas fa-spinner fa-spin"></i>
                }
              </button>
              <br />
              <br />
            </form>
          </article>
        </section>
      </section>
    </>
  );
};

export default SectionAccess;
