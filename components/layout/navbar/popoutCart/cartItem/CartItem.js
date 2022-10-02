import React from "react";
import styled from "styled-components";
import getCommerce from "../../../../../lib/commerce";
import { useCartDispatch } from "../../../../../context/cart";

const CartItemContainer = styled.div`
  .cart-item-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 1rem;

    .item-image {
      width: 22px;
      height: 22px;
      background-color: ${({ theme }) => theme.colors.darkPurple};
      color: ${({ theme }) => theme.colors.tan};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.2rem;
      margin-left: auto;
      margin-right: 0;
      font-size: 0.6rem;
    }

    .item-meta {
      .item-name {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-family: ${({ theme }) => theme.fonts[0]};
        color: ${({ theme }) => theme.colors.tan};
        text-transform: uppercase;
        margin-bottom: 0.2rem;
        font-weight: 600;
      }

      .item-sku {
        font-family: ${({ theme }) => theme.fonts[1]};
        color: ${({ theme }) => theme.colors.tan};
        font-size: 0.8rem;
      }
    }

    .item-qty {
      text-align: center;
      color: ${({ theme }) => theme.colors.tan};
    }

    .item-price {
      text-align: center;
      color: ${({ theme }) => theme.colors.tan};
    }
  }
`;

const CartItem = ({ line_total, product_name, image, quantity, sku, id }) => {
  const commerce = getCommerce();

  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);
  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  return (
    <CartItemContainer>
      <div className="cart-item-wrapper">
        <div className="item-meta">
          <h4 className="item-name">{product_name}</h4>
          <div className="item-sku">{sku}</div>
        </div>
        <div className="item-qty">{quantity}</div>
        <div className="item-price">{line_total.formatted_with_symbol}</div>
        <div className="item-image" onClick={() => removeItem()}>
          X
        </div>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
