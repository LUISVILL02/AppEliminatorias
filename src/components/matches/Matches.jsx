import appService from '../../services/appService.js'
import { useEffect, useState } from 'react';
import CardMatch from './CardMatch.jsx';
import FormMatch from './FormMatch.jsx';
import { Button } from '../buttons/Button.jsx';
import { setToken } from '../../services/appService.js';
import logoFifa from '../../assets/2026_fifa_world_cup-logo_brandlogos.net_tikll.png'
import './matchesStyles.css'

export const Matches = () => {
    const [matches, setMatches] = useState([])
    const [open, setOpen] = useState(false)

    const userToken = window.localStorage.getItem('user');
    useEffect(() => {
        const matchLis = async () => {
            setToken(userToken);
            const matches = await appService.getMatches();
            setMatches(matches);
        }  
        matchLis();
    } ,[])
    console.log("mat: ",matches);

    const handleMo = isModal => {
        setOpen(isModal)
    }

    const hanleMatch = (ma) => {
        console.log("partido: ",ma);
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
                        console.log("match: ",match);
                        return (
                            <li key={match.id}>
                                <CardMatch match={match}/>
                            </li>
                        )
                        
                    })}
                </ul>
            </div>
            {userToken ?<Button text="Crear partido" route='/agregarPartido' onClick={handleMo}/> : <></>}
            {open && <FormMatch onMatch={hanleMatch}/>}
        </>
    )
}
export default Matches;