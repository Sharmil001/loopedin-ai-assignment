import { UserFormType } from "@/models/User";
import { FieldErrors } from "react-hook-form";

type UserFieldName = "name" | "age" | "gender";

export interface InputErrorProps {
  name: UserFieldName ;
  errors: FieldErrors<UserFormType>;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type?: "text" | "email" | "time";
  placeholder?: string;
}

export interface SelectProps extends InputProps {
  options: {
    value: string;
    label: string;
  }[];
}