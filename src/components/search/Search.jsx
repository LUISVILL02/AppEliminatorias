import { useState } from 'react';
import './SearchStyles.css';
import { SearchIcon } from '../icons/Icons';
import MatchTeam from '../matches/MatchTeam.jsx'; 

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const [open, setOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleInputChange = (event) => {
    setEnteredText('');
    setSearchText(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      setEnteredText(searchText);
    }
  };

const hanleCloseModal = close => {
    setOpen(!close)
}



  const selector = isSearchActive ? 'btn-search-active' : 'btn-search';

  return (
    <div className="search-container">
      {isSearchActive && (
        <input
          type="text"
          placeholder="Buscar..."
          className="buscador"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
        />
      )}
      <button onClick={toggleSearch} className={selector}>
        <SearchIcon />
      </button>

      {enteredText && (
        <>
          {open && <MatchTeam  searchData={enteredText} closeModal={hanleCloseModal} />}
        </>
      )}
    </div>
  );
};

export default Search;