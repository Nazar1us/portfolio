import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import BackToTopButton from "../BackToTopButton/BackToTopButton.jsx";
import styles from "./Layout.module.css";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // homepage route

  // style route
  const mainClass = isHomePage && styles.homePageMain;

  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={mainClass}>
        <Outlet />
        <BackToTopButton />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;

// create header
