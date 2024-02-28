// components
import Modal from '../../Components/Modals';
import Tab from '../../Components/Tab';

// logic
import { useAdministrationLogic } from './hooks/useAdministrationLogic';

// styles
import styles from './styles.module.scss';

function Administration() {
  const { tabs } = useAdministrationLogic();

  return (
    <div className={styles.administration}>
      <Modal />
      <h1>Administration</h1>
      <div>
        <h2>Links</h2>
      </div>
      <div>
        <h2>Tabs</h2>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <Tab key={tab.id} {...tab} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Administration;
