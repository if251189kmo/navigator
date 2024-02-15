// libraries
import { TextField, TextFieldProps } from '@mui/material';
import { FormikProps } from 'formik';

// logic
import { useInputLogic } from '../hooks/useInputLogic';

// styles
import styles from '../styles.module.scss';

export type InputProps = {
  name: string;
  classes?: string;
  formik: FormikProps<any>;
} & TextFieldProps;

function Input(props: InputProps) {
  const {
    size = 'small',
    fullWidth = true,
    formik,
    type = 'text',
    name,
    onChange,
    onBlur,
    value = formik.values[name],
    classes = styles.inputWrapper,
    ...rest
  } = props;
  const { onChangeHandler, onFocusHandler } = useInputLogic({ name, onChange, onBlur, formik });

  const error = formik.touched[name] && Boolean(formik.errors[name]);
  const helperText = formik.touched[name] ? formik.errors[name] : '';

  return (
    <div className={classes}>
      <TextField
        type={type}
        value={value}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText as string}
        size={size}
        onChange={onChangeHandler}
        onBlur={onFocusHandler}
        {...rest}
      />
    </div>
  );
}

export default Input;
