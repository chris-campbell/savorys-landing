import { useState } from "react";
import imports from "./imports";

const PaymentForm = ({ cartToken, subtotal, setOrder, setIndex }) => {
  const {
    useCartDispatch,
    Form,
    PurchaseSpinner,
    CardElement,
    orderDetails,
    getCommerce,
    getOrderData,
  } = imports;

  const { setCart } = useCartDispatch();

  const [orderState, setOrderState] = useState(orderDetails);
  const [promoResp, setPromoResp] = useState({});
  const [loading, setLoading] = useState(false);
  const [promoLoading, setPromoLoading] = useState(false);

  const handleStateChange = (e, obj) => {
    setOrderState((prev) => ({ ...prev, [obj]: e }));
  };

  const checkPromo = async (e) => {
    e.preventDefault();

    const commerce = getCommerce();

    setPromoLoading(true);

    try {
      const promo = await commerce.checkout.checkDiscount(cartToken.id, {
        code: orderState.promo,
      });

      setPromoLoading(false);

      setPromoResp(promo);
    } catch (error) {
      console.log(error);
    }
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
        cartToken.id,
        getOrderData(orderState, cartToken, paymentMethod)
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

    try {
      const newCart = await commerce.cart.refresh();
      return newCart;
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <PurchaseSpinner loading={loading} size={20} />;

  return (
    <Form
      handleStateChange={handleStateChange}
      handleCheckout={handleCaptureCheckout}
      checkPromo={checkPromo}
      subtotal={subtotal}
      promoResp={promoResp}
      promoLoading={promoLoading}
    />
  );
};

export default PaymentForm;
