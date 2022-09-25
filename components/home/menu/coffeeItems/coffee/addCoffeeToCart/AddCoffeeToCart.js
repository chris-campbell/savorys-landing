import React from "react";
import styled from "styled-components";
import { useCartDispatch } from "../../../../../../context/cart";
import getCommerce from "../../../../../../lib/commerce";

const AddCoffeeToCartContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  .price {
    font-family: ${({ theme }) => theme.fonts[0]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.beanGreen};
    text-transform: uppercase;
    font-weight: 600;
  }

  .add-button {
    background-color: transparent;
    padding: 0.1rem 0.4rem;
    border: 1.5px solid ${({ theme }) => theme.colors.beanGreen};
    color: ${({ theme }) => theme.colors.beanGreen};
    border-radius: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }
`;

const AddCoffeeToCart = ({ price, coffeeId }) => {
  const { setCart } = useCartDispatch();

  const addToCart = () => {
    const commerce = getCommerce();
    commerce.cart.add(coffeeId, 1).then(({ cart }) => {
      setCart(cart);
    });
  };
  return (
    <AddCoffeeToCartContainer className="add-to-cart">
      <div className="price">{price.formatted_with_symbol}</div>
      <button className="add-button" onClick={addToCart}>
        +
      </button>
    </AddCoffeeToCartContainer>
  );
};

export default AddCoffeeToCart;
