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

    /* p {
      color: ${({ theme }) => theme.colors.beanGreen};
      font-style: italic;
      line-height: 1.4;
      align-self: center;
      word-wrap: break-word;
      margin-top: 2rem;
      font-size: clamp(0.9rem, 1vw, ${({ theme }) => theme.fontSizes.xxs});
    } */
  }
`;

export default CoffeeContainer;
