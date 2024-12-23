import { NavLink } from 'react-router-dom'
import css from './BurgerMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useBurgerMenu } from '../../../hooks/useBurgerMenu'


const BurgerMenu = () => {
    const handleBurgerMenu = useBurgerMenu();
    return (
        <div className={`${css['burger-menu']}  my-burger`}>

            <button
                className={css.burgerBtn}
                onClick={handleBurgerMenu}>
                <FontAwesomeIcon icon={faXmark} />
            </button>

            <div>
                <NavLink to='.' onClick={handleBurgerMenu}>Main</NavLink>
                <NavLink to='services' onClick={handleBurgerMenu}>Services</NavLink>
                <NavLink to="contacts" onClick={handleBurgerMenu}>Contacts</NavLink>
            </div>

            <ul>
                <li><a href='tel:+380975555555'>+38 (097) 555 55 55</a></li>
                <li><a href="mailto:example@gmail.com">example@gmail.com</a></li>
            </ul>
        </div>
    )
}

export default BurgerMenu