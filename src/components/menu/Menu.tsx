import { NavLink } from "react-router-dom";

interface setActiveProps {
    isActive: boolean
}

const setActive = ({isActive}: setActiveProps) => isActive ? "menu__item menu__item-active" : "menu__item";

export default function Menu() {
    return(
        <div className="menu">
            <NavLink to='/' className={setActive} >ГЛАВНАЯ</NavLink>
            <NavLink to='/drift' className={setActive} >ДРИФТ-ТАКСИ</NavLink>
            <NavLink to='/timeattack' className={setActive} >TIME ATTACK</NavLink>            
            <NavLink to='/forza' className={setActive} >FROZA KARTING</NavLink>
        </div>
    )
}