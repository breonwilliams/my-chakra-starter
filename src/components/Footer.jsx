// src/components/Footer.jsx
import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  IconButton,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // Updated color values
  const bg = useColorModeValue('gray.50', '#09090b');
  const borderColor = useColorModeValue('gray.200', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const linkColor = useColorModeValue('gray.700', 'gray.300');
  const linkHoverColor = useColorModeValue('lime.500', 'lime.500');
  
  const currentYear = new Date().getFullYear();
  
  const ListHeader = ({ children }) => {
    return (
      <Heading as="h4" fontSize="lg" fontWeight="bold" mb={2} color={linkColor}>
        {children}
      </Heading>
    );
  };
  
  const FooterLink = ({ to, children, ...rest }) => {
    return (
      <Link
        as={RouterLink}
        to={to}
        color={textColor}
        _hover={{ color: linkHoverColor }}
        {...rest}
      >
        {children}
      </Link>
    );
  };
  
  const SocialButton = ({ icon, label, href }) => {
    return (
      <IconButton
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
        color={useColorModeValue('gray.700', 'white')}
        rounded="full"
        w={8}
        h={8}
        cursor="pointer"
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition="all 0.3s ease"
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.300'),
          color: linkHoverColor,
          transform: 'translateY(-2px)'
        }}
        icon={icon}
        aria-label={label}
      />
    );
  };
  
  return (
    <Box bg={bg} color={textColor} borderTopWidth={1} borderColor={borderColor}>
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color={linkColor}>
                My App
              </Text>
              <Text mt={2} fontSize="sm">
                Building better experiences
              </Text>
            </Box>
            <Text fontSize="sm">
              © {currentYear} My Company. All rights reserved
            </Text>
            <Stack direction="row" spacing={4}>
              <SocialButton
                label="Twitter"
                href="https://twitter.com"
                icon={<FaTwitter />}
              />
              <SocialButton
                label="LinkedIn"
                href="https://linkedin.com"
                icon={<FaLinkedin />}
              />
              <SocialButton
                label="GitHub"
                href="https://github.com"
                icon={<FaGithub />}
              />
            </Stack>
          </Stack>
          
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </Stack>
          
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <FooterLink to="/help">Help Center</FooterLink>
            <FooterLink to="/safety">Safety Center</FooterLink>
            <FooterLink to="/community">Community Guidelines</FooterLink>
          </Stack>
          
          <Stack align="flex-start">
            <ListHeader>Legal</ListHeader>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Service</FooterLink>
            <FooterLink to="/cookies">Cookie Policy</FooterLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;