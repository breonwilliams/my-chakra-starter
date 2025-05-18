import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
  useColorMode
} from '@chakra-ui/react';

function Services() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? "white" : "gray.800";
  const cardBg = colorMode === 'dark' ? "gray.700" : "white";
  
  return (
    <Container maxW="container.xl" py={[8, 10]}>
      <VStack spacing={6} align="flex-start" mb={10}>
        <Heading color={textColor}>Our Services</Heading>
        <Text color={textColor}>
          Explore the services we offer to help you achieve your goals.
        </Text>
      </VStack>
      
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {['Service 1', 'Service 2', 'Service 3'].map((service, i) => (
          <Box 
            key={i}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg={cardBg}
          >
            <Heading fontSize="xl" color={textColor}>{service}</Heading>
            <Text mt={4} color={textColor}>
              Description of {service.toLowerCase()} and how it can benefit users.
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Services;