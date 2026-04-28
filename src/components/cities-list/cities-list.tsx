import { Link } from 'react-router-dom';

type CitiesListProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
}

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function CitiesList({ activeCity, onCityChange }: CitiesListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <Link
                to="/"
                className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
                onClick={() => onCityChange(city)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
