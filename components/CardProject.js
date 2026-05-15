import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Tag,
  TagLabel,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';
import AppContext from '../context/context';
import CardDescription from './CardDescription';

const CardProject = ({ card }) => {
  const { list_projects: listProjects } = useContext(AppContext);
  const {
    title,
    desc,
    links: { github, live },
    tags,
  } = card;
  return (
    <VStack
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      bg={useColorModeValue('white', 'gray.700')}
      p="4"
      rounded="md"
      shadow="lg"
      align="stretch"
      minH={{ base: 'auto', md: 'xs' }}
    >
      <HStack w="full" justify="space-between" align="flex-start" spacing="3">
        <Heading
          as="h3"
          fontSize={{ base: 'xl', md: '2xl' }}
          maxW="2xs"
          noOfLines={2}
        >
          {title}
        </Heading>
        <HStack spacing="1" flexShrink={0}>
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
          {card.links.live && (
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
          )}
        </HStack>
      </HStack>
      <CardDescription desc={desc} showMoreLabel={listProjects.show_more} />
      <Spacer />
      <Flex gap="2" wrap="wrap" w="full">
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
    </VStack>
  );
};

export default CardProject;
