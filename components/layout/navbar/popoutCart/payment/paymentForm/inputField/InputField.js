import React from "react";
import styled from "styled-components";

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;

  label {
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.colors.tan};
    font-weight: 600;
    /* text-transform: uppercase; */
    margin-bottom: 0.6rem;
  }

  input {
    padding: 0.2rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.darkPurple};
    outline: none;
    width: 100%;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.xxs};

    &::placeholder {
      color: #fdf1da3b;
    }
  }
`;

const InputField = ({
  label,
  maxLength,
  placeholder,
  name,
  handleChange,
  type,
  setType,
  min,
  max,
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
