import React from "react";
import styled from "styled-components";

const SizeOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 0.3rem;

  select {
    border: 1px solid transparent;
    border-radius: 0.2rem;
    padding: 0.2rem;
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts[1]};
    color: ${({ theme }) => theme.colors.lightPurple};
    text-transform: capitalize;
    font-size: 0.9rem;
    padding: 0.5rem 0.2rem;
    letter-spacing: 0.1px;
    font-weight: 600;
  }
`;

const SizeOptions = ({ sizes, setSize }) => {
  const handleChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <SizeOptionsContainer>
      <select defaultValue={sizes[0]} onChange={handleChange}>
        <option disabled selected value>
          Size
        </option>

        {sizes.map(({ name, id }) => (
          <option key={id} value={id}>{`${name}`}</option>
        ))}
      </select>
    </SizeOptionsContainer>
  );
};

export default SizeOptions;
