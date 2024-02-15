// components
import Header from '../Header';

// styles
import styles from './styles.module.scss';

type PageWrapperProps = { children: JSX.Element };

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      {children}
    </div>
  );
}

export default PageWrapper;
