import { useState } from 'react';
import { SearchIcon } from '../icons/Icons';
import { useNavigate } from 'react-router-dom';
import './SearchStyles.css';

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };


  const handleTeam = (event) => {
    event.preventDefault();
    console.log(searchValue);
    navigate(`/search/${searchValue}`);
    setSearchValue('');	
  }


  const selector = isSearchActive ? 'btn-search-active' : 'btn-search';

  return (
    <form onSubmit={handleTeam} className="search-container">
      {isSearchActive && (
        <input
          type="text"
          placeholder="Buscar..."
          className="buscador"
          value={searchValue}
          onChange={handleInputChange}
        />
      )}
      <div onClick={toggleSearch} className={selector}>
        <SearchIcon/>
      </div>
    </form>
  );
};

export default Search;