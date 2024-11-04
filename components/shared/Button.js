import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Button = ({ onClick, label, icon, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white ${className}`}
    >
      {label}{" "}
      {icon && <span className="px-1">{icon}</span>}
    </button>
  );
};

export default Button;
