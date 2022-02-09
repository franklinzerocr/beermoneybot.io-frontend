import '../styles/Analysis_style.scss';
import icon_graph from '../assets/Ilustracion-tecnico.svg';
import icon_feelings from '../assets/Ilustracion-sentimiento.svg';
import icon_twitter from '../assets/robot-twitter.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SectionOperate = () => {
  return (
    <section className='main-container-what' id='operate'>
      <div className='title-container title-left'>
        <div>
          <div className='title-container-aux'>
            <AnimationOnScroll animateIn='animate__bounceIn' animateOnce={true}>
              <h2 className='first-word'>¿Cómo</h2>
              <h2 className='second-word tabbed-left'>Funciona?</h2>
            </AnimationOnScroll>
          </div>
          <div id='circle-analysis'></div>
        </div>
      </div>
      <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce={true}>
        <div className='bio-content'>
          <p>BeerMoney Bot es un sofware compuesto de muchos modulos, que hace compras y ventas de forma automatizada en el mercado cripto 24/7.</p>
          <p>Gracias al Data Mining y la aplicacion de Inteligencia Artificial en distintos niveles y formas, obtiene un panorama completo e integral de cada criptomoneda, y se anticipa o reacciona rapidamente a los movimientos dentro del mercado cripto.</p>
        </div>
      </AnimationOnScroll>
      <section className='main-product-container'>
        <section className='product-cards'>
          <article className='product-article'>
            <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce={true}>
              <div className='card-text-short'>
                <h3>Análisis Técnico</h3>
              </div>
              <p>El bot puede realizar análisis técnico, pero de forma más rápida y precisa que un humano, pues no es afectado por los efectos psicológicos del trading de criptomonedas.</p>
              <div className='card-image-graph'>
                <img src={icon_graph} alt=''></img>
              </div>
            </AnimationOnScroll>
          </article>

          <br />
          <article className='product-article'>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
              <div className='card-text-short'>
                <h3>Análisis Fundamental</h3>
              </div>
              <p>El bot revisa de forma constante fuentes de información confiable, a modo de reaccionar de forma rápida a noticias, anuncios, proyecciones... aprovechando así estos movimientos.</p>
              <div className='card-image-twitter'>
                <img src={icon_twitter} alt=''></img>
              </div>
            </AnimationOnScroll>
          </article>
          <br />
          <article className='product-article'>
            <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce={true}>
              <div className='card-text-short'>
                <h3>Sentimientos del mercado</h3>
              </div>
              <p>El bot puede analizar de forma cuantitativa el miedo y la avaricia de los mercados, y lo suma a las otras herramientas de análisis para la toma de decisión, todo en segundos. </p>
              <div className='card-image-feelings'>
                <img src={icon_feelings} alt=''></img>
              </div>
            </AnimationOnScroll>
          </article>
        </section>
      </section>
    </section>
  );
};

export default SectionOperate;
