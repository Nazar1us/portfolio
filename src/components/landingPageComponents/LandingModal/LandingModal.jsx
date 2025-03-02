import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import css from './LandingModal.module.css'
import FormCallback from '../Form/Form'


const LandingModal = ({ closeModal }) => {
    const [isModal, setIsModal] = useState(true)


    return (
        <div className={css.backdrop}>
            {isModal ? (<div className={`${css.modal}`} >
                <button className={css.closeModal} onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} className={css.icon} />
                </button>


               <FormCallback />
                <p>or call us</p>
                <a href="tel:+380951401440">+38 (095) 140 14 40</a>


            </div >)
                : null
            }
        </div>


    )


}


export default LandingModal