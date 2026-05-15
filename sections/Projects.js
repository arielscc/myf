import { Box, Divider, SimpleGrid } from '@chakra-ui/react';
import React, { useContext } from 'react';
import CardProject from '../components/CardProject';
import Container from '../components/Container';
import Project from '../components/Project';
import AppContext from '../context/context';
import projectsData from '../data/projects';

const Projects = () => {
  const { list_projects: listProjects } = useContext(AppContext);
  const { title, projects, type } = listProjects;
  return (
    <Container title={title} index={3}>
      {projects.map((project, i) => (
        <Box key={project.id}>
          <Project data={project} index={i} type={type} />
          <Divider />
        </Box>
      ))}

      <SimpleGrid minChildWidth="250px" gap="5" mt="14">
        {projectsData.map(card => (
          <CardProject card={card} key={card.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
