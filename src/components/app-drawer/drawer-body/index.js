import "./styles.css";

export default function DrawerBody(props) {
    return (
        <div 
            className={`drawer-body ${props.drawerActive ? "active drawer-activate" : "drawer-deactivate"}`}
        >
            <div className='drawer-nav'>
                About Me
            </div>
            <div className='drawer-nav'>Technologies</div>
            <div className='drawer-nav'>Projects</div>
            <div className='drawer-nav'>Contact</div>
        </div>
    )
}
