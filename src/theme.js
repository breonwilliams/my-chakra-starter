// src/theme.js
import { extendTheme } from '@chakra-ui/react';

// Main lime accent color
const lime = {
  50: '#F2FFE0',
  100: '#E6FFB3',
  200: '#D6FF80',
  300: '#C6FF4D',
  400: '#B6FF1A',
  500: '#A6FF00', // Your specified color
  600: '#88CC00',
  700: '#669900',
  800: '#446600',
  900: '#223300',
};

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: lime, // Replace the purple brand with lime
    lime: lime,   // Add lime as a color option
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#09090b' : 'white', // Very dark background for dark mode
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'lime.500' : 'lime.500',
          color: '#09090b', // Black text on lime for better contrast
          _hover: {
            bg: props.colorMode === 'dark' ? 'lime.400' : 'lime.600',
            transform: 'translateY(-2px)',
            boxShadow: 'md',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'lime.500' : '#09090b',
          color: props.colorMode === 'dark' ? 'lime.500' : '#09090b',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(166, 255, 0, 0.12)' : 'rgba(166, 255, 0, 0.12)',
          },
        }),
        ghost: (props) => ({
          _hover: {
            bg: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.100',
          },
        }),
      },
    },
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      }),
    },
  },
});

export default theme;