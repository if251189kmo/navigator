// libraries
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required('Please enter login')
    .min(5, 'username must not be less than 5 characters'),
  password: yup
    .string()
    .required('Please enter password')
    .min(8, 'password must not be less than 8 characters')
    .max(12, 'password must be at most 12 characters'),
});

export { loginSchema };
