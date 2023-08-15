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
import { BiLibrary, BiLogoAws } from 'react-icons/bi';
import {
  DiCss3,
  DiHtml5,
  DiPhotoshop,
  DiReact,
  DiTerminal
} from 'react-icons/di';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import {
  SiApollographql,
  SiBitbucket,
  SiDatagrip,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReactquery,
  SiRedux,
  SiRuby,
  SiRubyonrails,
  SiSourcetree,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import Container from '../components/Container';
import SkillCard from '../components/SkillCard';
import AppContext from '../context/context';
import Chakra from '../icons/Chakra';


const data = {
  languages: [
    { title: 'javascript', Icon: SiJavascript },
    { title: 'typescript', Icon: SiTypescript },
    { title: 'sql', Icon: TbSql },
    { title: 'bash', Icon: SiGnubash },
    { title: 'ruby', Icon: SiRuby },
    { title: 'html', Icon: DiHtml5 },
    { title: 'css', Icon: DiCss3 },
  ],
  "libraries & frameworks": [
    { title: 'reactjs', Icon: DiReact },
    { title: 'react native', Icon: DiReact },
    { title: 'redux', Icon: SiRedux },
    { title: 'react query', Icon: SiReactquery },
    { title: 'node', Icon: SiNodedotjs },
    { title: 'nextjs', Icon: SiNextdotjs },
    { title: 'tailwindcss', Icon: SiTailwindcss },
    { title: 'chakra ui', Icon: Chakra },
    { title: 'jest', Icon: SiJest },
    { title: 'apollo', Icon: SiApollographql },
    { title: 'graphql', Icon: SiGraphql },
    { title: 'express', Icon: SiExpress },
    { title: 'laravel', Icon: SiLaravel },
    { title: 'ruby on rails', Icon: SiRubyonrails },

  ],
  tools: [
    { title: 'git', Icon: SiGit },
    { title: 'docker', Icon: SiDocker },
    { title: 'terminal', Icon: DiTerminal },
    { title: 'aws', Icon: BiLogoAws },
    { title: 'vscode', Icon: SiVisualstudio },
    { title: 'github', Icon: SiGithub },
    { title: 'bitbucket', Icon: SiBitbucket },
    { title: 'reactotron', Icon: RiReactjsLine },
    { title: 'postman', Icon: SiPostman },
    // { title: 'mixpanel', Icon: TbBrandMixpanel },
    // { title: 'datadog', Icon: SiDatadog },
    { title: 'sourcetree', Icon: SiSourcetree },
    { title: 'data grip', Icon: SiDatagrip },
  ],
  design: [
    { title: 'inkscape', Icon: SiInkscape },
    { title: 'photoshop', Icon: DiPhotoshop },
    { title: 'figma', Icon: SiFigma },
  ]
}

const Skills = () => {
  const skillsList = Object.keys(data);
  const { skills } = useContext(AppContext);
  const { title, tabs, desc } = skills;
  const icons = [FaCode, BiLibrary, FaTools, FaPaintBrush];
  const headers = tabs.map((item, i) => ({
    id: i,
    name: item,
    icon: icons[i],
  }));

  return (
    <Container title={title} index={3}>
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
              textColor={useColorModeValue('blue.600', 'gray.400')}
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
            <TabPanel p={{ base: '0', md: 'inherit' }} key={index}>
              <SimpleGrid
                gridTemplateColumns={{
                  base: 'repeat(auto-fill, minmax(70px,80px))',
                  md: 'repeat(auto-fill, 130px)',
                }}
                spacing={['1', '2']}
                justifyContent="flex-end"
              >
                {data[tab].map((item, index) => (
                  <SkillCard key={index} item={item} />
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
