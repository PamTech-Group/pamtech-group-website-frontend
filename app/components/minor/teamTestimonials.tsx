import React from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Avatar,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

const EmployeeTestimonials = () => {
  const testimonials = [
    {
      name: "Somiari Lucky",
      role: "CEO Pamtech Media",
      quote:
        "This company has given me opportunities to grow beyond my wildest expectations. The support and innovation here are unparalleled.",
      avatar: "/avatar-sarah.jpg",
    },
    {
      name: "Eze Peter",
      role: "Operations Manager",
      quote:
        "Every day brings a new challenge, and I love how we continuously push the boundaries of what's possible.",
      avatar: "/avatar-michael.jpg",
    },
    {
      name: "Mrs Immachim Nwadioha",
      role: "Pamtech Ride CSR",
      quote:
        "The collaborative culture and commitment to personal growth make this more than just a job - it's a career journey.",
      avatar: "/avatar-emily.jpg",
    },
  ];

  return (
    <Box bg="white" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <Heading
            size="2xl"
            textAlign="center"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            What Our Team Says
          </Heading>

          <SimpleGrid columns={[1, null, null, 3]} spacing={8}>
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                bg="gray.50"
                p={6}
                borderRadius="20px"
                position="relative"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "xl",
                }}
              >
                <Icon
                  as={FaQuoteLeft}
                  color="blue.200"
                  w={10}
                  h={10}
                  position="absolute"
                  top={4}
                  left={4}
                />
                <VStack spacing={4} align="center" mt={8}>
                  <Text
                    textAlign="center"
                    color="gray.600"
                    fontStyle="italic"
                    position="relative"
                    zIndex={1}
                  >
                    {testimonial.quote}
                  </Text>
                  <Flex align="center" direction="column" mt={4}>
                    <Avatar
                      src={testimonial.avatar}
                      name={testimonial.name}
                      size="lg"
                      mb={2}
                    />
                    <VStack spacing={0} align="center">
                      <Heading textAlign="center" size="sm" color="gray.700">
                        {testimonial.name}
                      </Heading>
                      <Text textAlign="center" color="gray.500" fontSize="sm">
                        {testimonial.role}
                      </Text>
                    </VStack>
                  </Flex>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default EmployeeTestimonials;
