import PlaceCard from '../../components/place-card/place-card';
import { OfferType } from '../../types';

type FavoritesLocationProps = {
  cityName: string;
  offers: OfferType[];
}

function FavoritesLocation({ cityName, offers }: FavoritesLocationProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            cardType="favorite"
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocation;
