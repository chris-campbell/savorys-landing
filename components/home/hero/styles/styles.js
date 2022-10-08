import styled from "styled-components";

const HeroContainer = styled.section`
  max-height: 80vh;
  position: relative;
  display: flex;
  .content-wrapper {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        90deg,
        rgba(29, 29, 29, 0.992) 22%,
        rgba(40, 39, 39, 0.646) 56%,
        rgba(66, 66, 66, 0) 83%
      ),
      url("https://s3.us-east-2.amazonaws.com/2ndplayer.co/coffee_pouring+(1).gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .content {
      max-width: 1200px;
      padding: clamp(7rem, 20vw, 150px) clamp(1rem, 7vw, 50px);
      margin: 0 auto;
      h2 {
        color: ${({ theme }) => theme.colors.tan};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }

      h1 {
        color: ${({ theme }) => theme.colors.beanGreen};
        font-size: clamp(${({ theme }) => theme.fontSizes.md}, 5vw, 4em);
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        max-width: 90%;
      }

      p {
        color: ${({ theme }) => theme.colors.tan};
        font-size: clamp(0.9em, 3vw, 1.2em);
        margin-bottom: 2rem;
        line-height: 1.6;
        max-width: 80%;
      }

      a {
        background-color: ${({ theme }) => theme.colors.darkPurple};
        border: none;
        padding: 0.8rem 2rem;
        color: ${({ theme }) => theme.colors.tan};
        border-radius: 0.2rem;
        font-size: clamp(${({ theme }) => theme.fontSizes.xxs}, 100vw, 1.1em);
        text-decoration: none;
        &:active {
          transform: scale(0.6);
        }

        &:hover {
          transition: background-color 0.3s ease-in-out;
          background-color: ${({ theme }) => theme.colors.lightPurple};
        }
      }
    }
  }
`;

export default HeroContainer;
