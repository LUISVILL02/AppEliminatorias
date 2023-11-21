import { useEffect, useState } from 'react';
import { getTeams } from '../../services/teams';
import appService from '../../services/appService.js';
import PropTypes from 'prop-types';
import { CloseIcon } from "../icons/Icons.jsx";
import CardMatch from './CardMatch.jsx';


const MatchTeam = ({ searchData, closeModal }) => {
  const [teamData, setTeamData] = useState(null);
  const [matches, setMatch] = useState();

  useEffect(() => {
    const searchTeam = async () => {
      try {
        const teamsList = await getTeams();
        const foundTeam = teamsList.find((team) => team.name.toLowerCase() === searchData.toLowerCase());

        if (foundTeam) {
          setTeamData(foundTeam);
        } else {
          setTeamData(null);
        }
      } catch (error) {
        console.error('Error al obtener datos de equipos:', error);
      }
    };

    searchTeam();
  }, [searchData]);

  useEffect(() => {
    const getMatch = async () => {
      try {
        const matchList = await appService.getMatchByName(teamData.name);
        if (matchList) {
          setMatch(matchList);
        } else {
          console.warn('No se encontraron partidos para el equipo:', teamData.name);
        }
      } catch (error) {
        console.error('Error al obtener datos de partidos:', error);
      }
    };

    if (teamData) {
      getMatch();
    }
  }, [teamData]);

  const handleClose = () => {
    closeModal(true);
  };

  if (!teamData) {
    return null;
  }

  return (
    <div className='matches'>
                <div onClick={handleClose}><CloseIcon/></div>
                <ul className='lista'>
                        <div className="container">
                            <h1 className='tituloList'>Partidos de un equipo</h1>
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
  );
};

MatchTeam.propTypes = {
  searchData: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default MatchTeam;
