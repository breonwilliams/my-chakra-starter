
// src/components/navigation/Breadcrumbs.jsx
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export const Breadcrumbs = ({ items = [] }) => {
  // Update color values to use actual colors instead of "ghost"
  const color = useColorModeValue('#09090b', 'white');
  const activeColor = useColorModeValue('#09090b', 'white');
  
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color={color} />}
      mb={0}
      fontSize="sm"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <BreadcrumbItem key={`breadcrumb-${item.label}-${index}`} isCurrentPage={isLast}>
            <BreadcrumbLink
              as={!isLast ? RouterLink : undefined}
              to={!isLast ? item.path : undefined}
              color={isLast ? activeColor : color}
              fontWeight={isLast ? "semibold" : "normal"}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};