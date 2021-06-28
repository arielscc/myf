import {
  Heading,
  Box,
  chakra,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Experience = () => {
  return (
    <Box w="5xl" mx="auto" my="20">
      <Heading fontFamily="jet" my="5">
        <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
          04.{' '}
        </chakra.span>
        Experiencia
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple mt="10">
        <AccordionItem>
          <AccordionButton>
            <Text
              as="h4"
              flex="1"
              textAlign="left"
              fontFamily="jet"
              color="blue.600"
              fontWeight="700"
            >
              Facultad de ciencias puras y naturales
            </Text>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Experience;
