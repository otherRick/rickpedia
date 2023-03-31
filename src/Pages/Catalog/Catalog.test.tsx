import { render, screen } from '@testing-library/react';
import Catalog from './';

describe('Catalog', () => {
  it('renders the header', () => {
    render(<Catalog />);
    const header = screen.getByRole('heading', { name: /character catalog/i });
    expect(header).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<Catalog />);
    const searchInput = screen.getByRole('textbox', { name: /search/i });
    expect(searchInput).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<Catalog />);
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });

  it('renders the favorites button', () => {
    render(<Catalog />);
    const favoritesButton = screen.getByRole('button', { name: /show favorites/i });
    expect(favoritesButton).toBeInTheDocument();
  });

  it('renders the character cards', () => {
    const mockCharacters = [
      {
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        id: 1,
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
        location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/20' },
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2'
        ]
      },
      {
        name: 'Morty Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        id: 2,
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/1' },
        location: { name: 'Earth', url: 'https://rickandmortyapi.com/api/location/20' },
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2'
        ]
      }
    ];
    render(<Catalog />);
    mockCharacters.forEach((character) => {
      const characterName = screen.getByText(character.name);
      expect(characterName).toBeInTheDocument();
    });
  });
});
