import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex
      bg="gray.100"
      p={10}
      alignItems="center"
      justifyContent="space-between">
      <Box
        flex="1"
        bgImage="url('/about-bg.png')"
        bgSize="cover"
        bgPosition="center"
        height="300px"
      />
      <Box flex="1" p={10}>
        <Text fontSize="2xl" mb={4}>
          About Us
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Vitae nibh nec ipsum ut at.
          Aenean sed scelerisque tristique eros. Mauris.
        </Text>
        <Text mt={4}>Shareholders: 500k+ | Years: 50+ | Awards: 30+</Text>
      </Box>
    </Flex>
  );
};

export default About;
