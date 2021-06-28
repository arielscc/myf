import React from 'react';
import { Heading, Box, chakra } from '@chakra-ui/react';
import Project from '../components/Project';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cripto Exchange',
      links: {
        github: 'https://github.com/arielscc/intercambio-btc',
        live: 'https://intercambio-btc.netlify.app/',
      },
      description:
        'Este proyecto es una Single Page App desarrollada en Vuejs v2 Con el objetivo de ver el valor de las criptomonedas, buscar mejores intercambios y presenta un grafico del estado actual de cada criptomoneda.',
      tags: ['VueJs', 'Javascript', 'Css', 'Html'],
    },
    {
      id: 2,
      title: 'Cripto Exchange',
      links: {
        github: 'https://github.com/arielscc/intercambio-btc',
        live: 'https://intercambio-btc.netlify.app/',
      },
      description:
        'Este proyecto es una Single Page App desarrollada en Vuejs v2 Con el objetivo de ver el valor de las criptomonedas, buscar mejores intercambios y presenta un grafico del estado actual de cada criptomoneda.',
      tags: ['React', 'Javascript', 'Css', 'Html'],
    },
    {
      id: 3,
      title: 'Cripto Exchange',
      links: {
        github: 'https://github.com/arielscc/intercambio-btc',
        live: 'https://intercambio-btc.netlify.app/',
      },
      description:
        'Este proyecto es una Single Page App desarrollada en Vuejs v2 Con el objetivo de ver el valor de las criptomonedas, buscar mejores intercambios y presenta un grafico del estado actual de cada criptomoneda.',
      tags: ['VueJs', 'Javascript', 'Css', 'Html'],
    },
  ];

  return (
    <Box w="5xl" mx="auto" my="20">
      <Heading fontFamily="jet">
        <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
          05.{' '}
        </chakra.span>
        Proyectos
      </Heading>
      {projects.map((project, i) => (
        <Project key={project.id} data={project} index={i} />
      ))}
    </Box>
  );
};

export default Projects;
