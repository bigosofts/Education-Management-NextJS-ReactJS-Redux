import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const FormCheckBox = ({
  control,
  name,
  defaultValue = "",
  ...props
}) => {
  return (
    <div className="input-type">
      <Controller
        name={name}
        control={control}
        defaultValue={true}
        render={({ field }) => (
          <FormControlLabel control={<Checkbox {...field} />} label={name} />
        )}
      />
    </div>
  );
};

export default FormCheckBox;
