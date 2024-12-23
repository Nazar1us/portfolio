import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import css from './LandingModal.module.css'
import Button from '../../Button/Button'


const LandingModal = ({ closeModal }) => {
    const [isModal, setIsModal] = useState(true)


    return (
        <div className={css.backdrop}>
            {isModal ? (<div className={`${css.modal}`} >
                <button className={css.closeModal} onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} className={css.icon} />
                </button>


                <h1>Interested in services?</h1>
                <p>Enter your contact details and we will call you</p>

                <form >
                    <label>
                        <input type="text" required placeholder='Name' />
                    </label>

                    <label>
                        <input type="text" required placeholder='Phone number' />
                    </label>

                    <Button>Get a call</Button>
                </form>
                <p>or call us</p>
                <a href="tel:+380951401440">+38 (095) 140 14 40</a>


            </div >)
                : null
            }
        </div>


    )


}


export default LandingModal