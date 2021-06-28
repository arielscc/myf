import React from 'react';
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { VscCircleOutline } from 'react-icons/vsc';

const Navigator = ({ children, title, position }) => {
  return (
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
        <Text
          position="absolute"
          fontSize="sm"
          fontFamily="jet"
          w="full"
          textAlign="center"
        >
          {title}
        </Text>
      </HStack>
      {children}
    </Box>
  );
};

export default Navigator;
