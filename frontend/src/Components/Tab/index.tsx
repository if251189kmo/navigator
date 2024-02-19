// components
import List from './List';
import Title from './Title';

// logic
import { tabButtons } from './utils';
import { useCheckAccessLogic } from '../../hooks/useCheckAccessLogic';

// types
import { TabUi } from '../../models/ui/tab';
import { ButtonProps } from '../Buttons/Button';

// styles
import styles from './styles.module.scss';

type TabProps = TabUi & { buttons?: ButtonProps[] };

function Tab(props: TabProps) {
  const { id, ...restProps } = props;
  const { groups, buttons = tabButtons(id), ...rest } = restProps;
  const { isAccess } = useCheckAccessLogic();

  return (
    <div className={styles.tab}>
      <Title buttons={buttons} access={isAccess} {...rest} />
      <List items={groups} />
    </div>
  );
}

export default Tab;
