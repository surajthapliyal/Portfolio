import React from "react";

export default function Input({
  name,
  text,
  required,
  placeholder,
  value,
  onChange,
}) {
  return (
    <>
      {/* <label htmlFor={name}>{text}</label> */}
      <input
        type="text"
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
