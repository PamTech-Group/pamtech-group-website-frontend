import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Icon,
  Card,
  CardBody,
} from "@chakra-ui/react";
import {
  FaLightbulb,
  FaHandsHelping,
  FaRocket,
  FaHeart,
  FaBalanceScale,
} from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: "Excellence",
      description:
        "Constantly pushing boundaries and thinking beyond conventional limits.",
      color: "blue.500",
    },
    {
      icon: FaHandsHelping,
      title: "Team Work",
      description:
        "Believing in the power of teamwork and collective intelligence.",
      color: "green.500",
    },
    {
      icon: FaRocket,
      title: "Customer Satisfaction",
      description:
        "Committed to continuous personal and professional development.",
      color: "purple.500",
    },
    {
      icon: FaHeart,
      title: "Ethics",
      description:
        "Understanding and caring for our team, customers, and community.",
      color: "pink.500",
    },
    {
      icon: FaBalanceScale,
      title: "Integrity",
      description: "Maintaining highest standards of ethics and transparency.",
      color: "teal.500",
    },
  ];

  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <Heading
            size="2xl"
            textAlign="center"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Our Core Values
          </Heading>
          <SimpleGrid columns={[1, null, 3, 3, 5]} spacing={8}>
            {values.map((value, index) => (
              <Card
                key={index}
                variant="elevated"
                bg="white"
                boxShadow="xl"
                borderRadius="20px"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "2xl",
                }}
              >
                <CardBody>
                  <VStack spacing={4} align="center">
                    <Icon as={value.icon} w={12} h={12} color={value.color} />
                    <Heading size="sm" textAlign="center" color="gray.700">
                      {value.title}
                    </Heading>
                    {/* <Text textAlign="left" color="gray.600">
                      {value.description}
                    </Text> */}
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default CoreValues;
