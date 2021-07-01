import {
  HStack,
  Button,
  Text,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  IconButton,
  Box,
  Icon,
  useDisclosure,
  Link,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const MobileContent = ({ isOpen, inview }) => {
  const LightBlurMenuColor = inview
    ? 'rgba(255, 255, 255, .1)'
    : 'rgba(0, 0, 50, .7)';
  return (
    <Box
      display={isOpen ? 'flex' : 'none'}
      flexDir="column"
      position="fixed"
      gridRowGap="5"
      justifyContent="center"
      width="100vw"
      height="100vh"
      zIndex="sticky"
      bg={useColorModeValue(LightBlurMenuColor, 'rgba(0, 0, 0, .3)')}
      backdropFilter="blur(5px)"
      fontFamily="jet"
      transition="1s"
    >
      <Button
        variant="primary"
        textTransform="uppercase"
        w="full"
        p="5"
        rounded="none"
      >
        home
      </Button>
      <Button
        variant="primary"
        textTransform="uppercase"
        w="full"
        p="5"
        rounded="none"
      >
        about
      </Button>
      <Button
        variant="primary"
        textTransform="uppercase"
        w="full"
        p="5"
        rounded="none"
      >
        education
      </Button>
      <Button
        variant="primary"
        textTransform="uppercase"
        w="full"
        p="5"
        rounded="none"
      >
        skills
      </Button>
      <Button
        variant="primary"
        textTransform="uppercase"
        w="full"
        p="5"
        rounded="none"
      >
        experience
      </Button>
      <Button
        variant="primary"
        textTransform="uppercase"
        w="full"
        p="5"
        rounded="none"
      >
        projects
      </Button>
      <Button
        variant="primary"
        textTransform="uppercase"
        w="full"
        p="5"
        rounded="none"
      >
        contact Me
      </Button>
    </Box>
  );
};

const Header = ({ inview }) => {
  const ColorModeIcon = useColorModeValue(FaMoon, FaSun);
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const lightvalue = inview ? 'rgba(255,255,255,0.1)' : '#000032';
  const darkvalue = inview ? 'rgba(26, 32, 44, .7)' : 'gray.800';
  const padding = inview ? '4' : '2';
  const LightBlurMenuColor = inview
    ? 'rgba(255, 255, 255, .1)'
    : 'rgba(0, 0, 50, .7)';
  return (
    <>
      {/*
        <MobileContent isOpen={isOpen} inview={inview} />
      */}
      <HStack
        as="nav"
        bg={useColorModeValue(lightvalue, darkvalue)}
        justify="center"
        shadow="md"
        transitionDelay=".04s"
        w="100%"
        position="fixed"
        py={padding}
        transition=".5s"
        px="5"
        zIndex="modal"
      >
        <HStack w="5xl" justify="space-between">
          <Link
            href="/"
            fontSize="xl"
            fontWeight="800"
            fontFamily="jet"
            color="tomato"
            _hover={{ textDecoration: 'none' }}
            zIndex="modal"
          >
            ArielChura
          </Link>
          <Box
            fontFamily="jet"
            w="full"
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems="center"
            justifyContent={{ base: 'center', lg: 'flex-end' }}
            display={{ base: isOpen ? 'flex' : 'none', lg: 'inline-flex' }}
            position={{ base: 'fixed', lg: 'inherit' }}
            top="0"
            left="0"
            bottom="0"
            right="0"
            zIndex="base"
            gridGap="5"
            bg={{
              base: useColorModeValue(LightBlurMenuColor, 'rgba(0, 0, 0, .3)'),
              lg: 'none',
            }}
            backdropFilter={{ base: 'blur(5px)', lg: 'none' }}
          >
            <Link href="#home" textTransform="capitalize" variant="primary">
              home
            </Link>
            <Link href="#about" textTransform="capitalize" variant="primary">
              about
            </Link>
            <Link
              href="#education"
              variant="primary"
              textTransform="capitalize"
            >
              education
            </Link>
            <Link href="#skills" textTransform="capitalize" variant="primary">
              skills
            </Link>
            <Link
              href="#experience"
              textTransform="capitalize"
              variant="primary"
            >
              experience
            </Link>
            <Link href="#projects" textTransform="capitalize" variant="primary">
              projects
            </Link>
            <Link href="#contact" textTransform="capitalize" variant="primary">
              contact
            </Link>
          </Box>
          <HStack display={{ base: 'none', lg: 'inline-flex' }}>
            <IconButton
              as={Link}
              href="https://github.com/arielscc"
              target="_blank"
              rounded="md"
              fontSize="lg"
              icon={<FaGithub />}
              variant="primary"
              size="sm"
            />
            <IconButton
              as={Link}
              href="https://twitter.com/arielschura"
              target="_blank"
              rounded="md"
              fontSize="lg"
              icon={<FaTwitter />}
              variant="primary"
              size="sm"
            />
            <IconButton
              as={Link}
              href="https://instagram.com/arielchura"
              target="_blank"
              rounded="md"
              fontSize="lg"
              icon={<FaInstagram />}
              variant="primary"
              size="sm"
            />
          </HStack>
          <ButtonGroup variant="primary" size="sm">
            <IconButton
              rounded="md"
              icon={<ColorModeIcon />}
              onClick={toggleColorMode}
            />
            <IconButton
              rounded="md"
              icon={<Icon as={isOpen ? HiX : HiMenu} h="5" w="5" />}
              onClick={onToggle}
              display={{ base: 'inline-flex', lg: 'none' }}
            />
          </ButtonGroup>
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
