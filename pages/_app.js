import React from "react";
import {
  ColorModeScript,
  ChakraProvider,
  useColorMode
} from "@chakra-ui/react";

import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";
import { prismDarkTheme, prismLightTheme } from "../styles/prism";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  );
};

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeScript initialColorMode={"dark"} />
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
};

export default MyApp;
