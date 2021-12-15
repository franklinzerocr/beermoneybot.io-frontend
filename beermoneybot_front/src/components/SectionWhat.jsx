import '../styles/What_style.scss';
import Text from '../containers/ContainerText';
import { TableRoi } from './TableRoi';

const SectionWhat = () => {
    return (
        <section className="main-container-what">
            <div className="main-container-what-title">
                {/* <Text child1={"¿Qué es"} child2={"Beermoney Bot?"}  /> */}
                <TableRoi />

            </div>
        </section>
    );
}

export default SectionWhat;