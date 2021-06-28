import React from 'react';
import {
  Heading,
  Box,
  chakra,
  Text,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <Box w="5xl" mx="auto" my="20">
      <Heading fontFamily="jet">
        <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
          06.{' '}
        </chakra.span>
        Contacto
      </Heading>
      <Box mt="5" textAlign="center">
        <Heading my="4">Contactate con migo</Heading>
        <Text w="3xl" mx="auto" my="4">
          Hola, Si quieres construir cosas increibles o quieres contactarte con
          migo por alguna sugerencia o pregunta puedes enviarme un correo, o un
          mensaje interno en mis redes sociales.
        </Text>
        {/**
            TODO: Crear custom config de enlaces Link
             **/}
        <Button
          as={Link}
          href="mailto:ariel.chura.c@gmail.com"
          variant="secondary"
          w="xs"
          size="lg"
          leftIcon={<FiMail />}
          _hover={{
            textDecoration: 'none',
          }}
        >
          Mensaje
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
