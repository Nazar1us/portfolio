import React, { useEffect, useRef, useState } from 'react'
import {options} from '../../../../../../data/data'
import css from './Option.module.css'

const Option = ({item}) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded(prevState => !prevState)
        const {y} = ref.current.getBoundingClientRect()
        const {scrollHeight} = document.documentElement;

        if(expanded) {
            
            window.scrollTo(0, y + scrollHeight)
        }
    }

    const ref = useRef(null);

    useEffect(() => {
        console.log(ref.current.getBoundingClientRect())
        // console.log(ref.current.scrollHeight, 'height')
    }, [])
  return (
    <>
            <li>
                <h2 ref={ref}>{item}</h2>
                <ul>{ expanded ?  
                options[item].map((option, index) => (
                    <li 
                        key={index} 
                        className={css.optionItem}
                    >
                        <p>{option}</p>
                    </li>)) : 
                    options[item].slice(0, 3).map((option, index) => (
                    <li key={index}>
                        <p>{option}</p>
                    </li>))
                    }
                </ul>
                    <button type='button' onClick={handleExpand}>
                        {expanded ? 'up' : 'down'}
                        </button>
            </li></>
  )
}

export default Option