import { GridItem, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const SkillCard = ({ item }) => {
  const { title, Icon: Icono } = item;
  const MotionGridItem = motion(GridItem);
  return (
    <MotionGridItem
      key={title}
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      bg={useColorModeValue('white', 'rgba(45, 55, 72, .3)')}
      maxW={['20', '32']}
      maxH={['20', '32']}
      py={['3', '4']}
      w="full"
      boxShadow="md"
      rounded="lg"
      textAlign="center"
    >
      <Icon as={Icono} boxSize="50%" />
      <Text
        fontSize={['xs', 'xs', 'sm', 'inherit']}
        mt={['2', '4']}
        textTransform="capitalize"
        userSelect='none'
      >
        {title}
      </Text>
    </MotionGridItem>
  );
};

export default SkillCard;
