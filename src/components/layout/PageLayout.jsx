// src/components/layout/PageLayout.jsx
import React from 'react';
import { Box, Container, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export const PageLayout = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column"
      bg={colorMode === 'dark' ? '#09090b' : 'white'} // Updated to match Chakra UI site
    >
      <Navbar />
      <Box as="main" flex="1" py={8}>
        <Container maxW="container.xl">
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};