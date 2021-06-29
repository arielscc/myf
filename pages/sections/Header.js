import {
  HStack,
  Button,
  Text,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Header = ({ inview }) => {
  const ColorModeIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode } = useColorMode();
  const lightvalue = inview ? 'rgba(255,255,255,0.1)' : '#000032';
  const darkvalue = inview ? 'rgba(26, 32, 44, .7)' : 'gray.800';
  const padding = inview ? '4' : '1';
  return (
    <HStack
      as="nav"
      bg={useColorModeValue(lightvalue, darkvalue)}
      justify="center"
      shadow="md"
      transitionDelay=".04s"
      w="100%"
      position="fixed"
      zIndex="banner"
      py={padding}
      transition=".5s"
    >
      <HStack w="5xl" justify="space-between">
        <Text fontSize="xl" fontWeight="800" fontFamily="jet" color="tomato">
          ArielChura
        </Text>
        <ButtonGroup
          variant="ghost"
          spacing="1"
          fontFamily="jet"
          fontWeight="500"
          size="sm"
          _focus={{
            outlineColor: 'white',
          }}
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
        <ButtonGroup>
          <IconButton
            rounded="md"
            fontSize="lg"
            variant="primary"
            size="sm"
            icon={<FaGithub />}
          />
          <IconButton
            rounded="md"
            fontSize="lg"
            variant="primary"
            size="sm"
            icon={<FaTwitter />}
          />
          <IconButton
            rounded="md"
            fontSize="lg"
            variant="primary"
            size="sm"
            icon={<FaInstagram />}
          />
        </ButtonGroup>
        <IconButton
          rounded="md"
          variant="primary"
          size="md"
          icon={<ColorModeIcon />}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
