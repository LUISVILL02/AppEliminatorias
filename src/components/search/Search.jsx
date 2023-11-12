import { useState } from 'react';
import './SearchStyles.css'; // Asegúrate de tener estilos para el componente Search

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <contain className={`search ${isSearchActive ? 'active' : ''}`}>
      <button onClick={toggleSearch}>
        {isSearchActive ? 'cerrar' : 'buscar'}
      </button>
      {isSearchActive && <input type="text" placeholder="Buscar..." className='buscador'/>}
    </contain>
  );
};

export default Search;