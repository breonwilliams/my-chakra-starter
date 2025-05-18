import React from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Stack, 
  Link,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? "white" : "gray.800";

  return (
    <NavBarContainer {...props}>
      <Text
        fontSize={["lg", "xl", "2xl"]}
        fontWeight="bold"
        color={textColor}
      >
        My App
      </Text>
      <MenuToggle toggle={toggle} isOpen={isOpen} colorMode={colorMode} />
      <MenuLinks isOpen={isOpen} colorMode={colorMode} />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen, colorMode }) => {
  const color = colorMode === 'dark' ? "white" : "gray.800";
  return (
    <Box display={{ base: "block", md: "none" }}>
      <IconButton
        onClick={toggle}
        icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
        variant="ghost"
        aria-label="Toggle Menu"
        color={color}
        size="lg"
      />
    </Box>
  );
};

const MenuItem = ({ children, to = "/", colorMode, ...rest }) => {
  const color = colorMode === 'dark' ? "white" : "gray.800";
  return (
    <Link href={to} style={{ textDecoration: 'none' }}>
      <Text display="block" color={color} fontSize="md" fontWeight="medium" px={2} py={1} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen, colorMode }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
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
  const bgColor = colorMode === 'dark' ? "gray.800" : "white";
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={[4, 4, 6]} // Reduced spacing between navbar and content
      p={[4, 6, 8]}  // Responsive padding that's smaller on mobile
      bg={bgColor}
      boxShadow="sm"  // Light shadow for depth
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Navbar;