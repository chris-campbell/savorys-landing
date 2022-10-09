import styled, { keyframes, css } from "styled-components";

export const dropdown = keyframes`
  0% { height: 0rem;  opacity: 0;}
  100% { height: 4rem; opacity: 1;}
`;

export const popUp = keyframes`
  0% { height: 4rem;  opacity: 1;}
  100% { height: 0rem; opacity: 0; }
`;

const DropDownMenuContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tan};
  height: 3rem;
  animation: ${({ menuToggle = false }) =>
    menuToggle
      ? css`
          ${dropdown} 0.7s linear forwards
        `
      : css`
          ${popUp} 0.7s linear forwards
        `};
  animation-duration: ${({ menuToggle }) => (menuToggle ? "800ms" : "0s")};
  .dropdown-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ul {
      display: flex;
      justify-content: flex-end;
      width: 30%;
      gap: 1rem;
      li {
        display: inline-block;
        font-size: 0;
        a {
          text-align: center;
          font: normal 16px ${({ theme }) => theme.fonts[1]};
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.darkPurple};
          text-decoration: none;

          &:hover {
            font-weight: bold;
          }

          &::before {
            display: block;
            content: attr(title);
            font-weight: bold;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }
        }
      }
    }
  }
`;

export default DropDownMenuContainer;
