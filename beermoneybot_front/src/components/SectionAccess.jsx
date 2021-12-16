import React from 'react';
import '../styles/Access_style.scss';

const SectionAccess = () => {
  return (
    <>
      <div className="main-access-container-title">
        <h1>Solicita tu acceso</h1>
        <h2>anticipado</h2>
      </div>
    <section className="main-access-container">
      <section class="plans-container-slider">
                <article className="plans-container-card">
                  <h3 className="plan-card-title">Beermoney Bot se encuentra en una fase de acceso limitado, para solicitar ser parte debe comunicarse con nuestro equipo</h3>
                    <p className="recommended"></p>
                    <div className="plan-info-container">
                        <input type="text" id="femail" name="femail" placeholder="EMAIL"></input>
                        <textarea id="ftext" name="ftext" placeholder="TEXTO" rows="4" cols="50" maxLength="400"></textarea>
                        <button className="plan-card-button">Enviar</button>
                    </div>
                </article>

            </section>
    </section>  
    </>
  )

}

export default SectionAccess;