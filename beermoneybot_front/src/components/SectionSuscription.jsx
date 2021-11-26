const SectionSuscription = () => {
    return (
        <section id="plans" className="main-plans-container">
            <div className="plans-title">
                <h2>Suscríbete en el plan que prefieras</h2>
            </div>
            <section className="plans-container-slider">
                <article className="plans-container-card">
                    <div className="plan-info-container">
                        <h3 className="plan-card-title">Light</h3>
                        <p className="plan-card-price"><span>usdt</span> 1</p>
                        <button className="plan-card-button">Escoge este </button>
                    </div>
                </article>
                <article className="plans-container-card">
                    <div className="plan-info-container">
                        <h3 className="plan-card-title">Medium</h3>
                        <p className="plan-card-price"><span>usdt</span> 25</p>
                        <button className="plan-card-button">Escoge este </button>
                    </div>
                </article>
            </section>
        </section>
    )

}

export default SectionSuscription;