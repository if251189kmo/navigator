// components
import Lits from './Lits';
import Title from './Title';

// types
import { TabUi } from '../../models/ui/tab';
import { ButtonProps } from '../Buttons/Button';

// styles
import styles from './styles.module.scss';

type TabProps = TabUi & { buttons: ButtonProps[] };

function Tab(props: TabProps) {
  const { groups, ...rest } = props;

  return (
    <div className={styles.tab}>
      <Title {...rest} />
      <Lits items={groups} />
    </div>
  );
}

export default Tab;
