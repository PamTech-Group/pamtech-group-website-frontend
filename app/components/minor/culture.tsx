import React from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import team from "../../../public/media3.webp";
import fun from "../../../public/oilgas2.png";
import learn from "../../../public/land2.webp";
import { Image } from "@chakra-ui/next-js";

const TeamCulture = () => {
  const culturalHighlights = [
    {
      image: team,
      title: "Collaborative Environment",
      description:
        "We believe in the power of diverse perspectives and teamwork.",
    },
    {
      image: learn,
      title: "Continuous Learning",
      description:
        "Invest in your growth through workshops, mentorship, and training.",
    },
    {
      image: fun,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements that support your personal and professional life.",
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
            Our Team Culture
          </Heading>
          <Text textAlign="center" color="gray.600" maxW="700px">
            {`At our company, we're more than just colleagues. We're a community
        driven by passion, innovation, and mutual respect.`}
          </Text>

          <SimpleGrid columns={[1, null, 3]} spacing={8}>
            {culturalHighlights.map((highlight, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="50px"
                overflow="hidden"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                }}
              >
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  objectFit="cover"
                  h="250px"
                  w="full"
                />
                <VStack spacing={4} p={6} align="start">
                  <Heading size="md" color="gray.700">
                    {highlight.title}
                  </Heading>
                  <Text color="gray.600">{highlight.description}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TeamCulture;
