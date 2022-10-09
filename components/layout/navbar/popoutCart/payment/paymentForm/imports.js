import { useCartDispatch } from "../../../../../../context/cart";
import Form from "./form/Form";
import PurchaseSpinner from "./purchaseSpinner/PurchaseSpinner";
import { CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { orderDetails } from "./js/orderDetailsState";
import getCommerce from "../../../../../../lib/commerce";
import getOrderData from "./js/orderData";
import PromoSpinner from "./form/promoSpinner/PromoSpinner";
import InputField from "./inputField/InputField";
import Button from "./form/button/Button";
import CheckoutButton from "./form/checkoutButton/CheckoutButton";
import { cardOptions } from "./form/inputs/utils/cardOptions";

const imports = {
  useCartDispatch,
  Form,
  PurchaseSpinner,
  CardElement,
  orderDetails,
  getCommerce,
  getOrderData,
  PromoSpinner,
  InputField,
  ElementsConsumer,
  Button,
  CheckoutButton,
  cardOptions,
};

export default imports;
