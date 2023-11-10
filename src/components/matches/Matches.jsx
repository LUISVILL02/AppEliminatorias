import appService from '../../services/appService.js'
import CardMatch from './CardMatch.jsx';
import { Button } from '../buttons/Button.jsx';
const Matches = () => {
    const user = true
    try {
        const matches = async () => {
            // const matches = await appService.getMatches();
            // console.log(matches);
        }  
        matches();
    } catch (error) {
        
    }
    const match1 = {
        localteam: 'Colombia', 
        visitorteam: 'Venezuela', 
        localteam_score: 2, 
        visitorteam_score: 1, 
        date: '2021-10-10',
        stadium: 'Metropolitano',
        reffere: 'wilton sampaio',
    }
    const match2 = {
        localteam: 'Argentina', 
        visitorteam: 'Perú', 
        localteam_score: 2, 
        visitorteam_score: 0, 
        date: '2021-10-10',
        stadium: 'Monumental',
        reffere: 'wilman roldan'
    }
    return (
        <>
            <div className='matches'>
                <ul>
                    <li><CardMatch match={match1}/></li>
                    <li><CardMatch match={match2}/></li>
                </ul>
            </div>
            {user ? <Button text="Crear partido" route='/agregarPartido'/> : <></>}
        </>
    )
}
export default Matches;