// libraries
import { Alert, AlertTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// components
import Button from '../Buttons/Button';

// logic
import { useAlertsLogic } from './hooks/useAlertsLogic';

// styles
import styles from './styles.module.scss';

export type AlertsProps = { children: JSX.Element };

// TODO: зверстати гарні виводи помилок
function Alerts(props: AlertsProps) {
  const { children } = props;
  const { alerts, onCloseAtert } = useAlertsLogic();

  if (alerts) {
    return (
      <div className={styles.alerts}>
        <div className={styles.box}>
          {alerts.map(({ id, type, path, name, message }) => {
            return (
              <Alert
                key={id}
                className={styles.message}
                severity={type}
                action={
                  <Button
                    color="inherit"
                    icon={CloseIcon}
                    onClick={() => onCloseAtert({ id, name })}
                  />
                }
              >
                <AlertTitle> Error: {type} </AlertTitle>
                <strong>{path} </strong>
                {message}
              </Alert>
            );
          })}
        </div>
        {children}
      </div>
    );
  }

  return children;
}
export default Alerts;
