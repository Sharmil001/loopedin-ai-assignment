"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { TextInput } from "../inputs/TextInput";
import { NumberInput } from "../inputs/NumberInput";
import { UserFormType, UserSchema } from "@/models/User";
import { SelectInput } from "../inputs/SelectInput";
import { useEffect } from "react";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const UserForm = ({ onSubmit, isReset }: any) => {
  const methods = useForm<UserFormType>({
    resolver: zodResolver(UserSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  // Reset Form Inputs
  useEffect(() => {
    reset({ name: "", age: 0, gender: "" });
  }, [isReset]);

  // Handle form submission
  const handleFormSubmit: SubmitHandler<UserFormType> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-y-5 "
      >
        <TextInput
          type="text"
          label="Name"
          name="name"
          errors={errors}
          placeholder="Enter your Name"
        />
        <NumberInput
          label="Age"
          name="age"
          errors={errors}
          placeholder="Enter your Username"
        />
        <SelectInput
          name="gender"
          label="Select Gender"
          errors={errors}
          options={genderOptions}
        />
        {/* <input type="submit" value="Submit" /> */}

        <div className="flex gap-2 justify-end items-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm font-semibold"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => reset({ name: "", age: 0, gender: "" })}
            className="px-4 py-2 bg-gray-200 rounded-md text-gray-900 hover:bg-gray-300 text-sm font-semibold"
          >
            Clear
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
