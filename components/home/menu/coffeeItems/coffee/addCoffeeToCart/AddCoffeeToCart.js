import React, { useContext } from "react";
import styled from "styled-components";
import { useCartDispatch } from "../../../../../../context/cart";
import getCommerce from "../../../../../../lib/commerce";
import { CartOpenContext } from "../../../../../../context/openCart";
import AddButton from "./addButton/AddButton";
import Price from "./price/Price";
import { toast } from "react-toastify";

const AddCoffeeToCartContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const AddCoffeeToCart = ({
  price,
  coffeeId,
  selectedInfuserId,
  sizeGroupId,
  infuserGroupId,
  selectedSizeId,
}) => {
  const { setCart } = useCartDispatch();
  const { toggle, open } = useContext(CartOpenContext);

  const updateCart = async (id, qty, variants = {}) => {
    const commerce = getCommerce();

    try {
      const { cart } = await commerce.cart.add(id, qty, variants);

      if (cart) return setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    const variants = {
      [infuserGroupId]: selectedInfuserId,
      [sizeGroupId]: selectedSizeId,
    };

    if (variants[infuserGroupId] === "" || variants[sizeGroupId] === "")
      return toast.warn(
        ({}) => (
          <div>
            Please select a <span style={{ fontWeight: 600 }}>Size</span> and{" "}
            <span style={{ fontWeight: 600 }}>Infuser</span>.
          </div>
        ),
        { position: "bottom-right", autoClose: 1500 }
      );

    if (open) {
      updateCart(coffeeId, 1, variants);
    } else {
      toggle();
      updateCart(coffeeId, 1, variants);
    }
  };

  return (
    <AddCoffeeToCartContainer>
      <Price price={price} />
      <AddButton addToCart={addToCart} />
    </AddCoffeeToCartContainer>
  );
};

export default AddCoffeeToCart;
