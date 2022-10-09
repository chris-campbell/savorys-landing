import React from "react";
import InputFieldContainer from "./styles/styles";

const InputField = ({
  label,
  maxLength,
  placeholder,
  name,
  handleChange,
  type,
  setType,
  min,
}) => {
  return (
    <InputFieldContainer isEmail={type}>
      <label>{label}</label>
      <input
        type={type}
        id="name"
        name={name}
        min={min ? min : ""}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => handleChange(e.target.value, setType)}
      />
    </InputFieldContainer>
  );
};

export default InputField;
