import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../theme";
import Layout from "../components/layout/Layout";
import { CartProvider } from "../context/cart";
import CartOpenProvider from "../context/openCart";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartOpenProvider>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </CartOpenProvider>
    </ThemeProvider>
  );
}

export default MyApp;
