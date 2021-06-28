import React from 'react';
import {
  Box,
  Text,
  Heading,
  chakra,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Wrap,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react';
import {
  DiCss3,
  DiHtml5,
  DiPhotoshop,
  DiReact,
  DiTerminal,
  DiCode,
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
import { Chakra } from '../assets/icons/Chakra';
import SkillCard from '../components/SkillCard';
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
    <Box w="5xl" mx="auto" my="20">
      <Heading fontFamily="jet" my="10">
        <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
          03.{' '}
        </chakra.span>
        Habilidades
      </Heading>
      <Text>
        En mi formación logre aprender varias diferentes tecnologias y
        herramientas para el desarrollo de software, algunas de estas son
      </Text>
      <Tabs w="full" bg={useColorModeValue('white', 'gray.700')} mt="10">
        <TabList pt="2">
          <Tab fontFamily="jet" _focus={{ outline: 'none' }}>
            <CgWebsite />
            <Text ml="4">Front-end</Text>
          </Tab>
          <Tab fontFamily="jet" _focus={{ outline: 'none' }}>
            <FaCode />
            <Text ml="4">Back-end</Text>
          </Tab>
          <Tab fontFamily="jet" _focus={{ outline: 'none' }}>
            <DiDatabase />
            <Text ml="4">Base de datos</Text>
          </Tab>
          <Tab fontFamily="jet" _focus={{ outline: 'none' }}>
            <FaPaintBrush />
            <Text ml="4">Diseño</Text>
          </Tab>
          <Tab fontFamily="jet" _focus={{ outline: 'none' }}>
            <FaTools />
            <Text ml="4">Herramientas</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Wrap spacing="4" mx="auto">
              {frontend.map(item => (
                <SkillCard key={item.id} item={item} />
              ))}
            </Wrap>
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
    </Box>
  );
};

export default Skills;
