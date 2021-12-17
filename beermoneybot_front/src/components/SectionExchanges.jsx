import Text from '../containers/ContainerText';
import '../styles/Exchanges_style.scss'
import logo from '../assets/Logos/LogoIndex.png'

const SectionExchanges = () => {
    return (
        <section className="main-container-use">
            <div className="main-container-use-background">
                <div className="main-container-use-title">
                    <Text child1={"Exchanges"} child2={"Compatibles"} />
                </div>
                <section className="section-exchange">
                    <div className="grid-exchanges">
                        <div className="grid-exchange"><img src={logo} alt="" /></div>
                        <div className="grid-exchange"><img src={logo} alt="" /></div>
                        <div className="grid-exchange"><img src={logo} alt="" /></div>  
                        <div className="grid-exchange"><img src={logo} alt="" /></div>
                        <div className="grid-exchange"><img src={logo} alt="" /></div> 
                        <div className="grid-exchange"><img src={logo} alt="" /></div> 
                    </div>
                </section>
            </div>
        </section>
    )

}

export default SectionExchanges;