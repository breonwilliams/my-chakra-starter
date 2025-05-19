// src/components/data-display/HoverCard.jsx
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

export const HoverCard = ({ children, ...rest }) => {
  const bg = useColorModeValue('white', '#09090B');
  const borderColor = useColorModeValue('gray.200', '#27272a');

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
        borderColor: useColorModeValue('lime.500', 'lime.500'),
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};