// src/components/ErrorBoundary.jsx
import React from 'react';
import { Box, Heading, Text, Button, Container, useColorModeValue } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // You could also log the error to an error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback 
        error={this.state.error} 
        resetErrorBoundary={() => {
          this.setState({ hasError: false, error: null, errorInfo: null });
          window.location.href = '/';
        }} 
      />;
    }

    return this.props.children;
  }
}

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box bg={bg} minH="100vh" py={10}>
      <Container maxW="lg">
        <Box 
          bg={cardBg} 
          p={8} 
          borderRadius="lg" 
          boxShadow="lg" 
          textAlign="center"
        >
          <Heading as="h2" size="xl" mb={4}>Something went wrong</Heading>
          <Text fontSize="md" mb={6}>
            We've encountered an unexpected error and our team has been notified.
          </Text>
          
          {process.env.NODE_ENV !== 'production' && (
            <Box 
              bg="red.50" 
              color="red.800" 
              p={4} 
              borderRadius="md" 
              mb={6}
              textAlign="left"
              fontFamily="monospace"
              fontSize="sm"
              whiteSpace="pre-wrap"
            >
              {error.toString()}
            </Box>
          )}
          
          <Button
            colorScheme="purple"
            onClick={resetErrorBoundary}
            size="lg"
          >
            Return to Home Page
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorBoundary;