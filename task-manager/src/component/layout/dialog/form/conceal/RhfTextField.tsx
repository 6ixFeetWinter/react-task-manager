import {
  DeepMap,
  FieldError,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { MyTextField, TextProps } from "../view/InputText";

type NewPostInput = {
  title: string;
};

export type RhfTextAreaProps<T extends NewPostInput> = TextProps &
  UseControllerProps<T>;

export const RhfTextField = <T extends NewPostInput>(
  props: RhfTextAreaProps<T>
) => {
  const { name, control, placeholder, label } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <MyTextField
      inputRef={ref}
      placeholder={placeholder}
      label={label}
      {...rest}
      error={(errors[name]?.message as string) || undefined}
    />
  );
};
