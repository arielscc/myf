import { Box, Button, Link, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FiMail } from 'react-icons/fi';
import Container from '../components/Container';
import AppContext from '../context/context';

const Contact = () => {
  const { contact } = useContext(AppContext);
  const { button, desc, title } = contact;
  return (
    <Container title={title} index={5}>
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
          {button}
        </Button>
      </Box>
    </Container>
  );
};
export default Contact;
