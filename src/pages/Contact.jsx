import React from 'react'
import { useState, useEffect } from 'react'
import Form from '../components/contactsComponents/Form/Form'
import ListItems from '../components/contactsComponents/ListItems/ListItems'
import styles from './Contact.module.css'


const Contact = () => {
    const [showContacts, setShowContacts] = useState(false)

    return (
        <>
            <h1 className={styles['header-text']}>Add Your New Contact to the list</h1>
            <Form />
            <ListItems />
        </>
    )
}

export default Contact

// create form name and number