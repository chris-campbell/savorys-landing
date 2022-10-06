import React, { useContext } from "react";
import { CartOpenContext } from "../../../../../context/openCart";

import styled, { keyframes } from "styled-components";

const scaleInCard = keyframes`
  0% { transform: scale(0.3) }
 100% { transform: scale(1.0) }
`;

const ConfirmationContainer = styled.div`
  animation-name: ${scaleInCard};
  animation-duration: 800ms;
  .confirmation-wrapper {
    .order-number {
      margin-bottom: 2rem;
      h2 {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-family: ${({ theme }) => theme.fonts[0]};
        color: ${({ theme }) => theme.colors.tan};
        font-weight: 600;
        margin-bottom: 0.2rem;
      }

      p {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSizes.xxs};
        font-family: ${({ theme }) => theme.fonts[1]};
        color: ${({ theme }) => theme.colors.darkPurple};
        font-weight: 600;
      }
    }

    .confirmation-message {
      h3 {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-family: ${({ theme }) => theme.fonts[0]};
        color: ${({ theme }) => theme.colors.tan};
        font-weight: 600;
        margin-bottom: 1.5rem;
      }

      p {
        font-size: ${({ theme }) => theme.fontSizes.xxs};
        font-family: ${({ theme }) => theme.fonts[1]};
        color: ${({ theme }) => theme.colors.darkPurple};
        font-weight: 400;
        margin-bottom: 1.2rem;
        line-height: 1.5rem;
      }
    }

    .charged-card {
      h5 {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-family: ${({ theme }) => theme.fonts[0]};
        color: ${({ theme }) => theme.colors.tan};
        font-weight: 600;
        margin-bottom: 1.2rem;
      }

      p {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-family: ${({ theme }) => theme.fonts[1]};
        color: ${({ theme }) => theme.colors.darkPurple};
        font-weight: 600;
        margin-bottom: 1.2rem;
      }
    }

    .location {
      margin-bottom: 3rem;
      h6 {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-family: ${({ theme }) => theme.fonts[0]};
        color: ${({ theme }) => theme.colors.tan};
        font-weight: 600;
        margin-bottom: 1rem;
      }

      p {
        font-size: ${({ theme }) => theme.fontSizes.xxs};
        font-family: ${({ theme }) => theme.fonts[1]};
        color: ${({ theme }) => theme.colors.darkPurple};
        font-weight: 400;
        margin-bottom: 0.5rem;
      }
    }

    .close-confirmation {
      display: flex;
      justify-content: center;
      button {
        border: none;
        border-radius: 0.2rem;
        background-color: ${({ theme }) => theme.colors.darkPurple};
        padding: 0.5rem 0.7rem;
        color: ${({ theme }) => theme.colors.tan};
        font-family: ${({ theme }) => theme.fonts[1]};
        box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 16px -11px rgba(0, 0, 0, 0.75);
      }
    }
  }
`;

const Confirmation = ({ order, setIndex }) => {
  const { toggle } = useContext(CartOpenContext);
  const { id, customer, transactions } = order;

  const closeConfirmation = () => {
    toggle();
    setIndex(0);
  };

  return (
    <ConfirmationContainer>
      <div className="confirmation-wrapper">
        <div className="order-number">
          <h2>Confirmation</h2>
          <p>Order No. ({id})</p>
        </div>

        <div className="confirmation-message">
          <h3>Hey {customer.firstname},</h3>
          <p>
            Thank your for shopping with us a Savorys, your orders are always
            prepared fresh to order, so please allow 10-15 minutes before
            picking-up.
          </p>
        </div>

        <div className="charged-card">
          <h5>Card Charged ({transactions[0].payment_source.brand})</h5>
          <p>•••• •••• •••• {transactions[0].gateway_reference}</p>
        </div>

        <div className="location">
          <h6>Pick-up Location</h6>
          <p>234 Metropolitan Street,</p>
          <p> New York, NY, 11238</p>
          <p> 212.238.8822</p>
        </div>

        <div className="close-confirmation">
          <button onClick={closeConfirmation}>Done</button>
        </div>
      </div>
    </ConfirmationContainer>
  );
};

export default Confirmation;
