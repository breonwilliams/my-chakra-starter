// src/components/layout/Section.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';

export const Section = ({ 
  children, 
  bg, 
  py = { base: 12, md: 16 }, 
  ...rest 
}) => {
  return (
    <Box
      as="section"
      bg={bg}
      py={py}
      {...rest}
    >
      {children}
    </Box>
  );
};