// src/components/data-display/StatCard.jsx
import React from 'react';
import { Box, Flex, Stat, StatLabel, StatNumber, StatHelpText, useColorModeValue } from '@chakra-ui/react';

export const StatCard = ({ label, value, helpText, icon, ...rest }) => {
  const bg = useColorModeValue('white', '#09090b');
  const borderColor = useColorModeValue('#e4e4e7', '#27272a');
  const colorMode = useColorModeValue('#27272a', 'lime.500');
  
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
            <Box color={colorMode} fontSize="3xl">
              {icon}
            </Box>
          )}
        </Flex>
      </Stat>
    </Box>
  );
};