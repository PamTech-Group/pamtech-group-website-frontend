import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import bg from "../../../public/bg1.jpg";
import Header from "./Nav";
import { Link } from "@chakra-ui/next-js";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <Box
      padding="2rem 8rem"
      backgroundImage={`url(${bg.src})`}
      bgSize="cover"
      bgPosition="center"
      height="100vh"
      color="white">
      <Header />

      <Flex height="80%" flexDir="column" justifyContent="center" gap="1.5rem">
        <Text fontSize="4xl">Title Website-Headline</Text>
        <Text maxW="600px">
          Lorem ipsum dolor sit amet consectetur. Tincidunt ac <br /> elit
          ullamcorper nibh in. Id pretium amet sem eli <br /> t nunc maecenas at
          facilisi.
        </Text>
        <Link
          href="#"
          color="primaryOrange"
          display="flex"
          alignItems="center"
          gap=".5rem">
          Read More <BsArrowRight color="#E52321" fontSize="1.5rem" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Hero;
