import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/globals.scss";
import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";
import { LinearProgress } from "@mui/material";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Alert from "../src/components/Alert";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    // SUS, lol it was on n off
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    // Now we should make sure to remove these event listeners when effect exits or whatever, dismount/unmount?
    () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"></link>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Alert />
          {loading && <LinearProgress color="secondary" sx={{ zIndex: 999999999, height: 2.4, position: "fixed", top: 0, left: 0, width: "100%" }} />}
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

// well! its working :)
// byee see you in the next one
