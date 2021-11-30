import '../styles/Verify_style.scss'
import Title from '../containers/Title';

const SectionVerify = () => {
    return(
        <section className="main-container-verify">
        <div className="main-container-verify-title">
          <Title child1={"¿Cómo verificar"} child2={"que es real?"} child3={"La próxima revolución de trading de criptomonedas,"+
            "siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias obtiendo el mejor rendimiento en cada operación"} />
        </div>
      </section>
    )

}

export default SectionVerify;