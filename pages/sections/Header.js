import {
  HStack,
  Button,
  Text,
  Flex,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  IconButton,
  chakra,
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
  const lightvalue = inview ? 'rgba(255,255,255,0.2)' : '#2C73D2';
  const darkvalue = inview ? 'rgba(26, 32, 44, .6)' : 'gray.800';
  return (
    <Flex
      justifyContent="center"
      bgAttachment="scroll"
      bg={useColorModeValue(lightvalue, darkvalue)}
      transition=".2s"
      shadow="md"
      transitionDelay=".08s"
      w="full"
      position="fixed"
      zIndex="banner"
    >
      <HStack w="5xl" justify="space-between" py="4">
        <Text fontSize="lg" fontWeight="bold" fontFamily="jet">
          ArielChura
        </Text>
        <chakra.nav display="flex">
          <ButtonGroup
            variant="ghost"
            spacing="1"
            fontFamily="jet"
            fontWeight="500"
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
          <ButtonGroup spacing="1">
            <IconButton
              rounded="md"
              fontSize="2xl"
              variant="primary"
              size="md"
              icon={<FaGithub />}
            />
            <IconButton
              rounded="md"
              fontSize="2xl"
              variant="primary"
              size="md"
              icon={<FaTwitter />}
            />
            <IconButton
              rounded="md"
              fontSize="2xl"
              variant="primary"
              size="md"
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
        </chakra.nav>
      </HStack>
    </Flex>
  );
};

export default Header;
