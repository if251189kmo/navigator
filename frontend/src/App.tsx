// libraries
import { Outlet, useRoutes } from 'react-router-dom';

// components
import Tabs from './Pages/Tabs';
import Login from './Pages/Login';
import Links from './Pages/Links';
import Administration from './Pages/Administration';
import PageWrapper from './Components/PageWrapper';
import PrivateRoute from './Components/PriverRoute';
import NotFoundPage from './Components/NoContent/NotFoundPage';

// constants
import { Roles } from './constants/roles';
import { ROUTES } from './routes';

// logic
import { useRedirectInToTabs } from './hooks/useRedirectInToTabs';

const { ADMIN } = Roles;
const { HOME, TABS, LINKS, LOGIN, ADMINISTRATION, NOT_FOUND_PAGE } = ROUTES;

function App() {
  useRedirectInToTabs();

  const children = [
    {
      path: `${HOME}${ADMINISTRATION}`,
      element: (
        <PageWrapper>
          <PrivateRoute roles={[ADMIN]}>
            <Administration />
          </PrivateRoute>
        </PageWrapper>
      ),
    },
    {
      path: `${HOME}${TABS}`,
      element: (
        <PageWrapper>
          <Tabs />
        </PageWrapper>
      ),
    },
    {
      path: `${HOME}${LINKS}`,
      element: (
        <PageWrapper>
          <Links />
        </PageWrapper>
      ),
    },
    {
      path: `${HOME}${LOGIN}`,
      element: <Login />,
    },
  ];

  const home = {
    path: HOME,
    element: <Outlet />,
    children,
  };

  const notFoundPage = {
    path: `${HOME}${NOT_FOUND_PAGE}`,
    element: <NotFoundPage />,
  };

  return useRoutes([home, notFoundPage]);
}

export default App;
