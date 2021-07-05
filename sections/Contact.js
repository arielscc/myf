import React, { useContext } from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import Container from '../components/Container';
import AppContext from '../context/context';

const Contact = () => {
  const { contact } = useContext(AppContext);
  const { desc } = contact;
  return (
    <Container title="Contact" index={6}>
      <Box mt="5" textAlign="center">
        <Text maxW="2xl" mx="auto" my="4">
          {desc}
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
};
export default Contact;
