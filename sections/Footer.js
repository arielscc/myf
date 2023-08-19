import { HStack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AppContext from '../context/context';

const Footer = () => {
  const { footer } = useContext(AppContext);
  const { desc } = footer;
  return (
    <HStack
      as="footer"
      h="24"
      mt="10"
      justifyContent="center"
      shadow="lg"
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
    >
      <Text fontSize="sm" fontFamily="jet" px="5" textAlign="center">
        {desc}
      </Text>
    </HStack>
  );
};
export default Footer;
