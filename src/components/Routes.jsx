import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './header/Header.jsx'
import Main from './main//Main.jsx'
import Login from './auth/Login.jsx'
import Singup from './auth/Singup.jsx'
import Matches from './matches/Matches.jsx';
import Home from './home/Home.jsx'
import FormMatch from './matches/FormMatch.jsx';
import { FormTeam } from './teams/FormTeam.jsx';
import { NotFound } from './NotFount.jsx';
import { MatchTeam } from './matches/MatchTeam.jsx';
import User from './user/User.jsx';

const Rout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route index element={<Home></Home>}></Route>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='partidos' element={<Matches/>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='register' element={<Singup></Singup>}></Route>
                <Route path='equipos' element={<FormTeam></FormTeam>}></Route>
                <Route path='agregarPartido' element={<FormMatch></FormMatch>}></Route>
                <Route path="search/:searchValue" element={<MatchTeam/>}/>
                <Route path='user' element={<User />}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </>
    )
}

export default Rout;