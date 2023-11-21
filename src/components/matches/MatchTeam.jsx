import { useEffect, useState } from 'react';
import appService from '../../services/appService.js';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import logoFifa from '../../assets/2026_fifa_world_cup-logo_brandlogos.net_tikll.png';
import CardMatch from './CardMatch.jsx';


export const MatchTeam = () => {
  const [teamData, setTeamData] = useState([]);

  const { searchValue } = useParams();
  console.log(searchValue);

  useEffect(() => {
    const getTeam = async () => {
      const team = await appService.getMatchesByName(searchValue);
      console.log(team);
      setTeamData(team);
    };
    getTeam();
  }, [teamData]);

  return (
    <div className='matches'>
                <ul className='lista'>
                    <div className="banner">
                        <div className="container">
                            <img src={logoFifa} alt="" className='logoFifa'/>
                            <h1 className='tituloList'>FIFA world cup 2026</h1>
                        </div>
                    </div>
                    {teamData.length > 0 ? teamData.map(lisTeam => {
                      return (
                        <li key={lisTeam.id} onChange={teamData}>
                          <CardMatch match={lisTeam}/>
                        </li>
                      )
                    }): <h1>No hay partidos</h1>}
                </ul>
            </div>
  );
};

MatchTeam.propTypes = {
  searchData: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default MatchTeam;
