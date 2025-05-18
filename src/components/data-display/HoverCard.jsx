// src/components/data-display/HoverCard.jsx
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

export const HoverCard = ({ children, ...rest }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <Box
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
        borderColor: useColorModeValue('purple.300', 'purple.500')
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};