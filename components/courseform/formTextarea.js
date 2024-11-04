import React from "react";
import { Controller } from "react-hook-form";

const FormTextArea = ({ name, control, placeholder, rows }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div>
          <textarea
            id={name}
            rows={rows || "1"}
            {...field}
            placeholder={placeholder}
            className={`border w-full px-3 py-2 ${
              fieldState?.error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {fieldState?.error && (
            <p className="text-red-500">{fieldState?.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default FormTextArea;
