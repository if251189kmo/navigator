// libraries
import { Typography } from '@mui/material';

// components
import RenderFields from '../../Components/Fields/RenderFields';
import RenderButtons from '../../Components/Buttons/RenderButtons';

// logic
import { useLoginLogic } from './hooks/useLoginLogic';
import { loginFields, loginButtons } from './utils';

// styles
import styles from './styles.module.scss';

function Login() {
  const { formik, cancel } = useLoginLogic();
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.container}>
        <Typography variant="h5">Авторизація</Typography>
        <form onSubmit={formik.handleSubmit}>
          <RenderFields fields={loginFields(formik)} />
          <RenderButtons buttons={loginButtons(cancel)} />
        </form>
      </div>
    </div>
  );
}

export default Login;
