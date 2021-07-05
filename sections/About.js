import { Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Image from 'next/image';
import profile from '../public/assets/profile.svg';
import Container from '../components/Container';
import AppContext from '../context/context';

const About = () => {
  const { about } = useContext(AppContext);
  const { description, title } = about;
  return (
    <Container title={title} index={1}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        spacing="5"
        justifyContent="space-between"
        alignItems="center"
        gridGap="5"
      >
        <Image src={profile} alt="profilees" width={300} height={300} />
        <Text textAlign="justify" w={{ base: 'full', lg: 'lg' }}>
          {description}
        </Text>
      </Flex>
    </Container>
  );
};

export default About;
