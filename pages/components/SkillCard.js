import { GridItem, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const SkillCard = ({ item }) => {
  const { title, Icon: Icono } = item;
  return (
    <GridItem
      key={title}
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      bg={useColorModeValue('white', 'gray.700')}
      maxW={['20', '32']}
      maxH={['20', '32']}
      py={['3', '4']}
      w="full"
      boxShadow="md"
      rounded="lg"
      cursor="pointer"
      _hover={{
        boxShadow: 'none',
        transition: '1s',
      }}
      textAlign="center"
    >
      <Icon as={Icono} boxSize="50%" />
      <Text fontSize={['xs', 'xs', 'sm', 'inherit']} mt={['2', '4']}>
        {title}
      </Text>
    </GridItem>
  );
};

export default SkillCard;
