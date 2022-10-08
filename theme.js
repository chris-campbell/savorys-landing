import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset} // Reset CSS

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      
        scroll-behavior: smooth;
    }

    body {
        background-color: ${({ theme }) => theme.colors.tan};
        font-family: ${({ theme }) => theme.fonts[1]};
        scroll-behavior: smooth;
    }

    main {
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts[0]};
    }

`;

export const theme = {
  colors: {
    darkPurple: "#3F2D3B",
    lightPurple: "#928381",
    beanGreen: "#8E9D7A",
    tan: "#FDF1DA",
  },
  fonts: ["atrament-web", "arboria", "bourbon"],
  fontSizes: {
    xl: "3.125em", // 50px
    lg: "2.8125em", // 45px
    md: "2.1875em", // 35px
    sm: "1.4375em", // 23px
    xs: "1.25em", // 20px
    xxs: "1em", // 16px
  },
};

export default GlobalStyles;
