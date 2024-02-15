// logic
import { useProgressLogic } from './hooks/useProgressLogic';

// styles
import styles from './styles.module.scss';

export type ProgressProps = { children: JSX.Element };

function Progress(props: ProgressProps) {
  const { children } = props;
  const { isCommonProgress } = useProgressLogic();

  return (
    <div className={styles.progress}>
      {isCommonProgress ? <div className={styles.loading}>Loading ... </div> : null}
      {children}
    </div>
  );
}
export default Progress;
