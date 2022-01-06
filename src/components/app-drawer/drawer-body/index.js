import "./styles.css";

export default function DrawerBody(props) {
    return (
        <div 
            className={`drawer-body ${props.drawerActive ? "active drawer-activate" : "drawer-deactivate"}`}
        >
            <a href="#about" className='drawer-nav'>About Me</a>
            <a href="#skills" className='drawer-nav'>Technologies</a>
            <a href="#projects" className='drawer-nav'>Projects</a>
            <a href="#contact" className='drawer-nav'>Contact</a>
        </div>
    )
}
