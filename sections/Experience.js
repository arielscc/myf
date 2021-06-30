import React from 'react';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import Container from '../components/Container';

const Experience = () => (
  <Container title="Experience" index={4}>
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

        <AccordionPanel pb={4} textAlign={{ base: 'justify', md: 'left' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Section 2 title
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Container>
);

export default Experience;
