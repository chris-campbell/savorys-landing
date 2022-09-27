import { keyframes } from "styled-components";

export const popOutCart = keyframes`
  0% { right: -30rem;  opacity: 0;}
  100% { right: 0rem; opacity: 1;}
`;

export const popInCart = keyframes`
  0% { right: 0;  opacity: 1;}
  100% { right: -30rem; opacity: 0; }
`;
