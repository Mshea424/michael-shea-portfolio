import "./styles.css";

export default function DrawerBody(props) {
    return (
        <div 
            className={`drawer-body ${props.drawerActive ? "active drawer-activate" : "drawer-deactivate"}`}
        >
        </div>
    )
}
