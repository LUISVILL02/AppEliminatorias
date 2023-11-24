
import React from 'react';
import "./TeamStyles.css"

const Team = ({ team, onClose }) => {
  return (
    <div className="team-container">
    <h1 className="titulo">INFORMACION DEL EQUIPO</h1>
      <img className="banderaTeam" src={team.flag} alt={`Bandera de ${team.name}`} />
      <h2 className="nombreEquipo">{team.name}</h2>
      <p className="nombreTecnico">Director técnico: {team.coach}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default Team;
