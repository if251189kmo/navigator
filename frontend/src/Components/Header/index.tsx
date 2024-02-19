// components
import RenderButtons from '../Buttons/RenderButtons';
import Picture from '../Picture';

// logic
import { useHeaderLogic } from './hooks/useHeaderLogic';

// constants
import logo from '../../Images/logo.png';
import labels from '../../labels/Components/Header/index.json';

// styles
import styles from './styles.module.scss';

function Header() {
  const { authButtons, navButtons } = useHeaderLogic();

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>{labels.title}</h1>
        <div className={styles.box}>
          <Picture alt="logo" classes={styles.logo} src={logo} />
          <RenderButtons classes={styles.authButtons} buttons={authButtons} />
        </div>
      </div>
      <RenderButtons classes={styles.nav} buttons={navButtons} />
    </div>
  );
}

export default Header;
