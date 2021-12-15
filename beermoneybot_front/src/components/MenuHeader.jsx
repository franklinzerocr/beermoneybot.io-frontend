import '../styles/MenuHeader_style.scss'

export const MenuHeader = () => {
    return (
        <div className="grid-container">
            <div class="grid-item"><div className="logo-menu"></div></div>
            <div class="grid-item"><a href="#operate">Home</a></div>
            <div class="grid-item"><a href="#operate">Roadmap</a></div>  
            <div class="grid-item"><a href="#operate">Team</a></div>
            <div class="grid-item"><a href="#operate">Contact</a></div>
        </div>
    )
}

