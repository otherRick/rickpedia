import { createStore } from 'redux';
import { charListSlice } from './catalogSlice';

describe('reducer', () => {
  let store: any;
  const reducer = charListSlice.reducer;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it('should handle toggleFavorite action', () => {
    const initialState = {
      charList: [
        { id: 1, name: 'Luke Skywalker', favorite: false },
        { id: 2, name: 'Darth Vader', favorite: false }
      ]
    };
    const action = { type: 'toggleFavorite', payload: 1 };
    store.dispatch(action);
    const newState = store.getState();
    expect(newState.charList[0]?.favorite).toBe(true);
  });

  it('should handle filterFavorite action', () => {
    const initialState = {
      charList: [
        { id: 1, name: 'Luke Skywalker', favorite: true },
        { id: 2, name: 'Darth Vader', favorite: false }
      ],
      cache: [
        { id: 1, name: 'Luke Skywalker', favorite: true },
        { id: 2, name: 'Darth Vader', favorite: false }
      ]
    };
    const action = { type: 'filterFavorite' };
    store.dispatch(action);
    const newState = store.getState();
    expect(newState.charList.length).toBe(1);
    expect(newState.charList[0].name).toBe('Luke Skywalker');
  });

  it('should handle favoriteViewToggler action', () => {
    const initialState = {
      toggleFavoriteView: false,
      charList: [
        { id: 1, name: 'Luke Skywalker', favorite: true },
        { id: 2, name: 'Darth Vader', favorite: false }
      ],
      cache: [
        { id: 1, name: 'Luke Skywalker', favorite: true },
        { id: 2, name: 'Darth Vader', favorite: false }
      ]
    };
    const action = { type: 'favoriteViewToggler' };
    store.dispatch(action);
    const newState = store.getState();
    expect(newState.toggleFavoriteView).toBe(true);
    expect(newState.charList.length).toBe(2);
    expect(newState.charList[0].name).toBe('Luke Skywalker');
  });

  it('should handle filterCharacter action', () => {
    const initialState = {
      charList: [
        { id: 1, name: 'Luke Skywalker', favorite: true },
        { id: 2, name: 'Darth Vader', favorite: false }
      ],
      cache: [
        { id: 1, name: 'Luke Skywalker', favorite: true },
        { id: 2, name: 'Darth Vader', favorite: false }
      ]
    };
    const action = { type: 'filterCharacter', payload: 'luke' };
    store.dispatch(action);
    const newState = store.getState();
    expect(newState.charList.length).toBe(1);
    expect(newState.charList[0].name).toBe('Luke Skywalker');
  });
});
