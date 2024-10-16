// import React from 'react'

// const TextInput = () => {
//   return (
//     <div>TextInput</div>
//   )
// }

// export default TextInput

import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "./types";
import { InputErrorMessage } from "./InputErrorMessage";

export const TextInput: FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  errors,
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`mt-1 block w-full px-3 py-2 border ${
            Object.prototype.hasOwnProperty.call(errors, name)
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
