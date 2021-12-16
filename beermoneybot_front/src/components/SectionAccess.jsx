import React from 'react';
import Text from '../containers/ContainerText';
import '../styles/Access_style.scss';

const SectionAccess = () => {
  return (
    <section className="main-exchange-container">
      <div className="main-container-operate-title">
          <Text child1={"Solicita tu acceso"} child2={"anticipado"} />
      </div>
      <section class="plans-container-slider">
    
                <article className="plans-container-card">
                    <p className="recommended"></p>
                    <div className="plan-info-container">
                        <h3 className="plan-card-title">Beermoney Bot se encuentra en una fase de acceso limitado, para solicitar ser parte debe comunicarse con nuestro equipo</h3>
                        <input type="text" id="femail" name="femail" placeholder="EMAIL"></input>
                        <input type="text" id="ftext" name="ftext" placeholder="TEXTO"></input>
                        <button className="plan-card-button">Enviar</button>
                    </div>
                </article>

            </section>
    </section>  
  )

}

export default SectionAccess;