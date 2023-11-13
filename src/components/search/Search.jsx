import { useState } from 'react';
import './SearchStyles.css'; // Asegúrate de tener estilos para el componente Search
import { SearchIcon } from '../icons/Icons';

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  const selector = isSearchActive ? 'btn-search-active' : 'btn-search';
  return (
    <div className="search-container">
      {isSearchActive && <input type="text" placeholder="Buscar..." className='buscador'/>}
      <button onClick={toggleSearch} className={selector}>
        <SearchIcon/>
      </button>
    </div>
  );
};

export default Search;