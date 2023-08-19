import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, List, ListIcon, ListItem, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import { GoDotFill } from 'react-icons/go'

const CurstomAccordionItem = ({ experience, index, size }) => {
  const { description, roles, title, company, date, country } = experience
  return (
    <AccordionItem isFocusable={false}>
      <AccordionButton
        bg="linear-gradient(to right, #002c4e, #7fcfff30)"
        borderBottom={index === size ? 'none' : '1px'}
        borderColor="gray.500"
        py={2}
        px={4}
        color="white"
      >
        <Text
          fontFamily="jet"
          borderColor="transparent"
          flex="1"
          textAlign="start"
          color="white"
        >
          <Flex justifyContent="space-between" mr={4} alignItems="baseline">
            <Box w="50%">
              <Text fontSize="sm">
                {title}
              </Text>
              <Text fontSize="lg" fontWeight="700" color="cyan.500" fontFamily="sans-serif">
                {company}
              </Text>
            </Box>
            <Text lineHeight={1} alignSelf="start" textAlign="right">
              <Text>
                <chakra.span fontSize="xs">{date}</chakra.span>
              </Text>

              <Text>
                <chakra.span fontSize="xs">{country}</chakra.span>
              </Text>
            </Text>
          </Flex>
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel
        px={4}
        py={4}
        textAlign={{ base: 'justify', md: 'left' }}
      >
        {description &&
          <Text color="gray.300" mb="2">
            {description}
          </Text>
        }
        <List spacing={5}>
          {roles.map(job => (
            <ListItem key={job} color="gray.300" lineHeight={1.3}>
              <ListIcon as={GoDotFill} color="cyan.500" />
              {job}
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem >
  )
}

export default CurstomAccordionItem
