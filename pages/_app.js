/* eslint-disable react/jsx-props-no-spreading */

import '@fontsource/euphoria-script/400.css';
import '@fontsource/jetbrains-mono/600.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/800.css';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
