import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ThcSectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.beanGreen};

  .thc-section-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: clamp(7rem, 20vw, 100px) clamp(1rem, 7vw, 50px);
    justify-content: center;
    align-items: center;
    column-gap: 3rem;

    @media (max-width: 699px) {
      grid-template-columns: none;
      grid-template-columns: repeat(1 1fr);
    }

    span {
      @media (max-width: 699px) {
        width: 100% !important;
        margin-top: 3rem !important;
      }
      img {
        border-radius: 0.5rem;
        width: 100% !important;
      }
    }

    .thc-copy {
      h3 {
        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: clamp(1.5rem, 5vw, ${({ theme }) => theme.fontSizes.md});
        font-weight: 600;
        text-transform: uppercase;
        text-align: left;
        margin-bottom: 1.5rem;
        color: ${({ theme }) => theme.colors.tan};
      }

      p {
        text-align: left;
        line-height: 1.9;
        color: ${({ theme }) => theme.colors.tan};
      }
    }
  }
`;

const ThcSection = () => {
  return (
    <ThcSectionContainer>
      <div className="thc-section-wrapper">
        <div className="thc-copy">
          <h3>Savory’s hybrid strain</h3>
          <p>
            We work exclusivly with local growers at Los Merci Farms, to ensure
            the quality and potientcy of our hybrid strains. We focus on strains
            with properties geared toward stress and anxiety relief and deliver
            them in managable doses so you experience the calm and nothing else.
          </p>
        </div>
        <div>
          <Image
            src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/thc-molecule.svg"
            width={590}
            height={300}
          />
        </div>
      </div>
    </ThcSectionContainer>
  );
};

export default ThcSection;
