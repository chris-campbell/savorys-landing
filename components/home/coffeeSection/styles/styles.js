import styled from "styled-components";

const CoffeeSectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.tan};

  .coffee-section-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: clamp(7rem, 20vw, 100px) clamp(1rem, 7vw, 50px);
    justify-content: center;
    align-items: center;
    column-gap: 2rem;

    @media (max-width: 699px) {
      grid-template-columns: none;
      grid-template-columns: repeat(1 1fr);
    }

    span {
      @media (max-width: 699px) {
        width: 100% !important;
        margin-bottom: 1rem !important;
      }
      img {
        border-radius: 0.5rem;
        width: 100% !important;
      }
    }

    .coffee-copy {
      h3 {
        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: clamp(1.5rem, 5vw, ${({ theme }) => theme.fontSizes.md});
        color: ${({ theme }) => theme.colors.darkPurple};
        font-weight: 600;
        text-transform: uppercase;
        text-align: right;
        margin-bottom: 1.5rem;
      }
      p {
        text-align: right;
        line-height: 1.8;
        color: ${({ theme }) => theme.colors.darkPurple};
      }
    }
  }
`;

export default CoffeeSectionContainer;
