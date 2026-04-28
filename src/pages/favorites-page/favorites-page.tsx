import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { OfferType } from '../../types';
import { getOfferGroups } from '../../utils';


type FavoritesPageProps = {
  offers: OfferType[];
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const offerGroups = getOfferGroups(favoriteOffers);
  const hasFavorites = favoriteOffers.length > 0;

  if (!hasFavorites) {
    return <FavoritesEmpty />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offerGroups={offerGroups} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
