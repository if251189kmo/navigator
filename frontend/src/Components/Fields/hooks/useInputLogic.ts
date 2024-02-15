import { ChangeEvent, FocusEvent } from 'react';
import { InputLogicHook } from '../types';

export const useInputLogic = ({ name, onChange, onBlur, formik }: InputLogicHook) => {
  const onChangeHandler = (e: ChangeEvent<any>) => {
    const { value } = e.target;

    if (onChange) onChange(value);
    formik.setFieldValue(name, value);
  };

  const onFocusHandler = ({ target }: FocusEvent<any>) => {
    if (onBlur) onBlur(target);
    formik.setFieldTouched(name, target);
  };

  return { onChangeHandler, onFocusHandler };
};
