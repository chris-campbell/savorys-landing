import { useContext } from "react";
import { CartOpenContext } from "../../../../../../context/openCart";
import styled from "styled-components";

const CloseButtonContainer = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 4rem;
  margin-bottom: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.beanGreen};
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.tan};
  position: relative;
  right: 2.9rem;

  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.colors.lightPurple};
    transition: background-color 0.1s ease-in-out;
  }
`;

const CloseButton = () => {
  const { toggle } = useContext(CartOpenContext);

  return (
    <CloseButtonContainer onClick={toggle}>
      <div>X</div>
    </CloseButtonContainer>
  );
};

export default CloseButton;
