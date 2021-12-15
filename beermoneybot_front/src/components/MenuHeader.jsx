import '../styles/MenuHeader_style.scss'

export const MenuHeader = () => {
    return (
        <div className="grid-container">
            <div class="grid-item"><div className="logo"></div></div>
            <div class="grid-item"><a href="#operate">Menu 1</a></div>
            <div class="grid-item"><a href="#operate">Menu 2</a></div>  
            <div class="grid-item"><a href="#operate">Menu 3</a></div>
            <div class="grid-item"><a href="#operate">Menu 4</a></div>

        </div>
    )
}
