import css from './WhatWeDo.module.css'
import property from '../../../assets/LandingPageImages/Icons/земля.png'
import cityBuilding from '../../../assets/LandingPageImages/Icons/мыстобудування.png'
import investment from '../../../assets/LandingPageImages/Icons/investment.png'

const WhatWeDo = () => {
    return (
        <section className={css.ourwork}>
            <h1>Послуги</h1>
            <ul>
                <li>
                    <img src={property} alt="" />
                    <p>Земельні відносини</p>
                </li>
                <li>
                    <img src={cityBuilding} alt="" />
                    <p>Містобудівна діяльність</p>
                </li>
                <li>
                    <img src={investment} alt="" />
                    <p>Благоустрій</p>
                </li>
            </ul>
        </section>
    )
}

export default WhatWeDo