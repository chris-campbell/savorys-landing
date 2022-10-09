import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PaymentForm from "./paymentForm/PaymentForm";
import getCommerce from "../../../../../lib/commerce";

const PaymentContainer = styled.div`
  .payment-wrapper {
    .payment-title {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.tan};
      text-transform: uppercase;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .final-totals {
      margin-top: 4rem;
      .adjusted {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 2rem;
        .subname {
          text-transform: uppercase;
          color: #fdf1da82;
        }

        .adjusted-value {
          color: ${({ theme }) => theme.colors.tan};
        }
      }
      .total {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .subname {
          color: #fdf1da82;
          text-transform: uppercase;
        }

        .total-value {
          color: ${({ theme }) => theme.colors.tan};
          font-size: ${({ theme }) => theme.fontSizes.md};
          font-weight: 600;
        }
      }
    }
  }
`;

const Payment = ({ subtotal, setOrder, setIndex }) => {
  const [cartToken, setCartToken] = useState({});
  const [checkoutToken, setCheckoutToken] = useState("");

  const commerce = getCommerce();

  useEffect(() => {
    const getCart = async () => {
      const response = await commerce.cart.retrieve();

      try {
        const token = await commerce.checkout.generateToken(response.id, {
          type: "cart",
        });
        console.log({ checkoutToken });
        console.log({ cartToken });
        setCartToken(token);
      } catch (error) {
        console.error("Checkout error: ", error);
      }
    };

    getCart();
  }, [subtotal]);

  return (
    <PaymentContainer>
      <div className="payment-wrapper">
        <h1 className="payment-title">Payment Info</h1>

        <PaymentForm
          subtotal={subtotal}
          cartToken={cartToken}
          setOrder={setOrder}
          setIndex={setIndex}
        />
      </div>
    </PaymentContainer>
  );
};

export default Payment;
