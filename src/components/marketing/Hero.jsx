// src/components/marketing/Hero.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Container,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Hero = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/register',
  secondaryCtaText,
  secondaryCtaLink,
  ...rest
}) => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');
  const subtitleColor = useColorModeValue('gray.600', 'gray.400');
  
  return (
    <Box bg={bg} {...rest}>
      <Container maxW="container.xl" py={{ base: 16, md: 24 }}>
        <Stack
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 8 }} maxW="lg">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              color={textColor}
            >
              {title}
            </Heading>
            <Text color={subtitleColor} fontSize={{ base: 'lg', md: 'xl' }}>
              {subtitle}
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                as={RouterLink}
                to={ctaLink}
                rounded="md"
                size="lg"
                fontWeight="bold"
                colorScheme="purple"
                px={6}
              >
                {ctaText}
              </Button>
              {secondaryCtaText && (
                <Button
                  as={RouterLink}
                  to={secondaryCtaLink || '#'}
                  rounded="md"
                  size="lg"
                  fontWeight="bold"
                  variant="outline"
                  colorScheme="purple"
                  px={6}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify="center"
            align="center"
            position="relative"
            w="full"
          >
            {/* Optional: Add an image or illustration here */}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};