// src/pages/Home.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Stack,
  useColorMode
} from '@chakra-ui/react';
import { FiUsers, FiTrendingUp, FiDollarSign, FiActivity } from 'react-icons/fi';
import { Section } from '../components/layout';
import { HoverCard, StatCard } from '../components/data-display';
import { LoadingSpinner } from '../components/feedback/LoadingSpinner';
import { useCustomToast } from '../components/feedback/ToastContainer';
import { Breadcrumbs, Pagination } from '../components/navigation';
import { InputField, SelectField } from '../components/forms';
import { useForm } from 'react-hook-form';

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = colorMode === 'dark' ? "gray.700" : "gray.100";
  const textColor = colorMode === 'dark' ? "white" : "gray.800";
  const { showToast } = useCustomToast();
  const { register, formState: { errors } } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const showSuccessToast = () => {
    showToast({
      title: 'Component Clicked!',
      description: 'This toast shows how the notification system works',
      status: 'success'
    });
  };

  const toggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Container maxW="container.xl" px={[4, 6, 8]} pb={10}>
      <VStack spacing={10} align="stretch" py={[6, 8, 10]}>
        {/* Header Section */}
        <VStack
          w="full"
          p={[6, 8, 10]}
          spacing={[6, 8, 10]}
          alignItems="center"
          bg={formBackground}
          borderRadius="lg"
        >
          <Heading size={["xl", "2xl"]} color={textColor} textAlign="center">Chakra UI Component Library</Heading>
          <Text color={textColor} fontSize={["md", "lg"]} textAlign="center">
            A showcase of all components available in this starter template
          </Text>
          <Button
            onClick={toggleColorMode}
            size={["md", "lg"]}
            px={[6, 8, 10]}
            py={[5, 6]}
            colorScheme="purple"
            fontWeight="medium"
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </VStack>

        {/* Component Showcase */}
        <VStack spacing={12} align="stretch">
          {/* Navigation Components */}
          <Box>
            <Heading as="h2" size="xl" mb={6} pb={2} borderBottomWidth="2px" borderColor="purple.500">
              Navigation Components
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Breadcrumbs
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Breadcrumbs
                  items={[
                    { label: 'Home', path: '/' },
                    { label: 'Components', path: '#' },
                    { label: 'Navigation', path: '#' }
                  ]}
                />
              </Box>
            </Box>
          </Box>

          {/* Data Display Components */}
          <Box>
            <Heading as="h2" size="xl" mb={6} pb={2} borderBottomWidth="2px" borderColor="purple.500">
              Data Display Components
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Hover Card
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                <HoverCard p={5}>
                  <Heading size="md" mb={2}>Feature 1</Heading>
                  <Text>Hover over this card to see the effect</Text>
                </HoverCard>
                <HoverCard p={5}>
                  <Heading size="md" mb={2}>Feature 2</Heading>
                  <Text>This card has a nice hover animation</Text>
                </HoverCard>
                <HoverCard p={5}>
                  <Heading size="md" mb={2}>Feature 3</Heading>
                  <Text>Great for highlighting important content</Text>
                </HoverCard>
              </SimpleGrid>
            </Box>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Stat Cards
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
                <StatCard
                  label="Total Users"
                  value="1,284"
                  helpText="+12% from last month"
                  icon={<FiUsers />}
                />
                <StatCard
                  label="Conversions"
                  value="24.5%"
                  helpText="+3.2% from last month"
                  icon={<FiTrendingUp />}
                />
                <StatCard
                  label="Revenue"
                  value="$12,485"
                  helpText="+8% from last month"
                  icon={<FiDollarSign />}
                />
                <StatCard
                  label="Active Sessions"
                  value="432"
                  helpText="Last 24 hours"
                  icon={<FiActivity />}
                />
              </SimpleGrid>
            </Box>
          </Box>

          {/* Feedback Components */}
          <Box>
            <Heading as="h2" size="xl" mb={6} pb={2} borderBottomWidth="2px" borderColor="purple.500">
              Feedback Components
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Toast Notifications
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Button onClick={showSuccessToast} colorScheme="purple">
                  Show Toast Notification
                </Button>
              </Box>
            </Box>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Loading Spinner
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
                {isLoading ? (
                  <LoadingSpinner text="Loading data..." height="200px" />
                ) : (
                  <Button onClick={toggleLoading} colorScheme="purple">
                    Show Loading Spinner
                  </Button>
                )}
              </Box>
            </Box>
          </Box>

          {/* Form Components */}
          <Box>
            <Heading as="h2" size="xl" mb={6} pb={2} borderBottomWidth="2px" borderColor="purple.500">
              Form Components
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Input Field
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4} maxW="md">
                <InputField
                  label="Username"
                  name="username"
                  register={register}
                  errors={errors}
                  placeholder="Enter your username"
                  helperText="Must be at least 3 characters"
                />
              </Box>
            </Box>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Select Field
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4} maxW="md">
                <SelectField
                  label="Country"
                  name="country"
                  register={register}
                  errors={errors}
                  options={[
                    { value: 'us', label: 'United States' },
                    { value: 'ca', label: 'Canada' },
                    { value: 'uk', label: 'United Kingdom' },
                    { value: 'au', label: 'Australia' }
                  ]}
                />
              </Box>
            </Box>
          </Box>

          {/* Marketing Components */}
          <Box>
            <Heading as="h2" size="xl" mb={6} pb={2} borderBottomWidth="2px" borderColor="purple.500">
              Marketing Components
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Hero Section
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Section bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} py={8} borderRadius="md">
                  <VStack spacing={4} textAlign="center" p={6}>
                    <Heading size="2xl">Build Amazing UIs</Heading>
                    <Text fontSize="xl" maxW="2xl" mx="auto">
                      This is a hero section component that can be used for landing pages
                      and marketing sections of your application.
                    </Text>
                    {/* Update the HStack to change to VStack on small screens */}
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      spacing={4}
                      width={{ base: '100%', sm: 'auto' }}
                    >
                      <Button colorScheme="purple" width={{ base: '100%', sm: 'auto' }}>
                        Primary Action
                      </Button>
                      <Button
                        variant="outline"
                        colorScheme="purple"
                        width={{ base: '100%', sm: 'auto' }}
                      >
                        Secondary Action
                      </Button>
                    </Stack>
                  </VStack>
                </Section>
              </Box>
            </Box>
          </Box>

          {/* Layout Components */}
          <Box>
            <Heading as="h2" size="xl" mb={6} pb={2} borderBottomWidth="2px" borderColor="purple.500">
              Layout Components
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Section Component
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Section bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} p={6} borderRadius="md">
                  <Heading size="md">Section Component</Heading>
                  <Text mt={2}>This is a section component with custom background</Text>
                </Section>
              </Box>
            </Box>
          </Box>

          {/* Additional Navigation Components */}
          <Box>
            <Heading as="h2" size="xl" mb={6} pb={2} borderBottomWidth="2px" borderColor="purple.500">
              Additional Navigation
            </Heading>

            <Box mb={8}>
              <Heading as="h3" size="md" mb={4} color="purple.500">
                Pagination
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />
              </Box>
            </Box>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
}

export default Home;