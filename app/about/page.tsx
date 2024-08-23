import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/major/Nav";
import { BiChevronRight } from "react-icons/bi";
import theme from "../theme";

const AboutPage = () => {
  return (
    <Box padding="2rem 8rem" bgPosition="center" height="100vh" color="#F7F7F7">
      <Nav />
      <Flex>
        <Flex
          height="100%"
          bgColor="#0F1010"
          flexDir="column"
          justifyContent="center"
          gap="2rem"
          width="50%">
          <Heading fontSize="3rem" fontWeight={500}>
            Committed Service to Humanity{" "}
          </Heading>
          <Text width="80%" fontSize="1.2rem">
            With a strong commitment to serving humanity, Pamtech Group has
            built a diverse portfolio in the oil and gas, media, and automotive
            industries.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutPage;
