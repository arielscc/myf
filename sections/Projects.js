import React, { useContext } from 'react';
import { Divider, Box } from '@chakra-ui/react';
import Project from '../components/Project';
import Container from '../components/Container';
import AppContext from '../context/context';

const Projects = () => {
  const { list_projects } = useContext(AppContext);
  const { title, projects, type } = list_projects;
  return (
    <Container title={title} index={5}>
      {projects.map((project, i) => (
        <Box key={project.id}>
          <Project data={project} index={i} type={type} />
          <Divider />
        </Box>
      ))}
    </Container>
  );
};

export default Projects;
