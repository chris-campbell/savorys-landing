import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../theme";
import Layout from "../components/layout/Layout";
import { CartProvider } from "../context/cart";
import CartOpenProvider from "../context/openCart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(process.env.STRIP_PK_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartOpenProvider>
        <ToastContainer />
        <Elements stripe={stripePromise}>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </Elements>
      </CartOpenProvider>
    </ThemeProvider>
  );
}

export default MyApp;
