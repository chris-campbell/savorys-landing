import React from "react";
import styled from "styled-components";

const InfuserContainer = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 777px) {
    border-bottom: 1px solid #8e9d7a36;

    &:last-child {
      border-bottom: none;
    }
  }

  .infuser-title {
    .doseage {
      font-family: ${({ theme }) => theme.fonts[0]};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.lightPurple};
      margin-bottom: 0.2rem;
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      text-transform: uppercase;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.darkPurple};
      margin-bottom: 0.5rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.beanGreen};
    font-size: clamp(0.9rem, 1vw, ${({ theme }) => theme.fontSizes.xxs});
    font-style: italic;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .add-infuser-to-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    .price {
      color: ${({ theme }) => theme.colors.darkPurple};
      font-family: ${({ theme }) => theme.fonts[0]};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.beanGreen};
      font-weight: 600;
      text-transform: uppercase;
    }

    .add-infuser {
      background-color: transparent;
      padding: 0.1rem 0.4rem;
      border: 1.5px solid ${({ theme }) => theme.colors.beanGreen};
      color: ${({ theme }) => theme.colors.beanGreen};
      border-radius: 2rem;
      font-size: ${({ theme }) => theme.fontSizes.xxs};
      @media (max-width: 777px) {
        margin-bottom: 1rem;
      }
    }
  }
`;

const Infuser = ({ name, description, price, attributes }) => {
  const modDescription = description.replace(/<[^>]+>/g, "");

  return (
    <InfuserContainer>
      <div className="infuser-title">
        <div className="doseage">THC {attributes[1].value}MG</div>
        <h3>{name}</h3>
      </div>
      <p>{modDescription}</p>
      <div className="add-infuser-to-cart">
        <div className="price">{price.formatted_with_symbol}</div>
        <button className="add-infuser">+</button>
      </div>
    </InfuserContainer>
  );
};

export default Infuser;
