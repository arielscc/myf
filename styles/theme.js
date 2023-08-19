import { extendTheme } from '@chakra-ui/react';
import Button from './components/button';
import ButtonGroup from './components/buttonGroup';
import Link from './components/link';

const theme = extendTheme({
  fonts: {
    jet: 'JetBrains Mono',
    montse: 'Montserrat',
    script: 'Euphoria Script',
  },
  colors: {
    tomato: '#ff0040',
    secondary: '#012a4a',
    third: '#00cecb',
  },
  components: {
    Button,
    ButtonGroup,
    Link,
  },
  lColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;
