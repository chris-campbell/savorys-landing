import React from "react";
import Image from "next/image";
import styled from "styled-components";

const CartItemContainer = styled.div`
  .cart-item-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 1rem;

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
      text-align: right;
      color: ${({ theme }) => theme.colors.tan};
    }
  }
`;

const CartItem = ({ line_total, product_name, image, quantity, sku }) => {
  return (
    <CartItemContainer>
      <div className="cart-item-wrapper">
        {/* <div className="item-image">
          {image?.url && <Image src={image?.url} width={30} height={39} />}
        </div> */}
        <div className="item-meta">
          <h4 className="item-name">{product_name}</h4>
          <div className="item-sku">{sku}</div>
        </div>
        <div className="item-qty">{quantity}</div>
        <div className="item-price">{line_total.formatted_with_symbol}</div>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
