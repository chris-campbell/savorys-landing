import styled, { css } from "styled-components";
import { popInCart, popOutCart } from "../keyframes/popInAnimations";

export const PopOutCartContainer = styled.div`
  position: absolute;
  .popout-cart-wrapper {
    padding: 2rem;
    animation: ${({ toggleOn = false }) =>
      !toggleOn
        ? css`
            ${popInCart} 0.7s linear forwards
          `
        : css`
            ${popOutCart} 0.7s linear forwards
          `};
    animation-duration: ${({ toggleOn }) => (toggleOn ? "800ms" : "0s")};
    position: fixed;
    bottom: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.beanGreen};
    box-shadow: -10px 0px 10px 1px rgba(0, 0, 0, 0.3);
    max-width: 30rem;
    width: 100%;
    z-index: 2;

    @media (max-width: 580px) {
      box-shadow: none;
    }
  }
`;
