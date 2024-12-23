import React from 'react'
import css from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <ul className={css.aboutUs}>
            <li>
                <div>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="112" height="112" rx="56" stroke="#29974E" stroke-width="8" />
                        <path d="M68 40V48M52 40V48M42 56H78M46 44H74C76.2091 44 78 45.7909 78 48V76C78 78.2091 76.2091 80 74 80H46C43.7909 80 42 78.2091 42 76V48C42 45.7909 43.7909 44 46 44Z" stroke="#323232" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                <div>
                    <h3>3 роки</h3>
                    <p>надаємо послуги в сфері земледіяльності</p>
                </div>
            </li>
            <li>
                <div>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="112" height="112" rx="56" stroke="#29974E" stroke-width="8" />
                        <path d="M67.111 76V72.4444C67.111 70.5585 66.3618 68.7497 65.0282 67.4161C63.6946 66.0825 61.8859 65.3333 59.9999 65.3333H47.5554C45.6695 65.3333 43.8607 66.0825 42.5271 67.4161C41.1935 68.7497 40.4443 70.5585 40.4443 72.4444V76M68.8888 58.2222L72.4443 61.7778L79.5554 54.6667M60.8888 51.1111C60.8888 55.0385 57.705 58.2222 53.7777 58.2222C49.8503 58.2222 46.6666 55.0385 46.6666 51.1111C46.6666 47.1838 49.8503 44 53.7777 44C57.705 44 60.8888 47.1838 60.8888 51.1111Z" stroke="#323232" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                <div>
                    <h3>200+</h3>
                    <p>клієнтів, які звернулись до нашої компанії</p>
                </div>
            </li>
            <li>
                <div>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="112" height="112" rx="56" stroke="#29974E" stroke-width="8" />
                        <path d="M54 48H76M54 60H76M54 72H76M46 48V48.02M46 60V60.02M46 72V72.02" stroke="#323232" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                <div>
                    <h3>500+ кейсів</h3>
                    <p>від наших клієнтів, які ми вирішили</p>
                </div>
            </li>
            <li>
                <div>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="112" height="112" rx="56" stroke="#29974E" stroke-width="8" />
                        <path d="M60 50C60 47.8783 59.1571 45.8434 57.6569 44.3431C56.1566 42.8429 54.1217 42 52 42H40V72H54C55.5913 72 57.1174 72.6321 58.2426 73.7574C59.3679 74.8826 60 76.4087 60 78M60 50V78M60 50C60 47.8783 60.8429 45.8434 62.3431 44.3431C63.8434 42.8429 65.8783 42 68 42H80V72H66C64.4087 72 62.8826 72.6321 61.7574 73.7574C60.6321 74.8826 60 76.4087 60 78" stroke="#323232" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                <div>
                    <h3>40+ послуг</h3>
                    <p>наша компанія пропонує своїм клієнтам</p>
                </div>
            </li>
        </ul>
    )
}

export default AboutUs