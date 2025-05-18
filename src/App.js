import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorMode
} from '@chakra-ui/react';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = colorMode === 'dark' ? "gray.700" : "gray.100";
  const textColor = colorMode === 'dark' ? "white" : "gray.800";
  
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" p={0}>
        <Flex h="90vh" py={5}>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="center"
            bg={formBackground}
          >
            <Heading size="2xl" color={textColor}>Chakra UI Starter</Heading>
            <Text color={textColor}>Welcome to your new Chakra UI application!</Text>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
            
            <SimpleGrid columns={[1, null, 2]} spacing={10} w="full">
              <Card title="Features" colorMode={colorMode}>
                Chakra UI provides accessible, reusable, and composable React components
                that make it super easy to create websites and apps.
              </Card>
              <Card title="Getting Started" colorMode={colorMode}>
                This starter template includes everything you need to get started with
                React and Chakra UI.
              </Card>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default App;