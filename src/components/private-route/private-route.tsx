import {Navigate} from 'react-router-dom';
import {APP_ROUTE, AUTH_STATUS} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AUTH_STATUS;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AUTH_STATUS.Auth
      ? children
      : <Navigate to={APP_ROUTE.LOGIN} />
  );
}

export default PrivateRoute;
