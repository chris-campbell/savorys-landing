import { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import { useCartDispatch } from "../../../../../../context/cart";
import { orderDetails } from "./paymentInput/js/orderDetailsState";
import InputField from "./inputField/InputField";
import PaymentInput from "./paymentInput/PaymentInput";
import getCommerce from "../../../../../../lib/commerce";
import getOrderData from "./js/orderData";
import * as S from "./styles/styles";
import MonthSelect from "./monthSelect/MonthSelect";

const PaymentForm = ({ checkoutToken, subtotal, setOrder, setIndex }) => {
  const { getCardNumberProps, getCVCProps } = usePaymentInputs();
  const { setCart } = useCartDispatch();

  const [orderState, setOrderState] = useState(orderDetails);

  const handleStateChange = (e, obj) => {
    setOrderState((prev) => ({ ...prev, [obj]: e }));
  };

  const handleCaptureCheckout = async () => {
    const commerce = getCommerce();

    try {
      const order = await commerce.checkout.capture(
        checkoutToken.id,
        getOrderData(orderState, checkoutToken)
      );

      if (order) {
        setOrder(order);
        setIndex((prev) => prev + 1);

        const cart = await refreshCart();
        setCart(cart);
      }
    } catch (err) {
      const errList = [err.data.error.message];
      const errs = err.data.error.errors;
      for (const index in errs) {
        errList.push(`${index}: ${errs[index]}`);
      }
      setErrors(errList);
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

  return (
    <S.FormContainer>
      <div className="payment-form-wrapper">
        <div className="customer-name">
          <InputField
            label="First Name"
            placeholder="John"
            name="first-name"
            type="text"
            setType="firstName"
            handleChange={handleStateChange}
          />
          <InputField
            label="Last Name"
            placeholder="Smith"
            name="last-name"
            type="text"
            setType="lastName"
            handleChange={handleStateChange}
          />
        </div>
        <div>
          <InputField
            label="Email"
            placeholder="example@domain.com"
            type="email"
            name="Email"
            setType="email"
            handleChange={handleStateChange}
          />
        </div>
      </div>

      <div className="payment-form">
        <div className="card-number-input">
          <PaymentInput
            label="Card number"
            maxLength="19"
            placeholder="Joe Doe"
            name="card-number"
            prop={getCardNumberProps}
            setType="cardNumber"
            handleChange={handleStateChange}
          />
        </div>

        <div className="additional-payment-inputs">
          <PaymentInput
            label="cvc"
            maxLength="3"
            placeholder="000"
            name="cvc"
            prop={getCVCProps}
            setType="cvc"
            handleChange={handleStateChange}
          />

          <MonthSelect setType="expMonth" handleChange={handleStateChange} />

          <InputField
            label="Year"
            maxLength="4"
            placeholder="Year"
            name="Year"
            type="number"
            min="2023"
            max="2030"
            setType="expYear"
            handleChange={handleStateChange}
          />

          <InputField
            label="Zipcode"
            maxLength="19"
            placeholder="Zipcode"
            name="zipcode"
            setType="zipcode"
            handleChange={handleStateChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputField
            label="Promo code"
            maxLength="19"
            placeholder="Code"
            name="promo-code"
            setType="promo"
            handleChange={handleStateChange}
          />
        </div>
      </div>

      <div className="final-totals">
        <div className="total">
          <div className="subname">Total</div>
          <p className="total-value">${calculateTotal()}</p>
        </div>
      </div>

      <S.CheckoutBtn onClick={() => handleCaptureCheckout()}>
        Complete Checkout
      </S.CheckoutBtn>
    </S.FormContainer>
  );
};

export default PaymentForm;
