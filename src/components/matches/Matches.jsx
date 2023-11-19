import appService from '../../services/appService.js'
import { useEffect, useState } from 'react';
import CardMatch from './CardMatch.jsx';
import FormMatch from './FormMatch.jsx';
import { Button } from '../buttons/Button.jsx';
import logoFifa from '../../assets/2026_fifa_world_cup-logo_brandlogos.net_tikll.png'
import './matchesStyles.css'
import './CardMatchStyles.css'

export const Matches = () => {
    const [matches, setMatches] = useState([])
    const [open, setOpen] = useState(false)

    let userLocal = window.localStorage.getItem('user') ?? {
        token: " ",
        type: "",
        id: 0,
        username: "",
        email: "",
        roles: []
    };
    const user = userLocal.token

    useEffect(() => {
        const matchLis = async () => {
            const matches = await appService.getMatches();
            setMatches(matches);
        }  
        matchLis();
    } ,[])

    const handleMo = isModal => {
        setOpen(isModal)
    }
    const hanleCloseModal = close => {
        setOpen(!close)
    }

    const hanleMatch = (ma) => {
        setMatches(prev => [
            ...prev,
            ma
        ])
    }

    return (
        <>
            <div className='matches'>
                <ul className='lista'>
                    <div className="banner">
                        <div className="container">
                            <img src={logoFifa} alt="" className='logoFifa'/>
                            <h1 className='tituloList'>FIFA world cup 2026</h1>
                        </div>
                    </div>
                    {matches.length > 0 && matches.map((match) => {
                        return (
                            <li key={match.id}>
                                <CardMatch match={match}/>
                            </li>
                        )
                        
                    })}
                </ul>
            </div>
            {(user !== " ") ? <Button className="btn-create-match" text="Crear partido" route='/agregarPartido' onClick={handleMo}/> : <></>}
            {open && <FormMatch onMatch={hanleMatch} closeModal={hanleCloseModal}/>}
        </>
    )
}
export default Matches;