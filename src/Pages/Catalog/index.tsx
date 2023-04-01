import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Characters from '../../components/Characters';
import Heart from '../../components/FavoriteHeart';
import './styles.css';
import { ShowHideFavorite } from './_components/ShowHideFavorite';
import { useDispatch, useSelector } from 'react-redux';
import { charListSlice, fetchCharList } from './slice/catalogSlice';

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
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { charList, loading, error } = useSelector((store: any) => {
    return store.charList;
  });

  useEffect(() => {
    dispatch(fetchCharList() as any);
  }, [dispatch]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    dispatch(charListSlice.actions.filterCharacter(event.target.value));
  };

  const handleFavoriteClick = (id: number) => {
    dispatch(charListSlice.actions.toggleFavorite(id));
  };

  return (
    <>
      <header className='catalog-header'>
        <div className='page-title'>
          <h1>RickPedia</h1>
          <h2>Character Catalog</h2>
        </div>
        <div className='favorite-list'>
          <input
            className='search-bar'
            type='text'
            value={searchTerm}
            placeholder='Find a character'
            onChange={handleSearchInputChange}
          />
          <ShowHideFavorite />
        </div>
      </header>
      <div className='catalog-container'>
        {loading ? (
          <div>loading</div>
        ) : error ? (
          <div>error</div>
        ) : (
          charList.map(
            ({
              name,
              image,
              id,
              status,
              species,
              type,
              gender,
              origin,
              location,
              favorite,
              episode
            }: any) => (
              <div className='card' key={id}>
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
                <Heart isClicked={favorite} onHearClick={() => handleFavoriteClick(id)} />
              </div>
            )
          )
        )}
      </div>
    </>
  );
}

export default Catalog;
