import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button';
import { Link } from './components/link';
import { ButtonGroup } from './components/buttonGroup';
const theme = extendTheme({
  //categoria 1 => h1 -> 8xl -> []
  //categoria 2 => h2 => heading
  //
  fonts: {
    jet: 'JetBrains Mono',
    montse: 'Montserrat',
  },
  colors: {
    tomato: '#ff0030',
    secondary: '#012a4a',
    third: '#00cecb',
  },
  components: {
    Button,
    ButtonGroup,
    Link,
  },
});
export default theme;
