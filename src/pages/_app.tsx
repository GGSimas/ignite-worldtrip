import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Theme } from '../styles/theme';
import { Header } from '../components/Header';

import 'swiper/swiper-bundle.css';
import '../styles/swiper.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
