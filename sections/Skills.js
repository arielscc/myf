import {
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BiLibrary } from 'react-icons/bi';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import Container from '../components/Container';
import SkillCard from '../components/SkillCard';
import AppContext from '../context/context';
import skillsData from '../data/skills';

const Skills = () => {
  const skillsList = Object.keys(skillsData);
  const { skills } = useContext(AppContext);
  const tabStyleColor = useColorModeValue('blue.600', 'gray.400')
  const { title, tabs } = skills;
  const icons = [FaCode, BiLibrary, FaTools, FaPaintBrush];
  const headers = tabs.map((item, i) => ({
    id: i,
    name: item,
    icon: icons[i],
  }));

  return (
    <Container title={title} index={1}>
      <Tabs
        w="full"
        bg={useColorModeValue('white', 'inherit')}
        orientation="vertical"
        justifyContent="space-between"
        marginBottom={{ base: '8', md: '0' }}
      >
        <TabList
          mt="2"
          dir="vetical"
          fontFamily="jet"
          w={{ base: '60%', md: 'sm' }}
          border={0}
        >
          {headers.map(({ id, name, icon: Icon }) => (
            <Tab
              fontSize={['12px', 'md']}
              textColor={tabStyleColor}
              _focus={{ outline: 'none' }}
              _selected={{ color: 'white', bg: 'tomato', opacity: '.8' }}
              _active={{ bg: 'tomato', opacity: '0.7' }}
              justifyContent="left"
              key={id}
            >
              <Icon />
              <Text ml="4" textTransform="capitalize">
                {name}
              </Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {skillsList.map((tab, index) => (
            <TabPanel p={{ base: '0', md: 'inherit' }} key={+index}>
              <SimpleGrid
                gridTemplateColumns={{
                  base: 'repeat(auto-fill, minmax(70px,80px))',
                  md: 'repeat(auto-fill, 130px)',
                }}
                spacing={['1', '2']}
                justifyContent="flex-end"
              >
                {skillsData[tab].map((item, i) => (
                  <SkillCard key={+i} item={item} />
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Skills;
