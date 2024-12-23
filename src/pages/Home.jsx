import React, { useState } from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import image from '../assets/contact.png'
const Home = () => {
    return (
        <div >
            <h1>Welcome to our contact project</h1>
            <img src={image} alt="contact" />
        </div >
    )
}

export default Home