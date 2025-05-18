import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Card({ title, children, colorMode }) {
  const bgColor = colorMode === 'dark' ? "gray.800" : "white";
  const borderColor = colorMode === 'dark' ? "gray.700" : "gray.200";
  const textColor = colorMode === 'dark' ? "white" : "gray.800";

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg={bgColor}
      borderColor={borderColor}
    >
      <Heading fontSize="xl" color={textColor}>{title}</Heading>
      <Text mt={4} color={textColor}>{children}</Text>
    </Box>
  );
}

export default Card;