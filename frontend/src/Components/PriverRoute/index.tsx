// libraries
import { Navigate } from 'react-router-dom';

// logic
import { usePrivateRouteLogic } from './hooks/usePrivateRouteLogic';

// constants
import { ROUTES } from '../../routes';
import { Roles } from '../../constants/roles';

const { HOME } = ROUTES;

export type PrivateRouteProps = {
  children: JSX.Element;
  roles: Roles[];
};

function PrivateRoute(props: PrivateRouteProps) {
  const { children, roles } = props;
  const { isAuthenticated } = usePrivateRouteLogic(roles);

  if (isAuthenticated) return children;
  return <Navigate to={HOME} replace />;
}

export default PrivateRoute;
