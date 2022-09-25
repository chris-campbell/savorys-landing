import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../theme";
import Layout from "../components/layout/Layout";
import { CartProvider } from "../context/cart";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
