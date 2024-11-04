import React from "react";
import { Controller } from "react-hook-form";

const MdInput = ({
  control,
  type = "text",
  placeholder,
  name,
  defaultValue = "",
  ...props
}) => {
  return (
    <div className="input-type">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            {...field}
            placeholder={placeholder}
            className="border w-full px-5 py-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
            type={type}
            id={name}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default MdInput;
