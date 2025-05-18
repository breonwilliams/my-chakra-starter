// src/components/feedback/LoadingSpinner.jsx
import React from 'react';
import { Flex, Spinner, Text } from '@chakra-ui/react';

export const LoadingSpinner = ({ 
  text = 'Loading...', 
  size = 'xl', 
  height = '100%' 
}) => {
  return (
    <Flex 
      direction="column" 
      alignItems="center" 
      justifyContent="center" 
      h={height} 
      py={10}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple.500"
        size={size}
      />
      {text && <Text mt={4} fontSize="lg" color="gray.500">{text}</Text>}
    </Flex>
  );
};