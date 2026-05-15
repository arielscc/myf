import { BiLogoAws } from 'react-icons/bi';
import {
  DiCss3,
  DiHtml5,
  DiPhotoshop,
  DiReact,
  DiTerminal,
  DiVisualstudio,
} from 'react-icons/di';
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
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import Chakra from '../icons/Chakra';

const skills = {
  languages: [
    { title: 'javascript', Icon: SiJavascript },
    { title: 'typescript', Icon: SiTypescript },
    { title: 'sql', Icon: TbSql },
    { title: 'bash', Icon: SiGnubash },
    { title: 'ruby', Icon: SiRuby },
    { title: 'html', Icon: DiHtml5 },
    { title: 'css', Icon: DiCss3 },
  ],
  'libraries & frameworks': [
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
    { title: 'vscode', Icon: DiVisualstudio },
    { title: 'github', Icon: SiGithub },
    { title: 'bitbucket', Icon: SiBitbucket },
    { title: 'reactotron', Icon: RiReactjsLine },
    { title: 'postman', Icon: SiPostman },
    { title: 'sourcetree', Icon: SiSourcetree },
    { title: 'data grip', Icon: SiDatagrip },
  ],
  design: [
    { title: 'inkscape', Icon: SiInkscape },
    { title: 'photoshop', Icon: DiPhotoshop },
    { title: 'figma', Icon: SiFigma },
  ],
};

export default skills;
