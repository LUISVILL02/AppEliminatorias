import { Link }  from 'react-router-dom'
import "./ButtonStyles.css"
export const Button = ({text, route, onClick}) => {
    const hanleModal = (e) => {
        e.preventDefault()
        onClick(true)
    }
    return (
        //<Link to={route}>{text}</Link>
        <a href="" onClick={hanleModal} className='botones'>{text}</a>
    )
}

export const ButtonSubmit = ({text}) => {
    return (
        <button type="submit" className='buttons'>{text}</button>
    )
}
