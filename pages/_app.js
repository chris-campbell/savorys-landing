import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../theme";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
