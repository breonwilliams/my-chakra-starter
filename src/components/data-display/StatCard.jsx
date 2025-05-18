// src/components/data-display/StatCard.jsx
import React from 'react';
import { Box, Flex, Stat, StatLabel, StatNumber, StatHelpText, useColorModeValue } from '@chakra-ui/react';

export const StatCard = ({ label, value, helpText, icon, ...rest }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <Box
      p={5}
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      boxShadow="sm"
      {...rest}
    >
      <Stat>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <StatLabel fontSize="sm" fontWeight="medium">{label}</StatLabel>
            <StatNumber fontSize="2xl" fontWeight="bold">{value}</StatNumber>
            {helpText && (
              <StatHelpText fontSize="xs">{helpText}</StatHelpText>
            )}
          </Box>
          {icon && (
            <Box color="purple.500" fontSize="3xl">
              {icon}
            </Box>
          )}
        </Flex>
      </Stat>
    </Box>
  );
};