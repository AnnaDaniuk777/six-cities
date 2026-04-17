import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppProps): JSX.Element {
  return <MainPage rentalOffersCount={rentalOffersCount} />;
}

export default App;
