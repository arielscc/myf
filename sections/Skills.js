import React from 'react';
import {
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Wrap,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  DiCss3,
  DiHtml5,
  DiPhotoshop,
  DiReact,
  DiTerminal,
  DiDatabase,
} from 'react-icons/di';
import {
  SiApollographql,
  SiFigma,
  SiGit,
  SiGnuemacs,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextDotJs,
  SiNodeDotJs,
  SiPhp,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiVisualstudio,
} from 'react-icons/si';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import Chakra from '../icons/Chakra';
import SkillCard from '../components/SkillCard';
import Container from '../components/Container';

const Skills = () => {
  const frontend = [
    { id: 1, title: 'html', Icon: DiHtml5 },
    { id: 2, title: 'css', Icon: DiCss3 },
    { id: 3, title: 'javascript', Icon: SiJavascript },
    { id: 4, title: 'tailwindcss', Icon: SiTailwindcss },
    { id: 5, title: 'reactjs', Icon: DiReact },
    { id: 6, title: 'redux', Icon: SiRedux },
    { id: 7, title: 'jest', Icon: SiJest },
    { id: 8, title: 'chakraui', Icon: Chakra },
  ];
  const backend = [
    { id: 1, title: 'php', Icon: SiPhp },
    { id: 2, title: 'laravel', Icon: SiLaravel },
    { id: 3, title: 'nextjs', Icon: SiNextDotJs },
    { id: 4, title: 'node', Icon: SiNodeDotJs },
    { id: 5, title: 'graphql', Icon: SiGraphql },
    { id: 6, title: 'apollo', Icon: SiApollographql },
  ];
  const databases = [
    { id: 1, title: 'postgresql', Icon: SiPostgresql },
    { id: 2, title: 'mysql', Icon: SiMysql },
    { id: 3, title: 'mongo', Icon: SiMongodb },
  ];
  const design = [
    { id: 1, title: 'inkscape', Icon: SiInkscape },
    { id: 2, title: 'photoshop', Icon: DiPhotoshop },
    { id: 3, title: 'figma', Icon: SiFigma },
  ];
  const tools = [
    { id: 1, title: 'temrinal', Icon: DiTerminal },
    { id: 2, title: 'VSCode', Icon: SiVisualstudio },
    { id: 3, title: 'git', Icon: SiGit },
    { id: 4, title: 'emacs', Icon: SiGnuemacs },
  ];
  return (
    <Container title="Skills" index={3}>
      <Text>
        En mi formación logre aprender varias diferentes tecnologias y
        herramientas para el desarrollo de software, algunas de estas son
      </Text>
      <Tabs
        w="full"
        bg={useColorModeValue('white', 'gray.700')}
        mt="10"
        orientation="vertical"
      >
        <TabList mt="2" dir="vetical" fontFamily="jet">
          <Tab
            fontSize={['2xs', 'md']}
            _focus={{ outline: 'none' }}
            justifyContent="left"
          >
            <CgWebsite />
            <Text ml="4">Front-end</Text>
          </Tab>
          <Tab
            fontSize={['2xs', 'md']}
            _focus={{ outline: 'none' }}
            justifyContent="left"
          >
            <FaCode />
            <Text ml="4">Back-end</Text>
          </Tab>
          <Tab
            fontSize={['2xs', 'md']}
            _focus={{ outline: 'none' }}
            justifyContent="left"
            pr="0"
          >
            <DiDatabase />
            <Text ml="4">Base de datos</Text>
          </Tab>
          <Tab
            fontSize={['2xs', 'md']}
            _focus={{ outline: 'none' }}
            justifyContent="left"
          >
            <FaPaintBrush />
            <Text ml="4">Diseño</Text>
          </Tab>
          <Tab
            fontSize={['2xs', 'md']}
            _focus={{ outline: 'none' }}
            justifyContent="left"
          >
            <FaTools />
            <Text ml="4">Herramientas</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={{ base: '0', md: 'inherit' }}>
            <SimpleGrid
              minChildWidth={['70px', '110px']}
              spacing={['1', '2']}
              justifyContent="center"
              alignContent="center"
            >
              {frontend.map(item => (
                <SkillCard key={item.id} item={item} />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <Wrap spacing="4" mx="auto">
              {backend.map(item => (
                <SkillCard key={item.id} item={item} />
              ))}
            </Wrap>
          </TabPanel>
          <TabPanel>
            <Wrap spacing="4">
              {databases.map(item => (
                <SkillCard key={item.id} item={item} />
              ))}
            </Wrap>
          </TabPanel>
          <TabPanel>
            <Wrap spacing="4">
              {design.map(item => (
                <SkillCard key={item.id} item={item} />
              ))}
            </Wrap>
          </TabPanel>
          <TabPanel>
            <Wrap spacing="4">
              {tools.map(item => (
                <SkillCard key={item.id} item={item} />
              ))}
            </Wrap>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Skills;
