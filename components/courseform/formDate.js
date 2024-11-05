import { Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendarEvent } from "react-icons/bi";

const FormDate = ({ name, control, plaecholder }) => {
  // NEXT TODO
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
          <DatePicker
          onChange={onChange}
          onBlur={onBlur}
          plaecholder="hie"
          placeholderText={"Please select a date"}
          selected={value}
          className="block w-full p-3 rounded-none border border-gray-300 focus:outline-none "
        />
      )}
    />
  );
};

export default FormDate;
