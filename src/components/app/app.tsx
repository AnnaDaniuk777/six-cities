import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppProps = {
  rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.ROOT}
            element={<MainPage rentalOffersCount={rentalOffersCount} />}
          />
          <Route
            path={AppRoute.LOGIN}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.FAVORITES}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.OFFER}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.NOT_FOUND}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}

export default App;
