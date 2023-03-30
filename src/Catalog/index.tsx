import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Characters from '../components/Characters';
import './styles.css';

interface charsProps {
  name: string;
  image: string;
  status: string;
  description: string;
  id: number;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: [''];
}

function Catalog() {
  const [characters, setCharacters] = useState<charsProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFavoriteClick = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCharacters = showFavorites
    ? filteredCharacters.filter((character) => favorites.includes(character.id))
    : filteredCharacters;

  return (
    <>
      <header>
        <h1>Character Catalog</h1>
        <input type='text' value={searchTerm} onChange={handleSearchInputChange} />
        <button>Search</button>
        <button onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </button>
      </header>
      <div className='catalog-container'>
        {displayedCharacters.map(
          ({ name, image, id, status, species, type, gender, origin, location, episode }) => (
            <div key={id}>
              <button onClick={() => handleFavoriteClick(id)}>
                {favorites.includes(id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
              <Link
                to={{ pathname: `/${id}` }}
                state={{
                  name: name,
                  image: image,
                  id: id,
                  status: status,
                  species: species,
                  type: type,
                  gender: gender,
                  origin: origin,
                  location: location,
                  episode: episode
                }}
              >
                <Characters name={name} image={image} />
              </Link>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Catalog;
