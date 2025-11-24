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
  error?: string;
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
  error = "",
}) => {
  return (
    <div className="row mb-3">
      {/* ラベル */}
      <label className="col-mb-3 control-label">{label}</label>
      <div className="col-md-9">
        {/*
          - error があるときは `is-invalid` クラスを追加して赤枠にする
          - value / onChange を受け取ることで「制御コンポーネント」になっています
        */}
        <input
          type={type}
          name={name}
          className={`form-control ${className} ${error ? "is-invalid" : ""}`}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
        />
        {/* エラーメッセージを表示（Bootstrap の invalid-feedback を使用） */}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default FormInput;
