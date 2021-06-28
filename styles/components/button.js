import { useColorModeValue } from '@chakra-ui/react';
import { darken, whiten, mode } from '@chakra-ui/theme-tools';
export const Button = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: props => ({
      color: mode('white', 'cyan')(props),
      py: '2',
      px: '4',
      fontSize: 'md',
      _hover: {
        bg: mode(whiten('third', 0), darken('gray.600', 15))(props),
      },
      _focus: {
        bg: mode(whiten('third', 0), darken('gray.600', 15))(props),
      },
    }),
    secondary: props => ({
      color: 'white',
      py: '4',
      px: '4',
      bg: 'tomato',
      w: 'full',
      rounded: 'full',
      shadow: 'xl',
      _hover: {
        bg: mode(whiten('tomato', 20), darken('tomato', 10))(props),
        shadow: 'lg',
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};
