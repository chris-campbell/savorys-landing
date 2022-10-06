import { useState } from "react";
import { useCartDispatch } from "../../../../../../context/cart";
import { orderDetails } from "./paymentInput/js/orderDetailsState";
import InputField from "./inputField/InputField";
import getCommerce from "../../../../../../lib/commerce";
import getOrderData from "./js/orderData";
import { CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import * as S from "./styles/styles";

import ClipLoader from "react-spinners/ClipLoader";

const PaymentForm = ({ checkoutToken, subtotal, setOrder, setIndex }) => {
  const { setCart } = useCartDispatch();
  const [orderState, setOrderState] = useState(orderDetails);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#3F2D3B");
  const handleStateChange = (e, obj) => {
    setOrderState((prev) => ({ ...prev, [obj]: e }));
  };

  const goToConfirmation = () => {
    setIndex((prev) => prev + 1);
  };

  const handleCaptureCheckout = async (stripe, elements) => {
    const commerce = getCommerce();

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        alert(error.message);
        return;
      }

      setLoading(true);

      const order = await commerce.checkout.capture(
        checkoutToken.id,
        getOrderData(orderState, checkoutToken, paymentMethod)
      );

      if (order) {
        setLoading(false);
        setOrder(order);
        goToConfirmation();

        setCart(await refreshCart());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshCart = async () => {
    const commerce = getCommerce();
    const newCart = await commerce.cart.refresh();

    return newCart;
  };

  const calculateTotal = () => {
    const salesTax = 0.08875;
    const cost = parseFloat(subtotal?.formatted);
    const totalPrice = cost + cost * salesTax;

    return totalPrice.toFixed(2);
  };

  if (loading)
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "7rem",
          }}
        >
          <ClipLoader color={color} loading={loading} size={40} />
          <p style={{ marginTop: "2rem", color: "#3F2D3B", fontWeight: "600" }}>
            Processing Payment
          </p>
        </div>
      </div>
    );

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <S.FormContainer>
          <div className="payment-form-wrapper">
            <div className="customer-name">
              <InputField
                placeholder="First name"
                name="first-name"
                type="text"
                setType="firstName"
                handleChange={handleStateChange}
              />
              <InputField
                placeholder="Last name"
                name="last-name"
                type="text"
                setType="lastName"
                handleChange={handleStateChange}
              />
            </div>
            <div>
              <InputField
                placeholder="Email address"
                type="email"
                name="Email"
                setType="email"
                handleChange={handleStateChange}
              />
            </div>
          </div>
          <div className="payment-form">
            <div>
              <InputField
                maxLength="19"
                placeholder="Promo code"
                name="promo-code"
                setType="promo"
                handleChange={handleStateChange}
              />
              <div style={{ margin: "2rem 0 2rem 0" }}>
                <CardElement
                  options={{
                    style: {
                      base: {
                        padding: "3rem",
                        fontSize: "16px",
                        color: "#3F2D3B",
                        "::placeholder": {
                          color: "#fdf1da3b",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="final-totals">
            <div className="total">
              <div className="subname">Total</div>
              <p className="total-value">${calculateTotal()}</p>
            </div>
          </div>
          <S.CheckoutBtn
            onClick={() => handleCaptureCheckout(stripe, elements)}
          >
            Complete Checkout
          </S.CheckoutBtn>
        </S.FormContainer>
      )}
    </ElementsConsumer>
  );
};

export default PaymentForm;
