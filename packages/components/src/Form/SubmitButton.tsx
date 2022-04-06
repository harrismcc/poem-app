import { Button, ButtonProps } from "@mantine/core";
import { useFormContext } from "react-hook-form";

interface SubmitButtonProps extends ButtonProps<"button"> {
  /** Disable submit button unless form is changed */
  requireChange?: boolean;
}

export const SubmitButton = ({
  loading,
  requireChange,
  ...props
}: SubmitButtonProps): JSX.Element => {
  const { formState } = useFormContext();
  return (
    <Button
      type="submit"
      disabled={
        !formState.isValid || (requireChange && !formState.isDirty) || !!loading
      }
      aria-busy={loading ? "true" : "false"}
      {...props}
    />
  );
};
