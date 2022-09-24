import React from "react";
import Image from "next/image";
import BG from "./img/bg-image.svg";
import FB from "./img/social-icons/Icon feather-facebook.svg";
import IG from "./img/social-icons/Icon feather-instagram.svg";
import TW from "./img/social-icons/Icon feather-twitter.svg";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  padding: clamp(7rem, 20vw, 150px) clamp(1rem, 7vw, 50px);
  position: relative;

  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 891px) {
      flex-direction: column;
      gap: 3rem;
    }
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0.04;
      background-image: url("https://s3.us-east-2.amazonaws.com/2ndplayer.co/bg-image.svg");
    }

    .footer-social {
      h4 {
        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: ${({ theme }) => theme.fontSizes.md};
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.beanGreen};
      }

      .social-icons {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
      }
    }

    .business-details {
      display: flex;
      gap: 2rem;
      @media (max-width: 891px) {
        flex-direction: column;
        gap: 3rem;
      }
      h4 {
        font-family: ${({ theme }) => theme.fonts[0]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.beanGreen};
        margin-bottom: 0.5rem;
      }

      address {
        color: ${({ theme }) => theme.colors.tan};
        margin-bottom: 0.3rem;
      }

      p {
        color: ${({ theme }) => theme.colors.tan};
        margin-bottom: 0.3rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer bgURL={BG}>
      <div className="footer-wrapper">
        <div className="footer-social">
          <h4>Share with friends</h4>
          <div className="social-icons">
            <Image src={FB} width={25} height={25} />
            <Image src={IG} width={25} height={25} />
            <Image src={TW} width={25} height={25} />
          </div>
        </div>
        <div className="business-details">
          <div>
            <h4>Location</h4>
            <address>234 Metropolitian St, New York, 11238</address>
            <p>(Get Directions)</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: chris@2ndplayer.co</p>
            <p>Tel: 929.434.3484</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
