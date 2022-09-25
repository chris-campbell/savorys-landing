import styled from "styled-components";

const InfuserContainer = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 777px) {
    border-bottom: 1px solid #8e9d7a36;

    &:last-child {
      border-bottom: none;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.beanGreen};
    font-size: clamp(0.9rem, 1vw, ${({ theme }) => theme.fontSizes.xxs});
    font-style: italic;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

export default InfuserContainer;
