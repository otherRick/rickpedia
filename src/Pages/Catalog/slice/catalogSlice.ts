import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../../services';

interface CharlistProps {
  charList: any[];
  loading: boolean;
  error: boolean;
  toggleFavoriteView: boolean;
  cache: any[];
}

const initialState: CharlistProps = {
  charList: [],
  loading: false,
  error: false,
  toggleFavoriteView: false,
  cache: []
};

export const fetchCharList = createAsyncThunk('charList', async (_, thunkAPI) => {
  try {
    const res = (await instance.get('/character')).data.results;
    return res.map((char: any) => {
      return {
        ...char,
        favorite: false
      };
    });
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const charListSlice = createSlice({
  name: 'charList',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const charListUpdate = state.charList.map((char: any) => {
        if (char.id === action.payload) {
          return {
            ...char,
            favorite: !char.favorite
          };
        }
        return char;
      });
      return (state = {
        ...state,
        charList: charListUpdate,
        cache: charListUpdate
      });
    },
    filterFavorite: (state) => {
      return (state = {
        ...state,
        charList: state.charList.filter((char: any) => {
          return char.favorite;
        })
      });
    },
    favoriteViewToggler: (state) => {
      state.toggleFavoriteView = !state.toggleFavoriteView;
      if (!state.toggleFavoriteView) {
        state.charList = state.cache;
      }
    },
    filterCharacter: (state, action) => {
      const charListUpdate = state.cache.filter((_, index) => {
        return state.cache[index].name
          .trim()
          .toLowerCase()
          .includes(action.payload.trim().toLowerCase());
      });

      return (state = {
        ...state,
        charList:
          charListUpdate.length === 0 && action.payload === '' ? state.cache : charListUpdate
      });
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCharList.fulfilled, (state, action) => {
      return (state = {
        ...state,
        cache: action.payload,
        charList: action.payload,
        loading: false,
        error: false
      });
    });
    builder.addCase(fetchCharList.rejected, (state, action) => {
      return (state = { ...state, loading: false, error: true });
    });
    builder.addCase(fetchCharList.pending, (state, action) => {
      return (state = { ...state, loading: true, error: false });
    });
  }
});
