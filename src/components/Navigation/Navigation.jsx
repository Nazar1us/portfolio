import Logo from '../contactsComponents/logo/Logo.jsx'
import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'

const Navigation = () => {

    return (
        <div className={css.header}>
            <nav>
                <ul className={css.navbar}>
                    <Logo />
                    <li className={css.navList}>
                        <NavLink className={css.link} to='/'>Home</NavLink>
                    </li>
                    <li className={css.navList}>
                        <NavLink to='/contacts' className={css.link}>Contacts</NavLink>
                    </li>
                    <li className={css.navList}>
                    <NavLink to="/bridge" className={css.link}>Landing Page</NavLink>
                    </li>
                </ul>
            </nav >
        </div>
    )
}

export default Navigation

