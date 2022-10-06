const getOrderData = (orderState, checkoutToken, paymentMethod) => {
  return {
    line_items: checkoutToken.live.line_items,
    customer: {
      firstname: orderState.firstName,
      lastname: orderState.lastName,
      email: orderState.email,
    },
    payment: {
      gateway: "stripe",
      stripe: {
        payment_method_id: paymentMethod.id,
      },
    },
  };
};

export default getOrderData;
