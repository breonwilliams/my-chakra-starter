import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorMode
} from '@chakra-ui/react';

function Contact() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? "white" : "gray.800";
  
  return (
    <Container maxW="container.xl" py={[8, 10]}>
      <VStack spacing={6} align="flex-start" mb={10}>
        <Heading color={textColor}>Contact Us</Heading>
        <Text color={textColor}>
          Get in touch with us using the form below.
        </Text>
      </VStack>
      
      <VStack 
        as="form" 
        spacing={8} 
        w="full" 
        maxW="md" 
        mx="auto"
        bg={colorMode === 'dark' ? "gray.700" : "white"}
        p={8}
        borderRadius="lg"
        boxShadow="md"
      >
        <FormControl isRequired>
          <FormLabel color={textColor}>Name</FormLabel>
          <Input type="text" bg={colorMode === 'dark' ? "gray.600" : "gray.50"} />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel color={textColor}>Email</FormLabel>
          <Input type="email" bg={colorMode === 'dark' ? "gray.600" : "gray.50"} />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel color={textColor}>Message</FormLabel>
          <Textarea bg={colorMode === 'dark' ? "gray.600" : "gray.50"} rows={5} />
        </FormControl>
        
        <Button 
          type="submit" 
          colorScheme="purple" 
          size="lg" 
          w="full"
        >
          Send Message
        </Button>
      </VStack>
    </Container>
  );
}

export default Contact;