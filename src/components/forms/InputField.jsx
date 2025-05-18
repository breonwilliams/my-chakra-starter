// src/components/forms/InputField.jsx
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';

export const InputField = ({
  label,
  name,
  register,
  errors,
  type = 'text',
  placeholder,
  helperText,
  isRequired = false,
  leftElement,
  rightElement,
  ...rest
}) => {
  return (
    <FormControl isInvalid={errors[name]} isRequired={isRequired} mb={4}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <InputGroup>
        {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
        
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
        
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
      </InputGroup>
      
      {helperText && !errors[name] && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      
      {errors[name] && (
        <FormErrorMessage>{errors[name].message}</FormErrorMessage>
      )}
    </FormControl>
  );
};