import {
  Accordion,
  Box,
  Heading,
  chakra
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import CurstomAccordionItem from '../components/CustomAccordion';
import AppContext from '../context/context';

const Experience = () => {
  const { experience } = useContext(AppContext);
  const { content, title } = experience;
  return (
    <Box
      alignSelf="flex-start"
      width={{ base: 'full', lg: '50%' }}
      mt={{ base: '10', lg: '0' }}
      bg={{ base: 'none', lg: 'linear-gradient(to right, #ffffff00, #0a3455)' }}
      borderRadius="xl"
      overflow="hidden"
    >
      <Heading
        fontFamily="jet"
        textTransform="capitalize"
        fontSize={{ base: 'xl', md: '2xl' }}
        px={4}
        py={3}
      >
        <chakra.span
          color="tomato"
          fontSize={{ base: 'sm', md: 'lg' }}
          fontWeight="900"
        >
          01.{' '}
        </chakra.span>
        {title}
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple styleConfig>
        {
          content.map((item, index) => (
            <CurstomAccordionItem
              key={+index}
              experience={item}
              index={index + 1}
              size={content.length}
            />
          ))
        }
      </Accordion>
    </Box>
  );
};

export default Experience;
