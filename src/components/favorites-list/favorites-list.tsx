import FavoritesLocation from '../favorites-location/favorites-location';
import { OfferGroups } from '../../utils';

type FavoritesListProps = {
  offerGroups: OfferGroups;
}

function FavoritesList({ offerGroups }: FavoritesListProps): JSX.Element {
  const cityNames = Object.keys(offerGroups);

  return (
    <ul className="favorites__list">
      {cityNames.map((cityName) => (
        <FavoritesLocation
          key={cityName}
          cityName={cityName}
          offers={offerGroups[cityName]}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
