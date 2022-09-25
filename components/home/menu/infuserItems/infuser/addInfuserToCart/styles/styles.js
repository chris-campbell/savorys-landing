import styled from "styled-components";

const AddInfuserToCartContainer = styled.div`
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
`;

export default AddInfuserToCartContainer;
