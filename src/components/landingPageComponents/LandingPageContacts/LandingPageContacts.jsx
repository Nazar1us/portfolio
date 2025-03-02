
import { SVG } from "../../../assets/svg"
import FormCallback from "../Form/Form"

const LandingPageContacts = () => {
    return (
        <section>
            <div className="container">
                <div className="heading">
                    <h1>Contacts</h1>
                    <span>Contacts</span>
                </div>
                
                <ul>
                    <li>
                        <img></img>
                        <h3>Telephone</h3>
                        <a href="tel:+380951401440">+38 095 140 14 40</a>
                    </li>
                    <li>
                        <img></img>
                        <h3>Email</h3>
                        <a href="mailto:@gmail">@gmail</a>
                    </li>
                    <li>
                        <img></img>
                        <h3>Address</h3>
                        <a href="#">
                            <span>New York City</span>
                            <p>Park Avenue 120</p>
                        </a>
                    </li>
                </ul>

                <div className="map">
                    <h2>Find us on map</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.8986682836317!2d-73.98157968727662!3d40.75187454885923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25907eddf79fb%3A0xed011b43b592fa2c!2s120%20Park%20Ave%2C%20New%20York%2C%20NY%2010017!5e0!3m2!1sen!2sus!4v1740847898172!5m2!1sen!2sus" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <FormCallback />
            </div>
            <div className="logo">
                <SVG.Logo />
            </div>
        </section>
    )
}

export default LandingPageContacts