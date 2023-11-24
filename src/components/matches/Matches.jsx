import appService from '../../services/appService.js'
import { useEffect, useState } from 'react';
import CardMatch from './CardMatch.jsx';
import FormMatch from './FormMatch.jsx';
import { Button } from '../buttons/Button.jsx';
import Team from '../teams/Team.jsx';  // Importa el componente Team
import logoFifa from '../../assets/2026_fifa_world_cup-logo_brandlogos.net_tikll.png'
import './matchesStyles.css'
import './CardMatchStyles.css'

export const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  let userLocal = window.localStorage.getItem('user') ?? {
    token: " ",
    type: "",
    id: 0,
    username: "",
    email: "",
    roles: []
  };
  const userJson = userLocal.token !== " " ? JSON.parse(userLocal) : userLocal;
  let isAdmin = userJson.roles.find(role => role === 'ROLE_ADMIN') === 'ROLE_ADMIN';
  const user = userLocal.token;

  useEffect(() => {
    const matchLis = async () => {
      const matches = await appService.getMatches();
      setMatches(matches);
    }
    matchLis();
  }, [])

  const handleMo = isModal => {
    setOpen(isModal)
  }
  const hanleCloseModal = close => {
    setOpen(!close)
  }

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

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
              <img src={logoFifa} alt="" className='logoFifa' />
              <h1 className='tituloList'>FIFA world cup 2026</h1>
            </div>
          </div>
          {matches.length > 0 && matches.map((match) => (
            <li key={match.id}>
              <CardMatch match={match} onTeamClick={handleTeamClick} />
            </li>
          ))}
        </ul>
      </div>
      {(user !== " " && isAdmin) ? <Button className="btn-create-match" text="Crear partido" route='/agregarPartido' onClick={handleMo} /> : <></>}
      {open && <FormMatch onMatch={hanleMatch} closeModal={hanleCloseModal} />}
      {selectedTeam && <Team team={selectedTeam} onClose={() => setSelectedTeam(null)} />} 
    </>
  )
}

export default Matches;
