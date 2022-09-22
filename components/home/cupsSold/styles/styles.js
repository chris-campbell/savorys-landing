import styled from "styled-components";

const CupsSoldContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  padding: 4rem 2rem;

  .cups-sold-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    .message {
      p {
        color: ${({ theme }) => theme.colors.tan};
        font-size: clamp(1.1rem, 5vw, ${({ theme }) => theme.fontSizes.md});
        font-family: ${({ theme }) => theme.fonts[0]};
        text-transform: uppercase;
      }
      .highlight {
        max-width: 5rem;
        width: 100%;
        height: 3px;
        background: ${({ theme }) => theme.colors.beanGreen};
        margin-top: 0.5rem;
      }
    }
  }
`;

export default CupsSoldContainer;
