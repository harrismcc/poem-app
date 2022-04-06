import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from "@mantine/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface PasswordInputProps extends MantinePasswordInputProps {
  /** The name to give the form input */
  name: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <MantinePasswordInput {...props} {...field} />}
    />
  );
};
