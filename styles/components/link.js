import { darken, mode, whiten } from '@chakra-ui/theme-tools';

const Link = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: props => ({
      color: mode('gray.600', 'white')(props),
      py: { base: '3', lg: '1' },
      px: { base: '100%', lg: '3' },
      fontSize: 'sm',
      rounded: 'md',
      _hover: {
        bg: mode(whiten('secondary', 15), darken('tomato', 10))(props),
        textDecoration: 'none',
        color: "white"
      },
    }),
    secondary: {
      color: whiten('tomato', 40),
      fontSize: 'sm',
      fontFamily: 'jet',
      textDecoration: 'underline',
      fontWeight: '700',
      _hover: {
        textDecoration: 'none',
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};

export default Link;
