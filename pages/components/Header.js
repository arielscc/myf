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
import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';

const Header = () => {
  const ColorModeIcon = useColorModeValue(FaMoon, FaSun);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justifyContent="center"
      bgAttachment="scroll"
      bg={useColorModeValue('rgba(255,255,255,0.2)', 'rgba(26, 32, 44, .2)')}
      shadow="md"
      transitionDelay=".08s"
      w="full"
      position="fixed"
    >
      <HStack w="7xl" justify="space-between" p="4">
        <Text fontSize="lg" fontWeight="bold" fontFamily="jet">
          ArielChura
        </Text>
        <chakra.nav display="flex" gridGap="4">
          <ButtonGroup
            variant="ghost"
            spacing="2"
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
          <ButtonGroup>
            <IconButton
              rounded="md"
              variant="primary"
              size="md"
              icon={<ColorModeIcon />}
              onClick={toggleColorMode}
            />
            <IconButton
              rounded="md"
              fontSize="2xl"
              variant="primary"
              size="md"
              icon={<FaGithub />}
            />
          </ButtonGroup>
        </chakra.nav>
      </HStack>
    </Flex>
  );
};

export default Header;
