import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  useColorMode
} from '@chakra-ui/react';

function About() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? "white" : "gray.800";
  
  return (
    <Container maxW="container.xl" py={[8, 10]}>
      <VStack spacing={6} align="flex-start">
        <Heading color={textColor}>About Us</Heading>
        <Text color={textColor}>
          This is the about page of our Chakra UI starter template. Here you can share information
          about your company, team, or project.
        </Text>
      </VStack>
    </Container>
  );
}

export default About;