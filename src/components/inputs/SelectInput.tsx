import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { SelectProps } from "./types";
import { InputErrorMessage } from "./InputErrorMessage";

export const SelectInput: FC<SelectProps> = ({
  name,
  errors,
  label,
  options,
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
        <select
          {...register(name)}
          className={`mt-1 block w-full px-3 py-2 border ${
            Object.prototype.hasOwnProperty.call(errors, name)
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        >
          <option value="">Choose {label}</option>
          {options.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
