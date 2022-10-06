import styled from "styled-components";

export const FormContainer = styled.div`
  margin-bottom: 4rem;

  .payment-form-wrapper {
    .customer-name {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: 1rem;
    }
  }
  .payment-form {
    .InputElement {
      color: blue !important;
    }
    .additional-payment-inputs {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      gap: 1rem;
      width: 100%;
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
