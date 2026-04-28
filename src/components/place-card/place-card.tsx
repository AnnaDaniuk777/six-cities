import { Link } from 'react-router-dom';
import { OfferType, CardType } from '../../types';

type PlaceCardProps = {
  offer: OfferType;
  cardType: CardType;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function PlaceCard({ offer, cardType, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  const { id, title, type, price, rating, isPremium, isFavorite, previewImage } = offer;

  const ratingWidth = (Math.round(rating) / 5) * 100;

  const getCardClassName = () => {
    switch (cardType) {
      case 'favorite':
        return 'favorites__card place-card';
      case 'cities':
        return 'cities__card place-card';
      default:
        return 'cities__card place-card';
    }
  };

  const getImageWrapperClassName = () => {
    switch (cardType) {
      case 'favorite':
        return 'favorites__image-wrapper place-card__image-wrapper';
      case 'cities':
        return 'cities__image-wrapper place-card__image-wrapper';
      default:
        return 'cities__image-wrapper place-card__image-wrapper';
    }
  };

  const getImageSize = () => {
    switch (cardType) {
      case 'favorite':
        return { width: 150, height: 110 };
      case 'cities':
        return { width: 260, height: 200 };
      default:
        return { width: 260, height: 200 };
    }
  };

  const imageSize = getImageSize();

  return (
    <article
      className={getCardClassName()}
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={getImageWrapperClassName()}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
