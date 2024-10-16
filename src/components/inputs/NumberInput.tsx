import { FC } from "react";
import { InputErrorMessage } from "./InputErrorMessage";
import { InputProps } from "./types";
import { useFormContext } from "react-hook-form";

export const NumberInput: FC<InputProps> = ({
  name,
  label,
  errors,
  placeholder,
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
          type="number"
          min={0}
          {...register(name, {
            setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
          })}
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
