import '../styles/Operate_style.scss'
import Text from '../containers/ContainerText';
import icon_graph from '../assets/Ilustracion-tecnico.svg'
import icon_feelings from '../assets/Ilustracion-sentimiento.svg'
import icon_twitter from '../assets/robot-twitter.svg'

const SectionOperate = () => {
    return (
        <section className="main-container-what" id="operate">
            <div className="main-container-operate-title">
                <Text child1={"¿Cómo"} child2={"funciona?"} />
            </div>
            <section className="main-product-container">
     
            <section className="product-cards">
                <article className="product-article">
                    <div className="card-text-short"><h3>Análisis Técnico</h3></div>
                    <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento</p>
                    <div className="card-image"> <img src={icon_graph} alt=""></img> </div>
                </article>
                <br/>
                <article className="product-article">
                    <div className="card-text-short">
                    <h3>Análisis Fundamental</h3>
                    </div>
                    <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento</p>
                    <div className="card-image"> <img src={icon_twitter} alt=""></img> </div>
                </article>
                <br/>
                <article className="product-article">
                    <h3>Sentimientos del mercado</h3>
                    <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento</p>
                    <div className="card-image"> <img src={icon_feelings} alt=""></img> </div>
                </article>
            </section>
        </section>
        </section>
    );
}

export default SectionOperate;