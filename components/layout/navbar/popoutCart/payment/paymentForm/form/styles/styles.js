import styled from "styled-components";

export const FormContainer = styled.div`
  margin-bottom: 4rem;
  .input-row {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    align-items: center;
  }

  .input-payment {
    width: 100%;
    padding: 1rem 0 2rem 0rem !important;
    input {
      text-transform: uppercase !important;
    }
  }
`;

export const CheckoutBtn = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  margin-top: 4rem;
  border: none;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.tan};
  text-transform: uppercase;
  font-size: 0.7rem;
  box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
`;
