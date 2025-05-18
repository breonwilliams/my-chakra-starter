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
      <Container maxW="container.xl" px={[4, 6, 8]} pb={10}>
        <Flex direction="column" py={[6, 8, 10]}>
          <VStack
            w="full"
            p={[6, 8, 10]}
            spacing={[6, 8, 10]}
            alignItems="center"
            bg={formBackground}
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading size={["xl", "2xl"]} color={textColor} textAlign="center">Chakra UI Starter</Heading>
            <Text color={textColor} fontSize={["md", "lg"]} textAlign="center">Welcome to your new Chakra UI application!</Text>
            <Button 
              onClick={toggleColorMode}
              size={["md", "lg"]}
              px={[6, 8, 10]}
              py={[5, 6]}
              colorScheme="purple"
              fontWeight="medium"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
              transition="all 0.2s"
            >
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
            
            <SimpleGrid columns={[1, null, 2]} spacing={[6, 8, 10]} w="full">
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