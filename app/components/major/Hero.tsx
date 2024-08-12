import { Box, Text, VStack } from "@chakra-ui/react";
import bg from "../../../public/bg.png";
const Hero = () => {
  return (
    <Box
      // bgImage={bg}
      bgSize="cover"
      bgPosition="center"
      height="100vh"
      color="white"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <VStack spacing={6}>
        <Text fontSize="4xl">Title Website-Headline</Text>
        <Text maxW="600px">
          Lorem ipsum dolor sit amet consectetur. Tincidunt ac elit ullamcorper
          nibh in. Id pretium amet sem eli t nunc maecenas at facilisi.
        </Text>
      </VStack>
    </Box>
  );
};

export default Hero;
