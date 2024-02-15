// tabs
import { TabUi } from '../../../models/ui/tab';

// styles
import styles from '../styles.module.scss';

type ListProps = { items: TabUi['groups'] };

function List(props: ListProps) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>group {item.name}</li>
      ))}
    </ul>
  );
}

export default List;
