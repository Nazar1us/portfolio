import logo from '../../../assets/LandingPageImages/Icons/logo.svg'
import css from './Hero.module.css'
import LandingModal from '../LandingModal/LandingModal';
import { useState } from 'react';
import Button from '../../Button/Button';

const Hero = () => {
    const [getService, setGetService] = useState(false)
    return (
        <>
            <section className={css.sectionHero}>
                <div className={`container ${css.hero}`}>
                    <img src={logo} alt="bridge" />
                    <div>
                        <div className={css.consult}>
                            <h1>Консалтингова компанія</h1>
                            <h2>МІСТ КОНСАЛТ</h2>
                            <p>Між метою та результатом є Міст</p>
                            <Button
                                className={css.btnConsult} setGetService={setGetService}>Замовити послугу</Button>
                        </div>
                    </div>
                </div>
                <ul>
                    <li><a href='tel:+380975555555'>+38 (097) 555 55 55</a></li>
                    <li><a href="mailto:example@gmail.com">example@gmail.com</a></li>
                </ul>
            </section >
            {getService && <LandingModal closeModal={() => setGetService(false)} />
            }
        </>
    )
}

export default Hero