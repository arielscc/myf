import { HStack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Footer = () => (
  <HStack
    as="footer"
    h="24"
    bg={useColorModeValue('gray.50', 'gray.800')}
    justifyContent="center"
  >
    <Text fontSize="md" fontFamily="jet" px="5" textAlign="center">
      Diseñado & Desarrollado por Ariel Chura
    </Text>
  </HStack>
);
export default Footer;
