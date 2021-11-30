import '../styles/Operate_style.scss'
import Text from '../containers/ContainerText';

const SectionOperate = () => {
    return (
        <section className="main-container-what">
            <div className="main-container-operate-title">
                <Text child1={"¿Cómo opera "} child2={"al día?"} child3={"La próxima revolución de trading de criptomonedas,"
                +"siendo un bot que te ayuda a navegar entre los diferentes precios y tendencias obtiendo el mejor rendimiento en cada operación"} />
            </div>
        </section>
    );
}

export default SectionOperate;