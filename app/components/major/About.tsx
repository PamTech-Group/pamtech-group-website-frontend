import { Box, Button, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import bg from "../../../public/bg2.png";
import { Image, Link } from "@chakra-ui/next-js";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <Flex
      // bg="gray.100"

      alignItems="center"
      justifyContent="space-between"
      height="60svh">
      <Box
        flex="1"
        bgImage={`url(${bg.src})`}
        bgSize="cover"
        bgPosition="center"
        height="100%"
        position="relative">
        <Box
          position="absolute"
          color="textGrey"
          bgColor="#F5F8FF"
          right="6%"
          top="50%"
          padding="2rem 5rem">
          <Flex flexDir="column" gap="1.5rem">
            <Text fontSize="xl" color="headingBlue">
              About Us
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur. consectetur. <br /> Vitae
              nibh nec ipsum ut at. Aenean sed <br /> scelerisque tristique
              eros. Mauris.
            </Text>{" "}
            <Link
              href="#"
              color="primaryOrange"
              display="flex"
              alignItems="center"
              gap=".5rem">
              Read More <BsArrowRight color="#090808" fontSize="1.5rem" />
            </Link>
          </Flex>
          <Box my="2rem" bgColor=" #192140" height="1px" opacity=".6" />
          <Flex gap="3rem">
            <Flex flexDir="column" gap="1rem">
              <Text>Shareholders</Text>
              <Text color="primaryOrange">500K+</Text>
            </Flex>
            <Flex flexDir="column" gap="1rem">
              <Text>Years</Text>
              <Text color="primaryOrange">50+</Text>
            </Flex>
            <Flex flexDir="column" gap="1rem">
              <Text>Shareholders</Text>
              <Text color="primaryOrange">30+</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
