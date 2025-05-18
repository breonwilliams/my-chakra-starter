// src/components/forms/SelectField.jsx
import React from 'react';
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react';

export const SelectField = ({
  label,
  name,
  register,
  errors,
  options = [],
  placeholder = 'Select option',
  helperText,
  isRequired = false,
  ...rest
}) => {
  return (
    <FormControl isInvalid={errors[name]} isRequired={isRequired} mb={4}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <Select
        id={name}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      
      {helperText && !errors[name] && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      
      {errors[name] && (
        <FormErrorMessage>{errors[name].message}</FormErrorMessage>
      )}
    </FormControl>
  );
};