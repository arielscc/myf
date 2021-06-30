import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Collapse,
  Button,
  Grid,
  GridItem,
  TabList,
  Tabs,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from '@chakra-ui/react';
import { SiPlatzi, SiUdemy } from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import image from '../public/assets/platzi/img3.jpg';
import Certified from '../components/Certified';
import Container from '../components/Container';

const Education = () => {
  const data = [
    {
      id: 1,
      title: 'Cómo Conseguir Trabajo en Programación',
      url: 'https://platzi.com/p/ArielScc/curso/1227-developer/diploma/detalle/',
      image,
    },
    {
      id: 2,
      title: 'Cómo Conseguir Trabajo en Programación',
      url: 'https://platzi.com/p/ArielScc/curso/1227-developer/diploma/detalle/',
      image,
    },
    {
      id: 3,
      title: 'Cómo Conseguir Trabajo en Programación',
      url: 'https://platzi.com/p/ArielScc/curso/1227-developer/diploma/detalle/',
      image,
    },
    {
      id: 4,
      title: 'Cómo Conseguir Trabajo en Programación',
      url: 'https://platzi.com/p/ArielScc/curso/1227-developer/diploma/detalle/',
      image,
    },
    {
      id: 5,
      title: 'Cómo Conseguir Trabajo en Programación',
      url: 'https://platzi.com/p/ArielScc/curso/1227-developer/diploma/detalle/',
      image,
    },
  ];

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Container title="Education" index={2}>
      <Box spacing="10" align="start">
        <Text>
          Durante mi formacion academica logre obtener varias certificaciones.
        </Text>
        <Box
          colSpan="2"
          rowSpan="1"
          textAlign="left"
          mt="4"
          display={{ base: 'inherit', md: 'none' }}
        >
          <Heading fontSize="2xl">
            Accessibility tools for designers and developers
          </Heading>
          <Text mt="2">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Text>
          <Link
            fontWeight="700"
            fontFamily="jet"
            color="tomato"
            target="_blank"
            href="http://www.fcpn.edu.bo/"
          >
            Universidad Mayor de San Andrés
          </Link>
        </Box>
        <Tabs align="end" variant="enclosed" mt="5">
          <TabList>
            <Tab>
              <Icon
                as={FaUniversity}
                color="#2C73D2"
                w={{ base: '4', md: '6' }}
                h={{ base: '4', md: '6' }}
              />
              <Text fontSize={['xs', 'xs', 'md']} ml={{ base: '1', sm: '2' }}>
                Universidad
              </Text>
            </Tab>
            <Tab>
              <Icon
                as={SiPlatzi}
                color="#98CA3F"
                w={{ base: '4', md: '6' }}
                h={{ base: '4', md: '6' }}
              />
              <Text fontSize={['xs', 'xs', 'md']} ml={{ base: '1', sm: '2' }}>
                Platzi
              </Text>
            </Tab>
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
          </TabList>
          <TabPanels>
            <TabPanel px="0" py="4">
              <Collapse startingHeight={200} in={show}>
                <Grid
                  gridTemplateColumns={{
                    base: 'repeat(3, 1fr)',
                    md: 'repeat(5, 1fr)',
                  }}
                  gridGap={{ base: '1', lg: '4' }}
                  rowGap="5"
                >
                  <GridItem
                    colSpan="2"
                    rowSpan="1"
                    textAlign="left"
                    display={{ base: 'none', md: 'inherit' }}
                  >
                    <Heading fontSize="2xl">
                      Accessibility tools for designers and developers
                    </Heading>
                    <Text mt="2" fontSize="md">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </Text>
                    <Link
                      fontWeight="700"
                      fontFamily="jet"
                      color="tomato"
                      target="_blank"
                      href="http://www.fcpn.edu.bo/"
                    >
                      Universidad Mayor de San Andrés
                    </Link>
                  </GridItem>
                  {data.map(item => (
                    <Certified key={item.id} item={item} />
                  ))}
                </Grid>
              </Collapse>
              <Button size="sm" onClick={handleToggle}>
                Show {show ? 'Less' : 'More'}
              </Button>
            </TabPanel>
            <TabPanel px="0" py="4">
              <Collapse startingHeight={220} in={show}>
                <Grid
                  gridTemplateColumns="repeat(5, 1fr)"
                  gridGap="3"
                  rowGap="5"
                >
                  <GridItem colSpan="2" rowSpan="1" textAlign="left">
                    <Heading fontSize="2xl">
                      Accessibility tools for designers and developers
                    </Heading>
                    <Text mt="2" fontSize="md">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </Text>
                    <Link
                      fontWeight="700"
                      fontFamily="jet"
                      color="tomato"
                      target="_blank"
                      href="http://www.fcpn.edu.bo/"
                    >
                      Universidad Mayor de San Andrés
                    </Link>
                  </GridItem>
                  {data.map(item => (
                    <Certified key={item.id} item={item} />
                  ))}
                </Grid>
              </Collapse>
              <Button size="sm" onClick={handleToggle}>
                Show {show ? 'Less' : 'More'}
              </Button>
            </TabPanel>
            <TabPanel px="0" py="4">
              <Collapse startingHeight={220} in={show}>
                <Grid
                  gridTemplateColumns="repeat(5, 1fr)"
                  gridGap="3"
                  rowGap="5"
                >
                  <GridItem colSpan="2" rowSpan="1" textAlign="left">
                    <Heading fontSize="2xl">
                      Accessibility tools for designers and developers
                    </Heading>
                    <Text mt="2" fontSize="md">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </Text>
                    <Link
                      fontWeight="700"
                      fontFamily="jet"
                      color="tomato"
                      target="_blank"
                      href="http://www.fcpn.edu.bo/"
                    >
                      Universidad Mayor de San Andrés
                    </Link>
                  </GridItem>
                  {data.map(item => (
                    <Certified key={item.id} item={item} />
                  ))}
                </Grid>
              </Collapse>
              <Button onClick={handleToggle}>
                Show {show ? 'Less' : 'More'}
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Education;
