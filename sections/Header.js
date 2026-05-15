import {
  ButtonGroup,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tooltip,
  chakra,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenu, HiTranslate, HiX } from 'react-icons/hi';
import AppContext from '../context/context';
import Logo from '../public/assets/logo.svg';

const Header = ({ inview }) => {
  const { isOpen, onToggle } = useDisclosure();
  const padding = inview ? '4' : '2';
  const { header } = useContext(AppContext);
  const { categories, language } = header;

  const router = useRouter();
  const handleChangeLanguage = value => {
    if (value !== router.locale) {
      router.push(router.pathname, router.pathname, { locale: value });
    }
  };

  return (
    <Flex
      as="nav"
      bg={useColorModeValue(
        'white',
        'linear-gradient(to right, #080617, #002c4e, #171725)'
      )}
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
      <Link href="/" aria-label="Ariel Chura - home">
        <Image src={Logo.src} boxSize="20px" alt="Ariel Chura" />
      </Link>
      <chakra.div
        id="site-navigation"
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
        gap={{ base: '10', lg: '12' }}
        bg={{
          base: useColorModeValue(
            'rgba(255, 255, 255, .96)',
            'rgba(8, 6, 23, .96)'
          ),
          lg: 'transparent',
        }}
        backdropFilter={{ base: 'blur(14px)', lg: 'none' }}
        px={{ base: '6', lg: '0' }}
      >
        <Box
          display={{ base: 'block', lg: 'none' }}
          position="absolute"
          top="5"
          left="5"
        >
          <Image src={Logo.src} boxSize="26px" alt="Ariel Chura" />
        </Box>
        <chakra.div
          display="flex"
          fontFamily="jet"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
          w="full"
          gap={{ base: '5', lg: '2', xl: '4' }}
        >
          {categories.map(category => (
            <Link
              href={`#${category}`}
              textTransform="capitalize"
              variant="primary"
              fontSize={{ base: 'xl', lg: 'sm', xl: 'md' }}
              key={category}
              onClick={() => {
                if (isOpen) onToggle();
              }}
            >
              {category}
            </Link>
          ))}
        </chakra.div>
        <HStack justify="center" spacing="3">
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
              aria-label="Open Ariel Chura GitHub profile"
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
              aria-label="Open Ariel Chura Twitter profile"
              rel="noopener"
            />
          </Tooltip>
          <Tooltip hasArrow label="Linkedin">
            <IconButton
              as={Link}
              href="https://linkedin.com/in/arielchura"
              target="_blank"
              rounded="md"
              fontSize="lg"
              icon={<FaLinkedin />}
              variant="primary"
              size="sm"
              aria-label="Open Ariel Chura LinkedIn profile"
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
            aria-label={language}
          />
          <MenuList>
            <MenuOptionGroup
              defaultValue={router.locale}
              title={language}
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
          icon={<Icon as={isOpen ? HiX : HiMenu} h="5" w="5" />}
          onClick={onToggle}
          display={{ base: 'inline-flex', lg: 'none' }}
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
