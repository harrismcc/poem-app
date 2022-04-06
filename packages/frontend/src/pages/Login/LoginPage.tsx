import { Form, PasswordInput, SubmitButton, TextInput } from "@main/components";
import { useLogin } from "@main/utils";
import { Alert, Center, Stack } from "@mantine/core";
import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

interface LoginFormInputs {
  /** Email */
  email: string;
  /** Password */
  password: string;
}

export const LoginPage: React.FC = () => {
  const formMethods = useForm<LoginFormInputs>();
  const { success, error, login } = useLogin();

  return (
    <Center style={{ width: "100%", height: "100vh" }}>
      <Form
        useFormMethods={formMethods}
        onSubmit={({ email, password }) => {
          login(email, password);
        }}
        style={{ width: "400px", minWidth: "250px" }}
      >
        <Stack>
          <TextInput
            name="email"
            placeholder="your-email@domain.com"
            label="Email Address"
            required
          />
          <PasswordInput
            name="password"
            placeholder="Password"
            label="Password"
            required
          />
          <SubmitButton loading={false}>Login</SubmitButton>
          {error && (
            <Alert title="Form Error" color="red">
              {error.message}
            </Alert>
          )}
        </Stack>
      </Form>
      {success && <Navigate replace to="/" />}
    </Center>
  );
};
