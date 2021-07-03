import React from 'react';
import {
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
  Table,
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
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMysql,
  SiNodeDotJs,
  SiPhp,
  SiPostgresql,
  SiTailwindcss,
  SiVisualstudio,
} from 'react-icons/si';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import Chakra from '../icons/Chakra';
import SkillCard from '../components/SkillCard';
import Container from '../components/Container';

const Skills = () => {
  const data = {
    frontend: [
      { id: 1, title: 'html', Icon: DiHtml5 },
      { id: 2, title: 'css', Icon: DiCss3 },
      { id: 3, title: 'javascript', Icon: SiJavascript },
      { id: 4, title: 'reactjs', Icon: DiReact },
      { id: 5, title: 'tailwindcss', Icon: SiTailwindcss },
      { id: 8, title: 'chakraui', Icon: Chakra },
      { id: 7, title: 'jest', Icon: SiJest },
    ],
    backend: [
      { id: 1, title: 'php', Icon: SiPhp },
      { id: 2, title: 'laravel', Icon: SiLaravel },
      { id: 4, title: 'node', Icon: SiNodeDotJs },
      { id: 5, title: 'graphql', Icon: SiGraphql },
      { id: 6, title: 'apollo', Icon: SiApollographql },
    ],
    databases: [
      { id: 1, title: 'postgresql', Icon: SiPostgresql },
      { id: 2, title: 'mysql', Icon: SiMysql },
    ],
    design: [
      { id: 1, title: 'inkscape', Icon: SiInkscape },
      { id: 2, title: 'photoshop', Icon: DiPhotoshop },
      { id: 3, title: 'figma', Icon: SiFigma },
    ],
    tools: [
      { id: 1, title: 'temrinal', Icon: DiTerminal },
      { id: 2, title: 'VSCode', Icon: SiVisualstudio },
      { id: 3, title: 'git', Icon: SiGit },
      { id: 4, title: 'docker', Icon: SiDocker },
    ],
  };

  const names = Object.keys(data);
  const icons = [CgWebsite, FaCode, DiDatabase, FaPaintBrush, FaTools];
  const headers = names.map((item, i) => ({
    id: i,
    name: item,
    icon: icons[i],
  }));

  return (
    <Container title="Skills" index={3}>
      <Text mt="10" maxW="xl">
        En mis tiempos libres pude capacitarme en diferentes tecnologias,
        algunas de ellas son.
      </Text>
      <Tabs
        w="full"
        bg={useColorModeValue('white', 'inherit')}
        mt="10"
        orientation="vertical"
      >
        <TabList mt="2" dir="vetical" fontFamily="jet">
          {headers.map(({ id, name, icon: Icon }) => (
            <Tab
              fontSize={['2xs', 'md']}
              _focus={{ outline: 'none' }}
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
          {names.map(tech => (
            <TabPanel p={{ base: '0', md: 'inherit' }} key={tech}>
              <SimpleGrid
                gridTemplateColumns={{
                  base: 'repeat(auto-fill, minmax(70px,80px))',
                  md: 'repeat(auto-fill, 130px)',
                }}
                spacing={['1', '2']}
                justifyItems="center"
              >
                {data[tech].map(item => (
                  <SkillCard key={item.id} item={item} />
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
