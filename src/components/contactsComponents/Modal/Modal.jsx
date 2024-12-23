import styles from './Modal.module.css'

const Modal = ({ closeModal, id, handleDelete }) => {
    const deleteContact = () => {
        handleDelete(id)
        closeModal()
    }
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <button type='button' onClick={closeModal}>Close</button>
                <p>Are you sure you want to delete this contact?</p>
                <button type='button' onClick={deleteContact}>Yes</button>
                <button type='button' onClick={closeModal}>No</button>
            </div>
        </div>
    )
}

export default Modal