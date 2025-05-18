import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Card({ title, children, colorMode }) {
  const bgColor = colorMode === 'dark' ? "gray.800" : "white";
  const borderColor = colorMode === 'dark' ? "gray.700" : "gray.200";
  const textColor = colorMode === 'dark' ? "white" : "gray.800";

  return (
    <Box
      p={[5, 6]}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      bg={bgColor}
      borderColor={borderColor}
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
    >
      <Heading fontSize={["lg", "xl"]} color={textColor} mb={4}>{title}</Heading>
      <Text color={textColor} fontSize={["sm", "md"]}>{children}</Text>
    </Box>
  );
}

export default Card;