import Heart from '../../../../components/FavoriteHeart';

interface ShowHideFavoriteProps {
  showFavorites?: 'Hide Favorites' | 'Show Favorites';
  onHearCLick: () => void;
}

export const ShowHideFavorite = ({
  showFavorites = 'Show Favorites',
  onHearCLick
}: ShowHideFavoriteProps) => {
  return (
    <div className='show-hide-favorite'>
      <Heart width={40} height={40} onHearCLick={onHearCLick} />
      <p>{showFavorites}</p>
    </div>
  );
};
