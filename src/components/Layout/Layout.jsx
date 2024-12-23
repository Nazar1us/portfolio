import { Outlet, } from 'react-router-dom'
import Navigation from '../Navigation/Navigation.jsx'
import BackToTopButton from '../BackToTopButton/BackToTopButton.jsx'

const Layout = () => {
    return (
        <>
            <header >
                <Navigation />
            </header >
            <main>
                <Outlet />
                <BackToTopButton />
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Layout

// create header