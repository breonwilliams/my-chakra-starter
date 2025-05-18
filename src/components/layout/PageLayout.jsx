// src/components/layout/PageLayout.jsx
import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from '../Navbar';
import Footer from '../Footer';

export const PageLayout = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box as="main" flex="1" py={8}>
        <Container maxW="container.xl">
          <Outlet /> {/* Use Outlet instead of children */}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};