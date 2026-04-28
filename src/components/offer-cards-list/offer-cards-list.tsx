import PlaceCard from '../place-card/place-card';
import { OfferType, CardType } from '../../types';

type OfferCardsListProps = {
  offers: OfferType[];
  cardType: CardType;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function OfferCardsList({ offers, cardType, onMouseEnter, onMouseLeave }: OfferCardsListProps): JSX.Element {
  const getContainerClassName = () => {
    switch (cardType) {
      case 'favorite':
        return 'favorites__places-list places__list tabs__content';
      case 'cities':
        return 'cities__places-list places__list tabs__content';
      default:
        return 'cities__places-list places__list tabs__content';
    }
  };

  return (
    <div className={getContainerClassName()}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferCardsList;
