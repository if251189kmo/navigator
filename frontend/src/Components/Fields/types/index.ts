import { FormikProps } from 'formik';
import { ChangeEventHandler, FocusEventHandler } from 'react';

// Input
export type InputLogicHook = {
  name: string;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  formik: FormikProps<any>;
};
