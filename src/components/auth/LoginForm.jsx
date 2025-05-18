// src/components/auth/LoginForm.jsx
import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  useColorModeValue,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  const formBackground = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <Flex align="center" justify="center">
      <Box
        p={8}
        width="100%"
        maxWidth="400px"
        borderRadius="lg"
        boxShadow="lg"
        bg={formBackground}
        borderWidth={1}
        borderColor={borderColor}
      >
        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center" mb={4}>
            Sign In to Your Account
          </Heading>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isInvalid={errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                    })}
                  />
                  <InputRightElement>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={`${showPassword ? 'Hide' : 'Show'} password`}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align="start"
                  justify="space-between"
                >
                  <Link color="purple.500" as={RouterLink} to="/forgot-password">
                    Forgot password?
                  </Link>
                </Stack>
                
                <Button
                  type="submit"
                  colorScheme="purple"
                  size="lg"
                  fontSize="md"
                  isLoading={isSubmitting}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
          
          <Stack pt={6}>
            <Text align="center">
              Don't have an account?{' '}
              <Link color="purple.500" as={RouterLink} to="/register">
                Register
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};