import {
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';
import Navigator from './Navigator';

const Project = ({ data, index, type }) => {
  const {
    title,
    links: { github, live },
    description,
    tags,
    url,
  } = data;

  const position = index % 2 === 0 ? 'left' : 'right';

  return (
    <Flex
      direction={{
        base: 'column-reverse',
        md: position === 'left' ? 'row' : 'row-reverse',
      }}
      my={{ base: '10', md: '5' }}
      alignItems="center"
      h={{ base: 'inherit', md: 'md' }}
      gap={{ base: '5', md: '0' }}
    >
      <VStack
        w={{ base: 'full', md: 'lg' }}
        spacing={{ base: '4', md: '5' }}
        alignItems={{
          base: 'flex-start',
          md: position === 'left' ? 'flex-start' : 'flex-end',
        }}
        textAlign={{
          base: 'left',
          md: position === 'left' ? 'left' : 'right',
        }}
        mr={position === 'left' ? { base: 'inherit', md: '-32' } : 'inherit'}
        ml={position === 'right' ? { base: 'inherit', md: '-32' } : 'inherit'}
        zIndex="docked"
      >
        <Box p={{ base: '0', md: '4' }} w="full">
          <chakra.span
            fontSize={{ base: 'xs', md: 'sm' }}
            fontFamily="jet"
            color="tomato"
            textTransform="capitalize"
          >
            {type}
          </chakra.span>
          <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} maxW="2xs">
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
          <Text
            textAlign={{
              base: 'left',
              md: position === 'left' ? 'left' : 'right',
            }}
          >
            {description}
          </Text>
        </Box>
        <Box w={{ base: 'full', md: '60%', lg: '65%' }}>
          <Flex gridGap="2" wrap="wrap">
            {tags.map(tag => (
              <Tag
                key={tag}
                size="md"
                variant="outline"
                colorScheme="cyan"
                marginInlineStart="-0.5"
              >
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </Flex>
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
              rel="noopener"
              size="md"
              variant="outline"
              colorScheme="blue"
              rounded="lg"
              icon={<VscGithubAlt size="20" />}
              role="link"
              aria-label={`Open ${title} source code on GitHub`}
            />
            <IconButton
              as={Link}
              href={live}
              target="_blank"
              rel="noopener"
              size="md"
              variant="outline"
              colorScheme="blue"
              rounded="lg"
              icon={<VscLinkExternal size="20" />}
              role="link"
              aria-label={`Open ${title} live project`}
            />
          </HStack>
        </Box>
      </VStack>
      <Navigator title={title} position={position}>
        <Image
          src={url}
          alt={`${title} project screenshot`}
          width={1280}
          height={720}
          style={{ width: '100%', height: 'auto' }}
        />
      </Navigator>
    </Flex>
  );
};

export default Project;
