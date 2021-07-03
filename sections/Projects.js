import React from 'react';
import { Divider, Box } from '@chakra-ui/react';
import Project from '../components/Project';
import Container from '../components/Container';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Exchange BTC',
      links: {
        github: 'https://github.com/arielscc/intercambio-btc',
        live: 'https://intercambio-btc.netlify.app/',
      },
      url: '/assets/projects/intercambio-btc.jpg',
      description:
        'Este proyecto es una Single Page App desarrollada en Vuejs v2 Con el objetivo de ver el valor de las criptomonedas, buscar mejores intercambios y presenta un grafico del estado actual de cada criptomoneda.',
      tags: ['VueJs', 'Javascript', 'TailwindCss'],
    },
    {
      id: 2,
      title: 'Tienda Online',
      links: {
        github: 'https://github.com/arielscc/TiendaOnline',
        live: 'https://tiendaenlinea-6d2f5.firebaseapp.com/',
      },
      url: '/assets/projects/tienda_online.jpg',
      description:
        'Este proyecto es una Single Page App y tiene como objetivo la venta de souvenirs, este proyecto esta implementado con Reactjs y tambien implementa una pasarela de pagos y localizacion via Google Maps',
      tags: ['Reactjs', 'Javascript', 'Firebase', 'ChakraUi'],
    },
    {
      id: 3,
      title: 'Video Anime',
      links: {
        github: 'https://github.com/arielscc/videoAnime',
        live: 'https://video-anime.netlify.app/',
      },
      url: '/assets/projects/video-anime.jpg',
      description:
        'Este proyecto es un sitio para ver videos de anime, filtrarlos por reelevancia, popularidad y calificación. Este sitio web implementa de forma nativa Server-Side-Rendering, y es una PWA',
      tags: ['Javascript', 'Kitsu.io', 'Css', 'Html'],
    },
  ];

  return (
    <Container title="Projects" index={5}>
      {projects.map((project, i) => (
        <Box key={project.id}>
          <Project data={project} index={i} />
          <Divider />
        </Box>
      ))}
    </Container>
  );
};

export default Projects;
