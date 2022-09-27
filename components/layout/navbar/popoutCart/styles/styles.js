import styled, { css } from "styled-components";
import { popInCart, popOutCart } from "../keyframes/popInAnimations";

export const PopOutCartContainer = styled.div`
  position: absolute;
  .popout-cart-wrapper {
    padding: 2rem;
    animation: ${({ toggleOn = false }) =>
      toggleOn
        ? css`
            ${popOutCart} 0.7s linear forwards
          `
        : css`
            ${popInCart} 0.7s linear forwards
          `};
    animation-duration: 800ms;
    position: fixed;
    bottom: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.beanGreen};
    box-shadow: -10px 0px 10px 1px rgba(0, 0, 0, 0.3);
    max-width: 30rem;
    width: 100%;
    z-index: 2;
    .cart {
      .cart-items-count {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4rem;
        h3 {
          font-family: ${({ theme }) => theme.fonts[0]};
          color: ${({ theme }) => theme.colors.tan};
          text-transform: uppercase;
          font-size: ${({ theme }) => theme.fontSizes.sm};
          font-weight: 900;
        }

        p {
          width: 30px;
          height: 30px;
          border-radius: 1rem;
          background-color: ${({ theme }) => theme.colors.darkPurple};
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${({ theme }) => theme.colors.tan};
          font-size: 0.9em;
        }
      }
    }
  }
`;
