import React from 'react';
import Image from 'next/image';
import {
  HStack,
  VStack,
  Box,
  chakra,
  Text,
  Tag,
  IconButton,
  Heading,
  useColorModeValue,
  Link,
  Flex,
  Wrap,
} from '@chakra-ui/react';
import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';
import Navigator from './Navigator';
import picture from '../assets/projects/heroes-app.jpg';

const Project = ({ data, index }) => {
  const {
    title,
    links: { github, live },
    description,
    tags,
  } = data;
  const position = index % 2 === 0 ? 'left' : 'right';
  return (
    <Flex
      direction={{
        base: 'column-reverse',
        md: position === 'left' ? 'row' : 'row-reverse',
      }}
      my="5"
      alignItems="center"
      h={{ base: 'inherit', md: 'md' }}
    >
      <VStack
        w={{ base: 'full', md: 'lg' }}
        spacing="5"
        alignItems={position === 'left' ? 'flex-start' : 'flex-end'}
        textAlign={position === 'left' ? 'left' : 'right'}
        mr={position === 'left' ? { base: 'inherit', md: '-32' } : 'inherit'}
        ml={position === 'right' ? { base: 'inherit', md: '-32' } : 'inherit'}
        zIndex="docked"
      >
        <Box p="4">
          <chakra.span fontSize="md" fontFamily="jet">
            Proyecto destacado
          </chakra.span>
          <Heading fontSize="2xl" maxW="2xs">
            {title}
          </Heading>
        </Box>
        <Box
          rounded="xl"
          shadow="md"
          bg={useColorModeValue('white', 'gray.700')}
          p="4"
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
          <Text textAlign={position === 'left' ? 'left' : 'right'}>
            {description}
          </Text>
        </Box>
        <Box w={{ base: 'full', md: '60%', lg: '65%' }}>
          <Wrap gridGap="2">
            {tags.map(tag => (
              <Tag key={tag} size="md" variant="outline" colorScheme="cyan">
                {tag}
              </Tag>
            ))}
          </Wrap>
          <HStack
            spacing="1"
            mt="4"
            justifyContent={
              position === 'right'
                ? 'flex-start'
                : { base: 'flex-start', md: 'flex-end' }
            }
          >
            <IconButton
              as={Link}
              href={github}
              target="_blank"
              size="md"
              variant="outline"
              colorScheme="blue"
              rounded="lg"
              icon={<VscGithubAlt size="20" />}
            />
            <IconButton
              as={Link}
              href={live}
              target="_blank"
              size="md"
              variant="outline"
              colorScheme="blue"
              rounded="lg"
              icon={<VscLinkExternal size="20" />}
            />
          </HStack>
        </Box>
      </VStack>
      <Navigator title={title}>
        <Image src={picture} alt={`imagen ${title}`} layout="responsive" />
      </Navigator>
    </Flex>
  );
};

export default Project;
