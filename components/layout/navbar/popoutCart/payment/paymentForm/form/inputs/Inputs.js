import React from "react";
import styled from "styled-components";
import imports from "../../imports";

const FormContainer = styled.div`
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

const Inputs = ({
  handleChange,
  promoLoading,
  checkPromo,
  subtotals,
  subtotal,
  stripe,
  elements,
  total,
  handleCheckout,
}) => {
  const {
    InputField,
    CardElement,
    Button,
    CheckoutButton,
    PromoSpinner,
    cardOptions,
  } = imports;

  return (
    <FormContainer>
      <div className="input-row">
        <InputField
          placeholder="First name"
          name="first-name"
          type="text"
          setType="firstName"
          handleChange={handleChange}
        />
        <InputField
          placeholder="Last name"
          name="last-name"
          type="text"
          setType="lastName"
          handleChange={handleChange}
        />
      </div>
      <div className="input-row">
        <InputField
          placeholder="Email address"
          type="email"
          name="Email"
          setType="email"
          handleChange={handleChange}
        />
      </div>
      <div className="input-payment">
        <CardElement options={cardOptions} />
      </div>
      <div className="input-row">
        {promoLoading ? (
          <PromoSpinner loading={promoLoading} size={15} />
        ) : (
          <InputField
            maxLength="19"
            placeholder="Promo code"
            name="promo-code"
            setType="promo"
            handleChange={handleChange}
          />
        )}

        <Button checkPromo={checkPromo} />
      </div>

      <div className="final-totals">
        {total > 0 && (
          <div className="adjusted">
            <div className="subname">Promo</div>
            <p className="adjusted-value">- ${total}</p>
          </div>
        )}

        <div className="total">
          <div className="subname">Total</div>
          <p className="total-value">
            ${parseFloat(subtotals) || parseFloat(subtotal.formatted)}
          </p>
        </div>
      </div>

      <CheckoutButton
        handleCheckout={handleCheckout}
        stripe={stripe}
        elements={elements}
      />
    </FormContainer>
  );
};

export default Inputs;
