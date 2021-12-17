import '../styles/MenuHeader_style.scss'

export const MenuHeader = () => {
    return (
        <div className="grid-container-menu">
            <div className="grid-item-menu"><div className="logo-menu"></div></div>
            <div className="grid-item-menu"><a href="#operate">Home</a></div>
            <div className="grid-item-menu"><a href="#operate">Roadmap</a></div>  
            <div className="grid-item-menu"><a href="#operate">Team</a></div>
            <div className="grid-item-menu"><a href="#operate">Contact</a></div>
        </div>
    )
}

