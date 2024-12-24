import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'
import { useResize } from '../../../hooks/useResize';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useBurgerMenu } from '../../../hooks/useBurgerMenu';
import LandingModal from '../LandingModal/LandingModal';
import Button from '../../Button/Button';
// import { ReactComponent as BridgeLogo } from '../../../assets/LandingPageImages/Icons/header-logo.svg'

const Header = () => {
    // const [isOpen, setIsOpen] = useState(false)
    const [getService, setGetService] = useState(false)
    const { isScreenMobile } = useResize();
    const handleBurgerMenu = useBurgerMenu();

    const activeNav = {
        display: 'inline-block',
        borderBottom: "2px solid #29974E",
        paddingBottom: '10px'
    }

    return (
        <header >
            <div className={`container ${css.header}`}>
                {/* <Link to='/bridge'><BridgeLogo /></Link> */}
                {isScreenMobile ?
                    <button className={css.burgerBtn}
                        onClick={handleBurgerMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    :
                    <>
                        <nav className={css["main-nav"]}>
                            <NavLink
                                to='.'
                                end
                                style={({ isActive }) => isActive ? activeNav : null}
                            >
                                Main
                            </NavLink>
                            <NavLink
                                to="services"
                                style={({ isActive }) => isActive ? activeNav : null}
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="contacts"
                                style={({ isActive }) => isActive ? activeNav : null}
                            >
                                Contacts
                            </NavLink>
                        </nav>
                        <Button setGetService={setGetService}>Get Services</Button>
                    </>

                }
                {isScreenMobile && <BurgerMenu />}
                {getService && <LandingModal closeModal={() => setGetService(false)} />}
            </div>
        </header >

    )
}

export default Header