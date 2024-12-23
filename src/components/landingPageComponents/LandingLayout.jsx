import { Outlet } from 'react-router'
import Header from './Header/Header'


const LandingLayout = () => {
    return (
        <div style={{ position: "relative" }}>

            <Header />
            <main>
                <Outlet />
            </main>

            <footer>

            </footer>

        </div>
    )
}

export default LandingLayout