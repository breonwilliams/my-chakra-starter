// src/components/navigation/Pagination.jsx
import React from 'react';
import { 
  Box, 
  Button, 
  IconButton, 
  Text, 
  useColorModeValue,
  // eslint-disable-next-line no-unused-vars
  HStack,
  Center
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  ...rest 
}) => {
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const activeColor = useColorModeValue('purple.600', 'purple.300');
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Mobile-first pagination design - always show current page with minimal context
  const renderMobilePagination = () => {
    return (
      <Center width="100%">
        <HStack spacing={2}>
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
            size="md"
            variant="ghost"
            aria-label="Previous page"
            colorScheme="purple"
            color={activeColor}
          />
          
          {currentPage > 2 && (
            <>
              <Button 
                onClick={() => handlePageChange(1)}
                size="md"
                variant="ghost"
                colorScheme="purple"
                display={{ base: "none", sm: "flex" }}
              >
                1
              </Button>
              
              {currentPage > 3 && (
                <Text color={textColor} display={{ base: "none", sm: "flex" }}>...</Text>
              )}
            </>
          )}
          
          {currentPage > 1 && (
            <Button 
              onClick={() => handlePageChange(currentPage - 1)}
              size="md"
              variant="ghost"
              colorScheme="purple"
              display={{ base: "none", sm: "flex" }}
            >
              {currentPage - 1}
            </Button>
          )}
          
          <Button 
            size="md"
            variant="solid"
            colorScheme="purple"
            aria-current="page"
          >
            {currentPage}
          </Button>
          
          {currentPage < totalPages && (
            <Button 
              onClick={() => handlePageChange(currentPage + 1)}
              size="md"
              variant="ghost"
              colorScheme="purple"
              display={{ base: "none", sm: "flex" }}
            >
              {currentPage + 1}
            </Button>
          )}
          
          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && (
                <Text color={textColor} display={{ base: "none", sm: "flex" }}>...</Text>
              )}
              
              <Button 
                onClick={() => handlePageChange(totalPages)}
                size="md"
                variant="ghost"
                colorScheme="purple"
                display={{ base: "none", sm: "flex" }}
              >
                {totalPages}
              </Button>
            </>
          )}
          
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
            size="md"
            variant="ghost"
            aria-label="Next page"
            colorScheme="purple"
          />
        </HStack>
      </Center>
    );
  };
  
  return (
    <Box {...rest} width="100%">
      {renderMobilePagination()}
      
      <Text
        fontSize="sm" 
        color={textColor}
        textAlign="center" 
        mt={3}
      >
        Page {currentPage} of {totalPages}
      </Text>
    </Box>
  );
};