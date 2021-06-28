import { WrapItem, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const SkillCard = ({ item }) => {
  const { title, Icon } = item;
  return (
    <WrapItem
      key={title}
      border="1px"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      bg={useColorModeValue('white', 'gray.700')}
      p="4"
      maxW="32"
      h="32"
      w="full"
      boxShadow="md"
      rounded="lg"
      cursor="pointer"
      _hover={{
        boxShadow: 'none',
        transition: '1s',
      }}
    >
      <Icon size="50" bag={useColorModeValue('#2D3748', '#F7FAFC')} wi="50" />
      <Text>{title}</Text>
    </WrapItem>
  );
};

export default SkillCard;
