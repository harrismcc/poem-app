import React, { PropsWithChildren, ReactElement } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import type { FieldValues } from "react-hook-form/dist/types";

interface FormProps<TFieldValues> {
  /** on submit handler, copied from react hook form to avoid type issues */
  onSubmit?: (
    data: TFieldValues,
    event?: React.BaseSyntheticEvent
  ) => any | Promise<any>;
  /** the methods returned from useForm */
  useFormMethods: UseFormReturn<TFieldValues>;
  /** html id */
  id?: string;
  /** Style */
  style?: React.CSSProperties;
}

export const Form = <TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit = () => {
    /* do nothing */
  },
  useFormMethods,
  ...rest
}: PropsWithChildren<FormProps<TFieldValues>>): ReactElement => (
  <FormProvider {...useFormMethods}>
    <form onSubmit={useFormMethods.handleSubmit(onSubmit as any)} {...rest}>
      {children}
    </form>
  </FormProvider>
);
