import {
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { BiLibrary } from 'react-icons/bi';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import Container from '../components/Container';
import SkillCard from '../components/SkillCard';
import AppContext from '../context/context';
import skillsData from '../data/skills';

const Skills = () => {
  const skillsList = Object.keys(skillsData);
  const { skills } = useContext(AppContext);
  const tabStyleColor = useColorModeValue('blue.600', 'gray.400');
  const { title, tabs } = skills;
  const icons = [FaCode, BiLibrary, FaTools, FaPaintBrush];
  const headers = tabs.map((item, i) => ({
    id: i,
    name: item,
    icon: icons[i],
  }));

  return (
    <Container title={title} index={2}>
      <Tabs
        w="full"
        bg={useColorModeValue('white', 'inherit')}
        orientation="vertical"
        justifyContent="space-between"
        marginBottom={{ base: '8', md: '0' }}
      >
        <TabList
          mt="2"
          mr="2"
          dir="vetical"
          fontFamily="jet"
          w={{ base: '60%', md: 'sm' }}
          border={0}
          overflowX={{ base: 'auto', md: 'visible' }}
          pb={{ base: '3', md: '0' }}
          sx={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {headers.map(({ id, name, icon: Icon }) => (
            <Tab
              flex={{ base: '0 0 auto', md: 'initial' }}
              fontSize={['12px', 'md']}
              textColor={tabStyleColor}
              _focus={{ outline: 'none' }}
              _selected={{
                color: 'white',
                bg: 'tomato',
                opacity: '.9',
                shadow: 'md',
              }}
              _active={{ bg: 'tomato', opacity: '0.8' }}
              justifyContent={{ base: 'center', md: 'left' }}
              minW={{ base: 'max-content', md: 'auto' }}
              rounded="lg"
              key={id}
            >
              <Icon />
              <Text ml={{ base: '2', md: '4' }} textTransform="capitalize">
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
                  base: 'repeat(auto-fit, minmax(82px, 1fr))',
                  sm: 'repeat(auto-fit, minmax(96px, 1fr))',
                  md: 'repeat(auto-fill, 130px)',
                }}
                spacing={{ base: "1", md: '2' }}
                justifyContent={{ base: 'center', md: 'flex-end' }}
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
