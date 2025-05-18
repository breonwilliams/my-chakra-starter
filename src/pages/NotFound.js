import React from 'react';
import {
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorMode
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? "white" : "gray.800";
  
  return (
    <Container maxW="container.xl" py={[10, 20]}>
      <VStack spacing={6} textAlign="center">
        <Heading size="4xl" color={textColor}>404</Heading>
        <Heading size="xl" color={textColor}>Page Not Found</Heading>
        <Text color={textColor} fontSize="lg">
          The page you are looking for does not exist or has been moved.
        </Text>
        <Button 
          as={Link} 
          to="/" 
          colorScheme="purple" 
          size="lg"
        >
          Return Home
        </Button>
      </VStack>
    </Container>
  );
}

export default NotFound;