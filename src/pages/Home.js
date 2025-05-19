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
  useColorMode,
  Flex,
  IconButton,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Progress,
  HStack,
  Circle
} from '@chakra-ui/react';
import { FiUsers, FiTrendingUp, FiDollarSign, FiActivity, FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import { Section } from '../components/layout';
import { HoverCard, StatCard } from '../components/data-display';
import { LoadingSpinner } from '../components/feedback/LoadingSpinner';
import { useCustomToast } from '../components/feedback/ToastContainer';
import { Breadcrumbs, Pagination } from '../components/navigation';
import { InputField, SelectField } from '../components/forms';
import { useForm } from 'react-hook-form';

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = colorMode === 'dark' ? "#09090b" : "white";
  const textColor = colorMode === 'dark' ? "white" : "#09090b";
  const borderColor = colorMode === 'dark' ? "#27272a" : "#e4e4e7";
  const subtleBackground = colorMode === 'dark' ? "gray.800" : "gray.50";
  const { showToast } = useCustomToast();
  const { register, formState: { errors } } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

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

  // Styles for component headers based on Chakra docs
  const ComponentHeader = ({ children }) => (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      py={4}
      borderBottomWidth="1px"
      borderColor={borderColor}
      mb={6}
    >
      <Heading as="h2" size="md" fontWeight="semibold">
        {children}
      </Heading>
    </Flex>
  );

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
          boxShadow="sm"
          borderWidth="1px"
          borderColor={colorMode === 'dark' ? "#27272a" : "#e4e4e7"}
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
            colorScheme="lime"
            fontWeight="bold"
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </VStack>

        {/* Component Showcase */}
        <VStack spacing={16} align="stretch">
          {/* Button Components */}
          <Box as="section">

            <Box mb={8}>
              <ComponentHeader>Button Variants</ComponentHeader>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} mb={8}>
                <Button colorScheme="lime">Primary Button</Button>
                <Button
                  bg={colorMode === 'dark' ? "white" : "#09090b"}
                  color={colorMode === 'dark' ? "#09090b" : "white"}
                  _hover={{ opacity: 0.8 }}
                >
                  High Contrast
                </Button>
                <Button
                  colorScheme="lime"
                  variant="outline"
                >
                  Outline Button
                </Button>
              </SimpleGrid>

              <ComponentHeader>With Icons</ComponentHeader>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} mb={8}>
                <Button
                  colorScheme="lime"
                  rightIcon={<FiArrowRight />}
                >
                  Next Step
                </Button>
                <Button
                  bg={colorMode === 'dark' ? "white" : "#09090b"}
                  color={colorMode === 'dark' ? "#09090b" : "white"}
                  leftIcon={<FiCheck />}
                  _hover={{ opacity: 0.8 }}
                >
                  Confirm
                </Button>
                <Button
                  variant="outline"
                  borderColor={colorMode === 'dark' ? "white" : "#09090b"}
                  color={textColor}
                  rightIcon={<FiArrowRight />}
                  _hover={{ bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.100' }}
                >
                  Learn More
                </Button>
              </SimpleGrid>

              <ComponentHeader>Size Variations</ComponentHeader>
              <VStack align="start" spacing={4} mb={8}>
                <Button
                  colorScheme="lime"
                  size="lg"
                >
                  Large Button
                </Button>
                <Button
                  bg={colorMode === 'dark' ? "white" : "#09090b"}
                  color={colorMode === 'dark' ? "#09090b" : "white"}
                  _hover={{ opacity: 0.8 }}
                >
                  Regular Button
                </Button>
                <Button
                  colorScheme="lime"
                  size="sm"
                >
                  Small Button
                </Button>
              </VStack>
            </Box>
          </Box>

          <Box as="section">
            <ComponentHeader>Hover Card</ComponentHeader>
            <Box mb={8}>
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
          </Box>


          {/* Checkbox Components */}
          <Box as="section">
            <ComponentHeader>Checkbox</ComponentHeader>
            <Box p={4} borderWidth="1px" borderRadius="md" mb={8} borderColor={borderColor} bg={formBackground}>
              <Stack direction="column" spacing={3}>
                <Checkbox
                  defaultChecked={false}
                  colorScheme="lime"
                  css={colorMode === 'light' ? {
                    ".chakra-checkbox__control": {
                      borderColor: "#09090b",
                      borderWidth: "2px"
                    },
                    ".chakra-checkbox__control[data-checked]": {
                      backgroundColor: "var(--chakra-colors-lime-500)",
                      borderColor: "#09090b"
                    },
                    ".chakra-checkbox__control[data-checked] > div": {
                      color: "#09090b"
                    }
                  } : {}}
                >
                  Option 1 - Default state
                </Checkbox>
                <Checkbox
                  defaultChecked={true}
                  colorScheme="lime"
                  css={colorMode === 'light' ? {
                    ".chakra-checkbox__control": {
                      borderColor: "#09090b",
                      borderWidth: "2px"
                    },
                    ".chakra-checkbox__control[data-checked]": {
                      backgroundColor: "var(--chakra-colors-lime-500)",
                      borderColor: "#09090b"
                    },
                    ".chakra-checkbox__control[data-checked] > div": {
                      color: "#09090b"
                    }
                  } : {}}
                >
                  Option 2 - Checked state
                </Checkbox>
                <Checkbox
                  isDisabled
                  colorScheme="lime"
                  css={colorMode === 'light' ? {
                    ".chakra-checkbox__control": {
                      borderColor: "#09090b",
                      borderWidth: "2px"
                    }
                  } : {}}
                >
                  Option 3 - Disabled state
                </Checkbox>
              </Stack>
            </Box>
          </Box>

          {/* Radio Components */}
          <Box as="section">
            <ComponentHeader>Radio</ComponentHeader>
            <Box p={4} borderWidth="1px" borderRadius="md" mb={8} borderColor={borderColor} bg={formBackground}>
              <RadioGroup defaultValue="2">
                <Stack direction='column' spacing={3}>
                  <Radio
                    value='1'
                    colorScheme="lime"
                    css={colorMode === 'light' ? {
                      ".chakra-radio__control": {
                        borderColor: "#09090b",
                        borderWidth: "2px"
                      },
                      ".chakra-radio__control[data-checked]": {
                        borderColor: "#09090b",
                        backgroundColor: "transparent",
                        _before: {
                          backgroundColor: "#09090b"
                        }
                      }
                    } : {}}
                  >
                    Radio 1 - Default state
                  </Radio>
                  <Radio
                    value='2'
                    colorScheme="lime"
                    css={colorMode === 'light' ? {
                      ".chakra-radio__control": {
                        borderColor: "#09090b",
                        borderWidth: "2px"
                      },
                      ".chakra-radio__control[data-checked]": {
                        borderColor: "#09090b",
                        backgroundColor: "transparent",
                        _before: {
                          backgroundColor: "#09090b !important"
                        }
                      },
                      ".chakra-radio__control::before": {
                        backgroundColor: "#09090b !important"
                      }
                    } : {}}
                  >
                    Radio 2 - Checked state
                  </Radio>
                  <Radio
                    value='3'
                    isDisabled
                    colorScheme="lime"
                    css={colorMode === 'light' ? {
                      ".chakra-radio__control": {
                        borderColor: "#09090b",
                        borderWidth: "2px"
                      }
                    } : {}}
                  >
                    Radio 3 - Disabled state
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Box>

          {/* Switch Component */}
          <Box as="section">
            <ComponentHeader>Switch</ComponentHeader>
            <Box p={4} borderWidth="1px" borderRadius="md" mb={8} borderColor={borderColor} bg={formBackground}>
              <Stack direction='column' spacing={3}>
                <Flex align="center">
                  <Switch
                    colorScheme="lime"
                    mr={3}
                    css={colorMode === 'light' ? {
                      ".chakra-switch__track": {
                        borderColor: "#09090b",
                        borderWidth: "2px"
                      }
                    } : {}}
                  />
                  <Text>Default state</Text>
                </Flex>
                <Flex align="center">
                  <Switch
                    colorScheme="lime"
                    defaultChecked
                    mr={3}
                    css={colorMode === 'light' ? {
                      ".chakra-switch__track": {
                        borderColor: "#09090b",
                        borderWidth: "2px"
                      }
                    } : {}}
                  />
                  <Text>Checked state</Text>
                </Flex>
                <Flex align="center">
                  <Switch
                    colorScheme="lime"
                    isDisabled
                    mr={3}
                    css={colorMode === 'light' ? {
                      ".chakra-switch__track": {
                        borderColor: "#09090b",
                        borderWidth: "2px"
                      }
                    } : {}}
                  />
                  <Text>Disabled state</Text>
                </Flex>
              </Stack>
            </Box>
          </Box>

          {/* Slider Component */}
          <Box as="section">
            <ComponentHeader>Slider</ComponentHeader>
            <Box p={4} borderWidth="1px" borderRadius="md" mb={8} borderColor={borderColor} bg={formBackground}>
              <Text mb={2}>Value: {sliderValue}</Text>
              <Slider
                aria-label='slider-example'
                value={sliderValue}
                onChange={setSliderValue}
                colorScheme={colorMode === 'dark' ? "lime" : "blackAlpha"}
                mb={6}
              >
                <SliderTrack bg={colorMode === 'light' ? "white" : undefined}>
                  <SliderFilledTrack bg={colorMode === 'light' ? "#09090b" : undefined} />
                </SliderTrack>
                <SliderThumb
                  boxSize={6}
                  bg={colorMode === 'light' ? "lime.500" : undefined}
                  borderColor={colorMode === 'light' ? "#09090b" : undefined}
                  borderWidth={colorMode === 'light' ? "2px" : undefined}
                />
              </Slider>
            </Box>
          </Box>

          {/* Progress Circle */}
          <Box as="section">
            <ComponentHeader>Progress Circle</ComponentHeader>
            <Box p={4} borderWidth="1px" borderRadius="md" mb={8} borderColor={borderColor} bg={formBackground}>
              <HStack spacing={8}>
                <Circle size="40px" position="relative">
                  <Circle size="40px" bg={subtleBackground} />
                  <Circle
                    size="40px"
                    bg="transparent"
                    thickness="4px"
                    position="absolute"
                    top={0}
                    left={0}
                    border="4px solid"
                    borderColor={colorMode === 'dark' ? "lime.500" : "#09090b"}
                    borderLeftColor="transparent"
                    borderBottomColor="transparent"
                  />
                </Circle>
                <Circle size="40px" position="relative">
                  <Circle size="40px" bg={subtleBackground} />
                  <Circle
                    size="40px"
                    bg="transparent"
                    thickness="4px"
                    position="absolute"
                    top={0}
                    left={0}
                    border="4px solid"
                    borderColor={colorMode === 'dark' ? "gray.700" : "gray.200"}
                    borderRightColor={colorMode === 'dark' ? "lime.500" : "#09090b"}
                    borderTopColor={colorMode === 'dark' ? "lime.500" : "#09090b"}
                  />
                </Circle>
                <Progress
                  value={80}
                  colorScheme={colorMode === 'dark' ? "lime" : "blackAlpha"}
                  size="xs"
                  width="150px"
                  borderRadius="full"
                />
              </HStack>
            </Box>
          </Box>

          {/* Rating Component */}
          <Box as="section">
            <ComponentHeader>Rating</ComponentHeader>
            <Box p={4} borderWidth="1px" borderRadius="md" mb={8} borderColor={borderColor} bg={formBackground}>
              <HStack spacing={1} mb={4}>
                <IconButton icon={<FiStar />} size="xs" variant="solid" colorScheme={colorMode === 'dark' ? "lime" : "blackAlpha"} aria-label="star-rating-1" />
                <IconButton icon={<FiStar />} size="xs" variant="solid" colorScheme={colorMode === 'dark' ? "lime" : "blackAlpha"} aria-label="star-rating-2" />
                <IconButton icon={<FiStar />} size="xs" variant="solid" colorScheme={colorMode === 'dark' ? "lime" : "blackAlpha"} aria-label="star-rating-3" />
                <IconButton icon={<FiStar />} size="xs" variant="outline" colorScheme={colorMode === 'dark' ? "lime" : "blackAlpha"} aria-label="star-rating-4" />
                <IconButton icon={<FiStar />} size="xs" variant="outline" colorScheme={colorMode === 'dark' ? "lime" : "blackAlpha"} aria-label="star-rating-5" />
              </HStack>
            </Box>
          </Box>

          {/* Navigation Components */}
          <Box as="section">

            <Box mb={8}>
              <ComponentHeader>Breadcrumbs</ComponentHeader>
              <Box p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor} bg={formBackground}>
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
          <Box as="section">

            <Box mb={8}>
              <ComponentHeader>Hover Card</ComponentHeader>
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
              <ComponentHeader>Stat Cards</ComponentHeader>
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
          <Box as="section">

            <Box mb={8}>
              <ComponentHeader>Toast Notifications</ComponentHeader>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4} borderColor={borderColor} bg={formBackground}>
                <Button
                  onClick={showSuccessToast}
                  colorScheme="lime"
                  leftIcon={<FiCheck />}
                >
                  Show Toast Notification
                </Button>
              </Box>
            </Box>

            <Box mb={8}>
              <ComponentHeader>Loading Spinner</ComponentHeader>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4} borderColor={borderColor} bg={formBackground}>
                {isLoading ? (
                  <LoadingSpinner text="Loading data..." height="200px" />
                ) : (
                  <Button
                    onClick={toggleLoading}
                    colorScheme="lime"
                  >
                    Show Loading Spinner
                  </Button>
                )}
              </Box>
            </Box>
          </Box>

          {/* Form Components */}
          <Box as="section">

            <Box mb={8}>
              <ComponentHeader>Input Field</ComponentHeader>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4} maxW="md" borderColor={borderColor} bg={formBackground}>
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
              <ComponentHeader>Select Field</ComponentHeader>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4} maxW="md" borderColor={borderColor} bg={formBackground}>
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
          <Box as="section">

            <Box mb={8}>
              <ComponentHeader>Hero Section</ComponentHeader>
              <Box p={4} borderWidth="1px" borderRadius="md" mb={4} borderColor={borderColor} bg={formBackground}>
                <Section bg={colorMode === 'dark' ? '#09090B' : 'white'} py={8} borderRadius="md">
                  <VStack spacing={4} textAlign="center" p={6}>
                    <Heading size="2xl">Build Amazing UIs</Heading>
                    <Text fontSize="xl" maxW="2xl" mx="auto">
                      This is a hero section component that can be used for landing pages
                      and marketing sections of your application.
                    </Text>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      spacing={4}
                      width={{ base: '100%', sm: 'auto' }}
                    >
                      <Button
                        bg={colorMode === 'dark' ? "lime.500" : "#09090b"}
                        color={colorMode === 'dark' ? "#09090b" : "white"}
                        _hover={{ opacity: 0.8 }}
                        width={{ base: '100%', sm: 'auto' }}
                        rightIcon={<FiArrowRight />}
                      >
                        Get Started
                      </Button>
                      <Button
                        variant="outline"
                        borderColor={colorMode === 'dark' ? "white" : "#09090b"}
                        color={textColor}
                        _hover={{ bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.100' }}
                        width={{ base: '100%', sm: 'auto' }}
                      >
                        Learn More
                      </Button>
                    </Stack>
                  </VStack>
                </Section>
              </Box>
            </Box>
          </Box>

          {/* Additional Navigation Components */}
          <Box as="section">
            <ComponentHeader>Pagination</ComponentHeader>
            <Box p={4} borderWidth="1px" borderRadius="md" mb={8} borderColor={borderColor} bg={formBackground}>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </Box>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
}

export default Home;