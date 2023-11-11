import Header from "../header/Header"
import Login from '../auth/Login.jsx'
import { Matches } from '../matches/Matches.jsx'
import Home from '../home/Home.jsx'

const Main = () => {
    const user = window.localStorage.getItem('user');
    return (
        <>
            <Header/>
            <Home/>
            { user ? <Matches /> : <Login /> }
        </>
    )
}

export default Main;