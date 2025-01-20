
import Option from './components/Option/Option'
import {options} from '../../../../data/data'



const Services = () => {
    

    return (
        <div className='container'>
            <ul>{Object.keys(options).map((item, index) => 
            <Option item={item} key={index}/>)} 
            </ul>
        </div>
    )
}

export default Services