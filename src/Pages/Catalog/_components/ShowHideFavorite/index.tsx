import { useDispatch, useSelector } from 'react-redux';
import Heart from '../../../../components/FavoriteHeart';
import { charListSlice } from '../../slice/catalogSlice';

export const ShowHideFavorite = () => {
  const dispatch = useDispatch();
  const { toggleFavoriteView } = useSelector(({ charList }: any) => {
    return charList;
  });
  return (
    <div className='show-hide-favorite'>
      <Heart
        isClicked={toggleFavoriteView}
        width={40}
        height={40}
        onHearClick={() => {
          dispatch(charListSlice.actions.filterFavorite());
          dispatch(charListSlice.actions.favoriteViewToggler());
        }}
      />
      <p>{toggleFavoriteView ? 'Hide Favorites' : 'Show Favorites'}</p>
    </div>
  );
};
