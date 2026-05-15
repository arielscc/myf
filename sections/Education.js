import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { SiPlatzi } from 'react-icons/si';
import CertModal from '../components/CertModal';
import Container from '../components/Container';
import AppContext from '../context/context';
import certifications from '../data/certifications';

const Education = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const { education } = useContext(AppContext);
  const {
    title,
    desc_u: descU,
    desc_u2: descU2,
    desc_u3: descU3,
    desc_c: descC,
    tabs,
    show_more: showMore,
    show_less: showLess,
  } = education;
  return (
    <Container title={title} index={3}>
      <Flex
        gridGap={{ base: '5', lg: '10' }}
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
      >
        <Box
          textAlign="left"
          display={{ base: 'block' }}
          w={{ base: 'full', lg: '40%' }}
        >
          <Heading as="h3" fontSize={{ base: 'xl', md: 'xl' }} fontWeight="500" pb={10}>
            {descU}
          </Heading>
          <Text textAlign={{ base: 'justify', md: 'left' }}>
            {descU2}
          </Text>
          <Text textAlign={{ base: 'justify', md: 'left' }}>
            {descU3}
          </Text>
        </Box>

        <Tabs
          align="end"
          variant="enclosed"

          w={{ base: 'full', lg: '50%' }}
        >
          <Text textAlign="left">{descC}</Text>
          <TabList>
            <Tab>
              <Icon
                as={FaUniversity}
                color="#2C73D2"
                w={{ base: '4', md: '6' }}
                h={{ base: '4', md: '6' }}
                aria-hidden
              />
              <Text fontSize={['xs', 'xs', 'md']} ml={{ base: '1', sm: '2' }}>
                {tabs[0]}
              </Text>
            </Tab>
            <Tab>
              <Icon
                as={SiPlatzi}
                color="#98CA3F"
                w={{ base: '4', md: '6' }}
                h={{ base: '4', md: '6' }}
                aria-hidden
              />
              <Text fontSize={['xs', 'xs', 'md']} ml={{ base: '1', sm: '2' }}>
                {tabs[1]}
              </Text>
            </Tab>
            {/**
              <Tab>
              <Icon
                as={SiUdemy}
                color="#EC5252"
                w={{ base: '4', md: '6' }}
                h={{ base: '4', md: '6' }}
              />
              <Text fontSize={['xs', 'xs', 'md']} ml={{ base: '1', sm: '2' }}>
                Udemy
              </Text>
            </Tab>
          * */}
          </TabList>
          <TabPanels>
            <TabPanel px="0" py="4">
              <Collapse startingHeight={180} in={show}>
                <List spacing={3} textAlign="left">
                  {certifications.univ.map(item => (
                    <ListItem key={item.id} boxSizing="border-box" href="#">
                      <ListIcon as={MdCheckCircle} color="green.500" aria-hidden />
                      <CertModal item={item} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </TabPanel>
            <TabPanel px="0" py="4">
              <Collapse startingHeight={180} in={show}>
                <List spacing={3} textAlign="left">
                  {certifications.platzi.map(({ id, title: titleCert, url }) => (
                    <ListItem key={id}>
                      <ListIcon as={MdCheckCircle} color="green.500" aria-hidden />
                      <Link href={url} target="_blank" rel="noopener">
                        {titleCert}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </TabPanel>
            <Button
              variant="link"
              size="sm"
              onClick={handleToggle}
              color="tomato"
              fontFamily="jet"
              textDecoration="underline"
              _hover={{
                textDecoration: 'none',
              }}
            >
              {show ? showLess : showMore}
            </Button>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
};

export default Education;
