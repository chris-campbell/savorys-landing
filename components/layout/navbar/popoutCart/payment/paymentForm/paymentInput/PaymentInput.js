import React from "react";
import styled from "styled-components";

const PaymentFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.colors.tan};
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.2rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.tan};
    outline: none;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    color: ${({ theme }) => theme.colors.darkPurple};
    font-weight: 400;
    text-transform: capitalize;
    &::placeholder {
      color: #fdf1da3b;
    }
  }
`;

const PaymentInput = ({
  label,
  maxLength,
  placeholder,
  name,
  prop,
  handleChange,
  setType,
}) => {
  return (
    <PaymentFieldContainer className="input-field">
      <label>{label}</label>
      <input
        type="text"
        id="name"
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        {...prop({ onChange: (e) => handleChange(e.target.value, setType) })}
      />
    </PaymentFieldContainer>
  );
};

export default PaymentInput;
