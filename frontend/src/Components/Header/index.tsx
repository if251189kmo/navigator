// libraries
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useRedux';

// components
import RenderButtons from '../Buttons/RenderButtons';
import NoDataImage from '../NoContent/NoDataImage';

// logic
import { readFromStorage } from '../../helpers/localStorageOperation';
import { logout } from '../../Pages/Login/redux/actions';

// constants
import { ROUTES } from '../../routes';
import FullLocalStorage from '../../constants/localStorage';
import logo from '../../Images/logo.png';

// styles
import styles from './styles.module.scss';

const { AUTH_TOKEN } = FullLocalStorage;
const { HOME, TABS, LINKS, LOGIN, ADMINISTRATION } = ROUTES;

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = !!readFromStorage(AUTH_TOKEN);
  const textLogo = 'Навігатор ресурсів АТ "Прикарпаттяобленерго"';
  const buttons = [
    isAuth
      ? {
          label: 'Logout',
          onClick: () => {
            dispatch(logout());
            navigate(HOME);
          },
        }
      : { label: 'Sing in', onClick: () => navigate(`${HOME}${LOGIN}`) },
  ];

  return (
    <div>
      <div className={styles.header}>
        <h1>{textLogo}</h1>
        <div className={styles.box}>
          <NoDataImage alt="logo" classes={styles.logo} src={logo} />
          <RenderButtons buttons={buttons} />
        </div>
      </div>
      <ul>
        <li>
          <Link to={`${HOME}${TABS}`}>Tabs</Link>
        </li>
        <li>
          <Link to={`${HOME}${LINKS}`}>Links</Link>
        </li>
        <li>
          <Link to={`${HOME}${ADMINISTRATION}`}>Administration</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
