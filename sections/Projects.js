import { Box, Divider, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import CardProject from '../components/CardProject';
import Container from '../components/Container';
import Project from '../components/Project';
import AppContext from '../context/context';
import projectsData from '../data/projects';

const Projects = () => {
  const { locale } = useRouter();
  const { list_projects: listProjects } = useContext(AppContext);
  const { title, projects, type } = listProjects;
  const secondaryProjects = projectsData[locale] || projectsData.es;
  return (
    <Container title={title} index={4}>
      {projects.map((project, i) => (
        <Box key={project.id}>
          <Project data={project} index={i} type={type} />
          <Divider />
        </Box>
      ))}

      <SimpleGrid
        minChildWidth={{ base: 'min(100%, 250px)', md: '250px' }}
        gap={{ base: '4', md: '5' }}
        mt={{ base: '10', md: '14' }}
      >
        {secondaryProjects.map(card => (
          <CardProject card={card} key={card.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
