import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button';
import { ButtonGroup } from './components/buttonGroup';
const theme = extendTheme({
  fonts: {
    jet: 'JetBrains Mono',
    montse: 'Montserrat',
  },
  colors: {
    tomato: '#f45b69',
    secondary: '#012a4a',
    third: '#00cecb',
  },
  components: {
    Button,
    ButtonGroup,
  },
});
export default theme;
