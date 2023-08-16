import {
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tooltip,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import {
  FaGithub,
  FaInstagram,
  FaMoon,
  FaSun,
  FaTwitter,
} from 'react-icons/fa';

import { useRouter } from 'next/dist/client/router';
import { HiMenu, HiTranslate, HiX } from 'react-icons/hi';
import AppContext from '../context/context';
import Logo from '../public/assets/logo.svg';

const Header = ({ inview }) => {
  const ThemeIcon = useColorModeValue(FaMoon, FaSun);
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const padding = inview ? '4' : '2';
  const { header } = useContext(AppContext);
  const { categories } = header;

  const router = useRouter();
  const handleChangeLanguage = value => {
    if (value !== router.locale) {
      router.push(router.pathname, router.pathname, { locale: value });
    }
  };

  return (
    <Flex
      as="nav"
      bg={useColorModeValue('white', 'linear-gradient(to right, #0f0c29, #012a4a, #24243e)')}
      justify="space-between"
      alignItems="center"
      shadow="md"
      transitionDelay=".04s"
      w="full"
      position="fixed"
      py={padding}
      transition=".5s"
      px="5"
      zIndex="modal"
      marginInlineStart="0px"
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
    >
      <Link href="/">
        <Image src={Logo} width={20} height={20} />
      </Link>
      <chakra.div
        maxW={{ base: 'full', lg: '3xl', xl: '5xl' }}
        display={{ base: isOpen ? 'flex' : 'none', lg: 'flex' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="center"
        position={{ base: 'fixed', lg: 'absolute' }}
        top="0"
        bottom="0"
        left="0"
        right="0"
        zIndex="base"
        mx="auto"
        gridGap="12"
        bg={{
          base: useColorModeValue('rgba(255, 255, 255, .8)', 'rgba(0, 0, 0, .3)'),
          lg: 'none',
        }}
        backdropFilter={{ base: 'blur(5px)', lg: 'none' }}
      >
        <chakra.div
          display="flex"
          fontFamily="jet"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          w="full"
          gridGap={{ lg: '2', xl: '4' }}
        >
          {categories.map(category => (
            <Link
              href={`#${category}`}
              textTransform="capitalize"
              variant='primary'
              key={category}
              onClick={onToggle}
            >
              {category}
            </Link>
          ))}
        </chakra.div>
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
              aria-label="link to github"
              rel="noopener"
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
              aria-label="link to twitter"
              rel="noopener"
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
              aria-label="link to instagram"
              rel="noopener"
            />
          </Tooltip>
        </HStack>
      </chakra.div>

      <ButtonGroup variant="primary" size="sm" right="0">
        <Menu>
          <MenuButton
            rounded="md"
            as={IconButton}
            icon={<HiTranslate />}
            aria-label="select language"
          />
          <MenuList>
            <MenuOptionGroup
              defaultValue={router.locale}
              title="Language"
              type="radio"
            >
              <MenuItemOption
                value="es"
                onClick={() => handleChangeLanguage('es')}
              >
                Español
              </MenuItemOption>
              <MenuItemOption
                value="en"
                onClick={() => handleChangeLanguage('en')}
              >
                English
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <IconButton
          rounded="md"
          icon={<ThemeIcon />}
          onClick={toggleColorMode}
          aria-label="toggle color mode"
        />
        <IconButton
          rounded="md"
          icon={<Icon as={isOpen ? HiX : HiMenu} h="5" w="5" />}
          onClick={onToggle}
          display={{ base: 'inline-flex', lg: 'none' }}
          aria-label="toggle menu"
        />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
