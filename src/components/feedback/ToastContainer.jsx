// src/components/feedback/ToastContainer.jsx
import React from 'react';
import { useToast, Button, Box } from '@chakra-ui/react';

export const useCustomToast = () => {
  const toast = useToast();
  
  const showToast = ({ title, description, status = 'info' }) => {
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
      variant: 'solid',
    });
  };
  
  return { showToast };
};

// Usage example component
export const ToastExample = () => {
  const { showToast } = useCustomToast();
  
  return (
    <Box>
      <Button onClick={() => showToast({
        title: 'Success!',
        description: 'Operation completed successfully',
        status: 'success'
      })}>
        Show Success Toast
      </Button>
    </Box>
  );
};