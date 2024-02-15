// components
import labels from '../../../labels/Components/NoContent/NotFoundPage/index.json';
import NoDataImage from '../NoDataImage';

// styles
import styles from './styles.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.code}>{labels.code}</div>
        <div className={styles.text}>{labels.text}</div>
        <NoDataImage />
      </div>
    </div>
  );
}

export default NotFoundPage;
