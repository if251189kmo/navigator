import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { loginInitialValues as initialValues } from '../utils';
import { loginSchema as validationSchema } from '../validation';
import { LoginForm } from '../types';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { authAsync } from '../api';
import { isAuthenticate } from '../redux/selector';
import { ROUTES } from '../../../routes';

const { HOME, ADMINISTRATION } = ROUTES;

export const useLoginLogic = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(isAuthenticate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) navigate(`${HOME}${ADMINISTRATION}`);
  }, [isAuth, navigate]);

  const cancel = () => navigate(-1);
  const onSubmit = (form: LoginForm) => dispatch(authAsync(form));

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return { formik, cancel };
};
