import React from "react";
import { Controller } from "react-hook-form";

const FormRadio = ({ control, name, value }) => {
  return (
    <div className="input-type">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <input
              type="radio"
              {...field}
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              value={value} // Use the provided value prop
              id={`${name}-${value}`} // Unique ID for each option
            />
            <label htmlFor={`${name}-${value}`} className="ml-2 cursor-pointer capitalize">
              {value} {/* Display the value as label */}
            </label>
          </>
        )}
      />
    </div>
  );
};

export default FormRadio;