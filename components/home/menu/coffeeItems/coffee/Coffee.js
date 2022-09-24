import React from "react";
import Image from "next/image";
import styled from "styled-components";

const CoffeeContainer = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;

  @media (max-width: 777px) {
    border-bottom: 1px solid #8e9d7a36;

    &:last-child {
      border-bottom: none;
    }
  }

  .coffee-wrapper {
    grid-auto-rows: 1fr;
    display: grid;
    @media (max-width: 777px) {
      grid-auto-rows: min-content;
    }

    .coffee-attr-wrapper {
      display: flex;
      justify-content: center;
    }
    .coffee-attributes {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: fit-content;
      text-align: center;
      align-self: center;

      h4 {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        text-transform: uppercase;
        font-weight: 600;
      }

      .coffee-calories {
        color: ${({ theme }) => theme.colors.lightPurple};
        font-family: ${({ theme }) => theme.fonts[0]};
        font-weight: 600;
        text-transform: uppercase;
      }
    }

    .coffee-image {
      text-align: center;
      align-self: center;
      @media (max-width: 743px) {
        margin: 1rem 0;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.beanGreen};
      font-style: italic;
      line-height: 1.4;
      align-self: center;
      word-wrap: break-word;
      margin-top: 2rem;
      font-size: clamp(0.9rem, 1vw, ${({ theme }) => theme.fontSizes.xxs});
    }

    .add-to-cart {
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
    }
  }
`;

const Coffee = ({ name, image, description, attributes, price }) => {
  const modDescription = description.replace(/<[^>]+>/g, "");

  return (
    <CoffeeContainer>
      <div className="coffee-wrapper">
        <div className="coffee-attr-wrapper">
          <div className="coffee-attributes">
            <h4 className="coffee-name">{name}</h4>
            <div className="coffee-calories">{attributes[0].value} Cal</div>
          </div>
        </div>

        <div className="coffee-image">
          <Image src={image.url} width={85} height={120} />
        </div>

        <p>{modDescription}</p>

        <div className="add-to-cart">
          <div className="price">{price.formatted_with_symbol}</div>
          <button className="add-button">+</button>
        </div>
      </div>
    </CoffeeContainer>
  );
};

export default Coffee;
