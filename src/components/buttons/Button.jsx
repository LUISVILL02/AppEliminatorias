import { Link }  from 'react-router-dom'

export const Button = ({text, route, onClick}) => {
    const hanleModal = (e) => {
        e.preventDefault()
        onClick(true)
    }
    return (
        //<Link to={route}>{text}</Link>
        <a href="" onClick={hanleModal}>{text}</a>
    )
}

export const ButtonSubmit = ({text}) => {
    return (
        <button type="submit">{text}</button>
    )
}
