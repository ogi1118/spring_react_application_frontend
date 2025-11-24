import React from "react";

export type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  value,
  placeholder = "",
  required = false,
  onChange,
  className = "",
}) => {
  return (
    <div className="row mb-3">
      <label className="col-mb-3 control-label">{label}</label>
      <div className="col-md-9">
        <input
          type={type}
          name={name}
          className={`form-control ${className}`}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
