import React, { useState, useEffect } from "react";
import * as S from "./styles/styles";
import imports from "../imports";
import Inputs from "./inputs/Inputs";

const Form = ({
  subtotal,
  checkPromo,
  promoResp,
  handleStateChange,
  handleCheckout,
  promoLoading,
}) => {
  const [total, setTotal] = useState(0.0);
  const [subtotals, setSubtotals] = useState(0.0);

  const {
    PromoSpinner,
    InputField,
    CardElement,
    ElementsConsumer,
    Button,
    CheckoutButton,
  } = imports;

  useEffect(() => {
    const storePromo = () => {
      setTotal(parseFloat(promoResp?.amount_saved?.formatted));
      setSubtotals(parseFloat(promoResp?.live?.total_due?.formatted));
    };

    storePromo();
  }, [promoResp]);

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <Inputs
          handleChange={handleStateChange}
          promoLoading={promoLoading}
          checkPromo={checkPromo}
          subtotals={subtotals}
          subtotal={subtotal}
          total={total}
          stripe={stripe}
          elements={elements}
          handleCheckout={handleCheckout}
        />
      )}
    </ElementsConsumer>
  );
};

export default Form;
