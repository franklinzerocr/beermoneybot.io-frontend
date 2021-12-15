import '../styles/Operate_style.scss'
import Text from '../containers/ContainerText';

const SectionOperate = () => {
    return (
        <section className="main-container-what" id="operate">
            <div className="main-container-operate-title">
                <Text child1={"¿Cómo"} child2={"funciona?"} />
            </div>
            <section className="main-product-container">
     
            <section className="product-cards">
                <article className="product-article">
                    <h3>Análisis Técnico</h3>
                    <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento</p>
                </article>
                <br/>
                <article className="product-article">
                    <h3>Análisis Fundamental</h3>
                    <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento</p>
                </article>
                <br/>
                <article className="product-article">
                    <h3>Sentimientos del mercado</h3>
                    <p>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento</p>
                </article>
            </section>
        </section>
        </section>
    );
}

export default SectionOperate;