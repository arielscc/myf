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
    <HStack
      position="relative"
      mt="10"
      h="md"
      justifyContent={position === 'left' ? 'flex-start' : 'flex-end'}
    >
      <VStack
        w="lg"
        zIndex="overlay"
        spacing="5"
        alignItems={position === 'left' ? 'flex-start' : 'flex-end'}
      >
        <Box p="4">
          <chakra.span fontSize="md" fontFamily="jet">
            Proyecto destacado
          </chakra.span>
          <Heading fontSize="2xl">{title}</Heading>
        </Box>
        <Box
          rounded="xl"
          shadow="md"
          bg={useColorModeValue('white', 'gray.700')}
          p="4"
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
          <Text fontSize="md" textAlign="left">
            {description}
          </Text>
        </Box>
        <Box p="4" spacing="3">
          <HStack w="2xs">
            {tags.map(tag => (
              <Tag key={tag} size="md" variant="outline" colorScheme="cyan">
                {tag}
              </Tag>
            ))}
          </HStack>
          <HStack
            spacing="1"
            mt="4"
            justifyContent={position === 'right' ? 'flex-start' : 'flex-end'}
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
      <Navigator title={title} position={position}>
        <Image
          src={picture}
          alt="proyecto"
          layout="responsive"
          position={position}
        />
      </Navigator>
    </HStack>
  );
};

export default Project;
