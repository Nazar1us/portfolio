import React, { useEffect, useState } from 'react'
import css from './BackToTopButton.module.css'
import { useWindowScrollPosition } from '../../hooks/useWindowScrollPosition'

const BackToTopButton = () => {
    const { scrollY } = useWindowScrollPosition()

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {scrollY > 100 && (
                <button className={css.backToTop} onClick={scrollUp}>^</button>
            )}
        </div>
    )
}

export default BackToTopButton