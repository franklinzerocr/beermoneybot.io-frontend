import '../styles/What_style.scss';
import Text from '../containers/ContainerText';

const SectionWhat = () => {
    return (
        <section className="main-container-what">
            <div className="main-container-what-title">
                <Text child1={"¿Qué es"} child2={"Beermoney Bot?"} child3={"La próxima revolución de trading de criptomonedas,"+
                "siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias obtiendo el mejor rendimiento en cada operación"} />
            </div>
        </section>
    );
}

export default SectionWhat;