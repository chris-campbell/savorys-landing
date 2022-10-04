const getOrderData = (orderState, checkoutToken) => {
  return {
    line_items: checkoutToken.live.line_items,
    customer: {
      firstname: orderState.firstName,
      lastname: orderState.lastName,
      email: orderState.email,
    },
    payment: {
      gateway: "test_gateway",
      card: {
        number: orderState.cardNumber,
        expiry_month: orderState.expMonth,
        expiry_year: orderState.expYear,
        cvc: orderState.cvc,
        postal_zip_code: orderState.zipcode,
      },
    },
  };
};

export default getOrderData;
