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
  return (
    <>
      <MobileContent isOpen={isOpen} inview={inview} />
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
        zIndex="banner"
      >
        <HStack w="5xl" justify="space-between">
          <Text fontSize="xl" fontWeight="800" fontFamily="jet" color="tomato">
            ArielChura
          </Text>
          <ButtonGroup
            variant="ghost"
            spacing="1"
            fontFamily="jet"
            size="sm"
            _focus={{
              outlineColor: 'white',
            }}
            display={{ base: 'none', lg: 'inline-flex' }}
          >
            <Button variant="primary" textTransform="capitalize">
              home
            </Button>
            <Button variant="primary" textTransform="capitalize">
              about
            </Button>
            <Button variant="primary" textTransform="capitalize">
              education
            </Button>
            <Button variant="primary" textTransform="capitalize">
              skills
            </Button>
            <Button variant="primary" textTransform="capitalize">
              experience
            </Button>
            <Button variant="primary" textTransform="capitalize">
              projects
            </Button>
            <Button variant="primary" textTransform="capitalize">
              contact Me
            </Button>
          </ButtonGroup>
          <ButtonGroup
            display={{ base: 'none', lg: 'inline-flex' }}
            justifyContent="center"
            size="sm"
            variant="primary"
          >
            <IconButton rounded="md" fontSize="lg" icon={<FaGithub />} />
            <IconButton rounded="md" fontSize="lg" icon={<FaTwitter />} />
            <IconButton rounded="md" fontSize="lg" icon={<FaInstagram />} />
          </ButtonGroup>
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
