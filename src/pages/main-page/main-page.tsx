import { useState, useMemo } from 'react';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import OfferCardsList from '../../components/offer-cards-list/offer-cards-list';
import SortingForm from '../../components/sorting-form/sorting-form';
import { OfferType, SortType } from '../../types';
import { SETTING } from '../../const';

type MainPageProps = {
  offers: OfferType[];
  sortTypes: SortType[];
}

function MainPage({ offers, sortTypes }: MainPageProps): JSX.Element {
  const [activeCity, setActiveCity] = useState<string>('Amsterdam');
  const [activeSort, setActiveSort] = useState<SortType>('Popular');
  const cityOffers = useMemo(() => offers.filter((offer) => offer.city.name === activeCity), [offers, activeCity]);

  const sortedOffers = useMemo(() => {
    const sorted = [...cityOffers];

    switch (activeSort) {
      case 'Price: low to high':
        return sorted.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return sorted.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'Popular':
      default:
        return sorted;
    }
  }, [cityOffers, activeSort]);

  const displayedOffers = sortedOffers.slice(0, SETTING.RentalOffersCount);

  const handleCityChange = (city: string) => {
    setActiveCity(city);
  };

  const handleSortChange = (sortType: SortType) => {
    setActiveSort(sortType);
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CitiesList
          activeCity={activeCity}
          onCityChange={handleCityChange}
        />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <b className="places__found">
                {displayedOffers.length} places to stay in {activeCity}
              </b>

              <SortingForm
                sortTypes={sortTypes}
                onSortChange={handleSortChange}
              />

              <OfferCardsList
                offers={displayedOffers}
                cardType="cities"
              />
            </section>

            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
