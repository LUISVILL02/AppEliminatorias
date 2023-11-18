import { Link }  from 'react-router-dom'
import "./ButtonStyles.css"
export const Button = ({text, route, onClick}) => {
    const hanleModal = (e) => {
        e.preventDefault()
        onClick(true)
    }
    return (
        <a href="" onClick={hanleModal} className='botones btn'>{text}</a>
    )
}
export const ButtonNavigate = ({text, route}) => {
    return (
        <Link to={route} className='botones'>{text}</Link>
    )
}
export const ButtonSubmit = ({text}) => {
    return (
        <button type="submit" className='buttons'>{text}</button>
    )
}
