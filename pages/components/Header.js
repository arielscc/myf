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
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const ColorModeIcon = useColorModeValue(FaMoon, FaSun);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justifyContent="center"
      bg={useColorModeValue('gray.100', 'gray.800')}
      shadow="lg"
      borderBottom="4px"
      borderColor={useColorModeValue('gray.300', 'gray.600')}
    >
      <HStack w="7xl" justify="space-between" p="4">
        <Text fontSize="lg" fontWeight="bold">
          ArielChura
        </Text>
        <chakra.nav display="flex" gridGap="4">
          <ButtonGroup variant="ghost" spacing="2" colorScheme="teal">
            <Button textTransform="capitalize">home</Button>
            <Button textTransform="capitalize">about</Button>
            <Button textTransform="capitalize">education</Button>
            <Button textTransform="capitalize">skills</Button>
            <Button textTransform="capitalize">experience</Button>
            <Button textTransform="capitalize">projects</Button>
            <Button textTransform="capitalize">contact Me</Button>
          </ButtonGroup>
          <IconButton
            rounded="md"
            variant="ghost"
            colorScheme={useColorModeValue('gray', 'yellow')}
            icon={<ColorModeIcon />}
            onClick={toggleColorMode}
          />
        </chakra.nav>
      </HStack>
    </Flex>
  );
};

export default Header;
