import Logo from "../contactsComponents/logo/Logo.jsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.header}>
      <nav className={css.navbar}>
        <Logo />
        <ul className={css.navWrapper}>
          <li className={css.navList}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.active : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={css.navList}>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.active : ""}`
              }
            >
              Contacts
            </NavLink>
          </li>
          <li className={css.navList}>
            <NavLink
              to="/bridge"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.active : ""}`
              }
            >
              Landing Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
