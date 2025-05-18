import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, useColorMode } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const { colorMode } = useColorMode();
  
  return (
    <BrowserRouter>
      <Box minH="100vh" bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
        <Navbar />
        <Box as="main" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;