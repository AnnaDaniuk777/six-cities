import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { APP_ROUTE, AUTH_STATUS, SORT_TYPES } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { OfferType } from '../../types';


type AppProps = {
  offers: OfferType[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={APP_ROUTE.ROOT}
          element={<MainPage offers={offers} sortTypes={SORT_TYPES} />}
        />
        <Route
          path={APP_ROUTE.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={APP_ROUTE.FAVORITES}
          element={
            <PrivateRoute
              authorizationStatus={AUTH_STATUS.Auth}
            >
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTE.OFFER}
          element={<OfferPage />}
        />
        <Route
          path={APP_ROUTE.NOT_FOUND}
          element={<NotFoundPage />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
