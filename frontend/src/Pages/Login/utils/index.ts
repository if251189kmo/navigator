import { FormikProps } from 'formik';
import Input from '../../../Components/Fields/Input';
import Button from '../../../Components/Buttons/Button';
import { LoginForm } from '../types';

const loginInitialValues = {
  login: 'us10351pr',
  password: '123123123',
};

const loginFields = (formik: FormikProps<LoginForm>) => [
  {
    name: 'login',
    label: 'login',
    formik,
    component: Input,
  },
  {
    name: 'password',
    label: 'password',
    type: 'password',
    formik,
    component: Input,
  },
];

const loginButtons = (cancel: VoidFunction) => [
  {
    color: 'success' as const,
    label: 'Submit',
    type: 'submit' as const,
    component: Button,
  },
  {
    color: 'warning' as const,
    label: 'Cancel',
    onClick: cancel,
    component: Button,
  },
];

export { loginFields, loginInitialValues, loginButtons };
