import { FC } from "react";
import { InputErrorProps } from "./types";

export const InputErrorMessage: FC<InputErrorProps> = ({ name, errors }) => {
  return <p className="text-red-500 text-sm">{errors[name]?.message}</p>;
};
