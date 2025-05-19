import React from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Stack, 
  IconButton,
  useColorMode,
  Tooltip,
  HStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? "white" : "gray.800";

  return (
    <NavBarContainer {...props}>
      {/* Logo / Brand */}
      <Text
        as={RouterLink}
        to="/"
        fontSize={["lg", "xl", "2xl"]}
        fontWeight="bold"
        color={textColor}
      >
        My App
      </Text>
      
      {/* Desktop Navigation */}
      <HStack spacing={8} display={{ base: "none", md: "flex" }}>
        <MenuLinks colorMode={colorMode} display="flex" />
        {/* Direct implementation for desktop */}
        <Tooltip 
          label={colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          placement="bottom"
          hasArrow
        >
          <IconButton
            aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
            variant="ghost"
            color={textColor}
            size="md"
            fontSize={{ base: "lg", md: "xl" }}
            icon={colorMode === 'dark' ? <SunIcon boxSize={5} /> : <MoonIcon boxSize={5} />}
            onClick={toggleColorMode}
            _hover={{
              bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200'
            }}
            height="40px"
            width="40px"
            minW="40px"
            p={0}
            borderRadius="full"
          />
        </Tooltip>
      </HStack>
      
      {/* Mobile Navigation */}
      <Flex display={{ base: "flex", md: "none" }} align="center">
        {/* Direct implementation for mobile */}
        <IconButton
          aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
          variant="ghost"
          color={textColor}
          size="md"
          fontSize={{ base: "lg", md: "xl" }}
          icon={colorMode === 'dark' ? <SunIcon boxSize={5} /> : <MoonIcon boxSize={5} />}
          onClick={toggleColorMode}
          _hover={{
            bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200'
          }}
          height="40px"
          width="40px"
          minW="40px"
          p={0}
          borderRadius="full"
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} colorMode={colorMode} />
      </Flex>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} colorMode={colorMode} />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen, colorMode }) => {
  const color = colorMode === 'dark' ? "white" : "gray.800";
  return (
    <IconButton
      onClick={toggle}
      icon={isOpen ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={5} />}
      variant="ghost"
      aria-label="Toggle Menu"
      color={color}
      size="md"
      ml={2}
      height="40px"
      width="40px"
      minW="40px"
      p={0}
      borderRadius="full"
    />
  );
};

const MenuItem = ({ children, to = "/", colorMode, ...rest }) => {
  const location = useLocation();
  const color = colorMode === 'dark' ? "white" : "gray.800";
  const isActive = location.pathname === to;
  
  return (
    <Text
      as={RouterLink}
      to={to}
      display="block"
      color={color}
      fontWeight={isActive ? "bold" : "medium"}
      borderBottom={isActive ? "2px solid" : "none"}
      borderColor={colorMode === 'dark' ? "lime.400" : "lime.500"} // Changed from purple to lime
      px={2}
      py={1}
      _hover={{
        textDecoration: 'none',
        color: colorMode === 'dark' ? "lime.400" : "lime.600", // Changed from purple to lime
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

const MenuLinks = ({ colorMode, ...rest }) => {
  return (
    <Stack
      spacing={8}
      align="center"
      justify="flex-end"
      direction="row"
      {...rest}
    >
      <MenuItem to="/" colorMode={colorMode}>Home</MenuItem>
      <MenuItem to="/about" colorMode={colorMode}>About</MenuItem>
      <MenuItem to="/services" colorMode={colorMode}>Services</MenuItem>
      <MenuItem to="/contact" colorMode={colorMode}>Contact</MenuItem>
    </Stack>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, colorMode }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "none" }}
      flexBasis="100%"
      mt={4}
    >
      <Stack
        spacing={6}
        align="center"
        py={4}
      >
        <MenuItem to="/" colorMode={colorMode}>Home</MenuItem>
        <MenuItem to="/about" colorMode={colorMode}>About</MenuItem>
        <MenuItem to="/services" colorMode={colorMode}>Services</MenuItem>
        <MenuItem to="/contact" colorMode={colorMode}>Contact</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? "#09090b" : "white"; // Changed to match Chakra UI site
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={[4, 4, 6]}
      p={[4, 6, 8]}
      bg={bgColor}
      borderBottomWidth="1px"
      borderColor={colorMode === 'dark' ? '#27272a' : '#e4e4e7'}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Navbar;