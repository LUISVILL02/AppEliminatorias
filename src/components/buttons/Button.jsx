import { Link }  from 'react-router-dom'

export const Button = ({text, route}) => {
    return (
        <Link to={route}>{text}</Link>
    )
}

export const ButtonSubmit = ({text}) => {
    return (
        <button type="submit">{text}</button>
    )
}
