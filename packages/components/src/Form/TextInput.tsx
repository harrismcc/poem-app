import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from "@mantine/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextInputProps extends MantineTextInputProps {
  /** The name to give the form input */
  name: string;
}

export const TextInput: React.FC<TextInputProps> = ({ name, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <MantineTextInput {...props} {...field} />}
    />
  );
};
