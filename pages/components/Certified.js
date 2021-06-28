import { GridItem, useColorModeValue, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Certified = ({ item }) => {
  const { image, title } = item;
  return (
    <GridItem
      rounded="md"
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      shadow="md"
      cursor="pointer"
      overflow="hidden"
    >
      <Text as="h4" fontSize="sm" textAlign="left" p="2">
        {title}
      </Text>
      <Image src={image} alt={title} layout="responsive" />
    </GridItem>
  );
};

export default Certified;
