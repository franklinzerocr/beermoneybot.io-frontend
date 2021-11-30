import Text from '../containers/ContainerText';
import '../styles/Use_style.scss'

const SectionUse = () => {
    return (
        <section className="main-container-use">
            <div className="main-container-use-background">
                <div className="main-container-what-title">
                    <Text child1={"¿Cómo usar"} child2={"Beermoney Bot?"} child3={"La próxima revolución de trading de criptomonedas,"+
                        "siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias obtiendo el mejor rendimiento en cada operación"} />
                </div>
            </div>
        </section>
    )

}

export default SectionUse;