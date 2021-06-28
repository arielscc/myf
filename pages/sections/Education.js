import React, { useState } from 'react';
import {
  Box,
  Heading,
  chakra,
  HStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Collapse,
  Button,
  SimpleGrid,
  Grid,
  GridItem,
  TabList,
  Tabs,
  TabPanels,
  Tab,
  TabPanel,
  Wrap,
} from '@chakra-ui/react';
import Image from 'next/image';
import { SiPlatzi, SiUdemy } from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import image from '../assets/platzi/img3.jpg';
import Certified from '../components/Certified';
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
    <Box w="5xl" mx="auto" my="20">
      <Heading fontFamily="jet" my="10">
        <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
          02.{' '}
        </chakra.span>
        Educación
      </Heading>
      <Box spacing="10" align="start">
        <Box>
          <Text textAlign="right">
            Durante mi formacion academica logre obtener varias certificaciones.
          </Text>
          <Tabs align="end" variant="enclosed" mt="4">
            <TabList>
              <Tab>
                <FaUniversity color="#2C73D2" size="30" />
                <Text ml="4">Universidad</Text>
              </Tab>
              <Tab>
                <SiPlatzi color="#98CA3F" size="30" />
                <Text ml="4">Platzi</Text>
              </Tab>
              <Tab>
                <SiUdemy color="#EC5252" size="30" />
                <Text ml="4">Udemy</Text>
              </Tab>
            </TabList>
            <TabPanels>
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
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
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
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
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
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
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
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
