import { extendTheme } from '@chakra-ui/react';


export const Theme = extendTheme({
  colors: {
    gray: {
      "350": '#999999',
      "355": '#99999980',
      "550": '#47585B',
    },
    yellow: {
      "450": '#FFBA08',
      "455": '#FFBA0880',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.550'
      }
    }
  }
});