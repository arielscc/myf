import React from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import Container from '../components/Container';

const Contact = () => (
  <Container title="Contact" index={6}>
    <Box mt="5" textAlign="center">
      <Text maxW="2xl" mx="auto" my="4">
        Hola, Si quieres construir cosas increibles o quieres contactarte con
        migo por alguna sugerencia o pregunta puedes enviarme un correo, o un
        mensaje interno en mis redes sociales.
      </Text>
      <Button
        as={Link}
        href="mailto:ariel.chura.c@gmail.com"
        variant="secondary"
        maxW="xs"
        size="lg"
        leftIcon={<FiMail />}
        _hover={{
          textDecoration: 'none',
        }}
      >
        Mensaje
      </Button>
    </Box>
  </Container>
);
export default Contact;
