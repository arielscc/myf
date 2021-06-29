import React from 'react';
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { VscCircleOutline } from 'react-icons/vsc';

const Navigator = ({ children, title, position }) => (
  <Box
    position="absolute"
    right={position === 'left' && '0'}
    left={position === 'right' && '0'}
    w="2xl"
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    border="1px"
    borderColor={useColorModeValue('gray.200', 'gray.500')}
  >
    <HStack
      p="2"
      bg={useColorModeValue('gray.100', 'gray.600')}
      justify="flex-end"
    >
      <HStack spacing="1">
        <Box color="red.400">
          <VscCircleOutline size="25" />
        </Box>
        <Box color="yellow.400">
          <VscCircleOutline size="25" />
        </Box>
        <Box color="green.400">
          <VscCircleOutline size="25" />
        </Box>
      </HStack>
      <Box
        position="absolute"
        fontSize="sm"
        fontFamily="jet"
        w="full"
        textAlign="center"
      >
        <Text
          bg={useColorModeValue('white', 'gray.800')}
          rounded="lg"
          w="xs"
          mx="auto"
          py="1"
        >
          {title}
        </Text>
      </Box>
    </HStack>
    {children}
  </Box>
);

export default Navigator;
