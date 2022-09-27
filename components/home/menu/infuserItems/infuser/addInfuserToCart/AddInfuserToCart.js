import { useContext } from "react";
import AddInfuserToCartContainer from "./styles/styles";
import getCommerce from "../../../../../../lib/commerce";
import { useCartDispatch } from "../../../../../../context/cart";
import { CartOpenContext } from "../../../../../../context/openCart";

const AddInfuserToCart = ({ price, productId }) => {
  const { setCart } = useCartDispatch();
  const { toggle, open } = useContext(CartOpenContext);

  const addToCart = () => {
    const commerce = getCommerce();

    if (open) {
      commerce.cart.add(productId, 1).then(({ cart }) => {
        setCart(cart);
      });
    } else {
      toggle();
      commerce.cart.add(productId, 1).then(({ cart }) => {
        setCart(cart);
      });
    }
  };
  return (
    <AddInfuserToCartContainer>
      <div className="price">{price.formatted_with_symbol}</div>
      <button className="add-infuser" onClick={addToCart}>
        +
      </button>
    </AddInfuserToCartContainer>
  );
};

export default AddInfuserToCart;
