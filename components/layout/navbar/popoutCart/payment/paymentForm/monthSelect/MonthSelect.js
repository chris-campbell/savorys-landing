import React from "react";
import styled from "styled-components";

const SelectFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;

  label {
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.colors.tan};

    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  select {
    padding: 0.2rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.darkPurple};
    outline: none;
    width: 100%;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    &::placeholder {
      color: #fdf1da82;
    }
  }
`;

const MonthSelect = ({ handleChange, setType }) => {
  return (
    <SelectFieldContainer>
      <label>Month</label>
      <select onChange={(e) => handleChange(e.target.value, setType)}>
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
    </SelectFieldContainer>
  );
};

export default MonthSelect;
