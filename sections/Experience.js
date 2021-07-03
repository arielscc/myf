import React from 'react';
import {
  chakra,
  List,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import Container from '../components/Container';
import { MdCheckCircle } from 'react-icons/md';

const Experience = () => (
  <Container title="Experience" index={4}>
    <Accordion defaultIndex={[0]} allowMultiple mt="10">
      <AccordionItem>
        <AccordionButton>
          <Text
            as="h4"
            flex="1"
            textAlign="left"
            fontSize="lg"
            fontFamily="jet"
            color="blue.600"
            fontWeight="700"
          >
            Facultad de Ciencias Puras y Naturales{' '}
            <chakra.span fontSize="xs">Jan/2018 - Dec/2019</chakra.span>
          </Text>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4} textAlign={{ base: 'justify', md: 'left' }}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Encargado del soporte de sistemas de administración facultativa
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Encargado de soporte de redes y comunicación de la facultad
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Diseño de interfaces de usuario y Diseño grafico
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Administración de base de datos
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Text
            as="h4"
            flex="1"
            textAlign="left"
            fontSize="lg"
            fontFamily="jet"
            color="blue.600"
            fontWeight="700"
          >
            Fam - Bolivia{' '}
            <chakra.span fontSize="xs">Oct/2018 - Jun/2019</chakra.span>
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Encargado de la Administración de redes y sistemas
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Container>
);

export default Experience;
