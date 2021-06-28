import { Box, HStack, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <HStack as="footer" h="24" textAlign="center" justifyContent="center">
      <Text fontSize="sm">Diseñado & Desarrollado por Ariel Chura</Text>
    </HStack>
  );
};

export default Footer;
