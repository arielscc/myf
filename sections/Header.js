import React, { useContext } from 'react';
import {
  HStack,
  chakra,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
  IconButton,
  Icon,
  useDisclosure,
  Link,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Tooltip,
  Spacer,
} from '@chakra-ui/react';
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { HiMenu, HiX, HiTranslate } from 'react-icons/hi';
import { useRouter } from 'next/dist/client/router';
import AppContext from '../context/context';

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

  const { header } = useContext(AppContext);
  const { categories } = header;

  const router = useRouter();
  const handleChangeLanguage = value => {
    if (value !== router.locale) {
      router.push(router.pathname, router.pathname, { locale: value });
    }
  };
  return (
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
      marginInlineStart="0px"
    >
      <Flex w="5xl">
        <Link
          href="/"
          fontSize="xl"
          fontWeight="800"
          fontFamily="jet"
          color="tomato"
          _hover={{ textDecoration: 'none' }}
          zIndex="modal"
          mr="5"
        >
          ArielChura
        </Link>
        <chakra.div
          fontFamily="jet"
          w="full"
          display={{ base: isOpen ? 'flex' : 'none', lg: 'flex' }}
          marginInlineStart="-0.5"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent="center"
          position={{ base: 'fixed', lg: 'inherit' }}
          backdropFilter={{ base: 'blur(5px)', lg: 'none' }}
          top="0"
          left="0"
          bottom="0"
          right="0"
          zIndex="base"
          gridGap="1"
          bg={{
            base: useColorModeValue(LightBlurMenuColor, 'rgba(0, 0, 0, .3)'),
            lg: 'none',
          }}
        >
          {categories.map(category => (
            <Link
              href={`#${category}`}
              textTransform="capitalize"
              variant="primary"
              key={category}
              onClick={onToggle}
            >
              {category}
            </Link>
          ))}
          <Spacer display={{ base: 'none', xl: 'initial' }} />
          <HStack justify="flex-start">
            <Tooltip hasArrow label="Github">
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
            </Tooltip>
            <Tooltip hasArrow label="Twitter">
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
            </Tooltip>
            <Tooltip hasArrow label="Instagram">
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
            </Tooltip>
          </HStack>
        </chakra.div>
      </Flex>
      <ButtonGroup
        variant="primary"
        size="sm"
        position="absolute"
        right="0"
        pr="5"
      >
        <Menu>
          <Tooltip hasArrow>
            <MenuButton
              rounded="md"
              as={IconButton}
              aria-label="Languages"
              icon={<HiTranslate />}
            />
          </Tooltip>
          <MenuList>
            <MenuItem onClick={() => handleChangeLanguage('es')}>ES</MenuItem>
            <MenuItem onClick={() => handleChangeLanguage('en')}>EN</MenuItem>
          </MenuList>
        </Menu>
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
  );
};

export default Header;
