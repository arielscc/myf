/* eslint-disable react/jsx-props-no-spreading */
import { darken, mode, whiten } from '@chakra-ui/theme-tools';

const Button = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: props => ({
      color: mode('gray.600', 'white')(props),

      fontSize: 'sm',
      _hover: {
        bg: mode(whiten('secondary', 15), darken('tomato', 10))(props),
        color: mode('white', 'white')(props),
      },
      _focus: {
        bg: mode(whiten('secondary', 20), darken('tomato', 15))(props),
        color: mode('white', 'white')(props),
      },
    }),
    secondary: props => ({
      color: 'white',
      py: '4',
      px: '4',
      w: 'full',
      rounded: '12',
      fontFamily: 'jet',
      bg: mode(whiten('secondary', 15), darken('tomato', 10))(props),
      _hover: {
        bg: mode(whiten('secondary', 20), darken('tomato', 15))(props),
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

export default Button;
