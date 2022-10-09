import styled from "styled-components";

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.colors.tan};
    font-weight: 600;
  }

  input {
    height: 2.5rem;
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

export default InputFieldContainer;
