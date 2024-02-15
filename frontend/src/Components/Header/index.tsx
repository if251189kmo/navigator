// libraries
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useRedux';

// components
import Button from '../Buttons/Button';

// logic
import { readFromStorage } from '../../helpers/localStorageOperation';
import { logout } from '../../Pages/Login/redux/actions';

// constants
import { ROUTES } from '../../routes';
import FullLocalStorage from '../../constants/localStorage';

// styles
import styles from './styles.module.scss';

const { AUTH_TOKEN } = FullLocalStorage;
const { HOME, TABS, LINKS, LOGIN, ADMINISTRATION } = ROUTES;

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = !!readFromStorage(AUTH_TOKEN);
  const textLogo = 'Навігатор ресурсів АТ "Прикарпаттяобленерго"';

  return (
    <div className={styles.header}>
      <h1>{textLogo}</h1>
      <ul>
        <li>
          <Link to={`${HOME}${TABS}`}>Tabs</Link>
        </li>
        <li>
          <Link to={`${HOME}${LINKS}`}>Links</Link>
        </li>
        {isAuth ? (
          <li>
            <Button
              label="Logout"
              onClick={() => {
                dispatch(logout());
                navigate(HOME);
              }}
            />
          </li>
        ) : (
          <li>
            <Link to={`${HOME}${LOGIN}`}>Login</Link>
          </li>
        )}
        <li>
          <Link to={`${HOME}${ADMINISTRATION}`}>Administration</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
