import React from 'react';
import { Divider } from '@chakra-ui/react';
import Project from '../components/Project';
import Container from '../components/Container';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cripto Exchange s Exchange asdasdasdss',
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
    <Container title="Projects" index={5}>
      {projects.map((project, i) => (
        <>
          <Project key={project.id} data={project} index={i} />
          <Divider />
        </>
      ))}
    </Container>
  );
};

export default Projects;
