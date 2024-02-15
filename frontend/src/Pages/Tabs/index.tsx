// components
import Tab from '../../Components/Tab';

// logic
import { useFetchTabs } from './hooks/useFetchTabs';

// styles
import styles from './styles.module.scss';

function Tabs() {
  const { tabs, buttons } = useFetchTabs();

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab key={tab.id} {...tab} buttons={buttons(tab.id)} />
      ))}
    </div>
  );
}

export default Tabs;
