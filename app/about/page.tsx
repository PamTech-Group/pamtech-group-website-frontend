"use client";
import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/major/Nav";
import Image from "next/image";
import ceo from "../../public/ceo1.webp";
import bg3 from "../../public/bg3.png";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import Footer from "../components/major/Footer";

const AboutPage = () => {
  return (
    <Box bgColor="#FFFFFF">
      <Box
        bgPosition="center"
        bgColor="#0F1010"
        height="100vh"
        width="100vw"
        color="#F7F7F7">
        <Box height="inherit" width="inherit" padding="2rem 8rem">
          <Nav />
          <Flex
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent="space-between">
            <Flex
              flexDir="column"
              justifyContent="center"
              gap="2rem"
              width="50%">
              <Heading fontSize="3rem" fontWeight={500}>
                Meet Pamtech Grop
              </Heading>
              <Text width="80%" fontSize="1.2rem">
                With a strong commitment to serving humanity, Pamtech Group has
                built a diverse portfolio in the oil and gas, media, and
                automotive industries.
              </Text>
            </Flex>
            <Flex>
              <Image
                src={ceo}
                alt="people of pamtech"
                className="image-style"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box
        padding={{ base: "2rem 8rem", md: "4rem 8rem" }}
        color="textGrey"
        my="4rem">
        {/* Vision and Mission Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="2rem"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="6rem">
          {/* Vision Card */}
          <Box
            width={{ base: "100%", md: "45%" }}
            bg="#F1F1F1"
            padding="2rem"
            boxShadow="md"
            height="12rem"
            borderRadius="lg"
            textAlign="center">
            <Heading fontSize="2.5rem" fontWeight={500} marginBottom="1rem">
              Vision
            </Heading>
            <Text fontWeight={400} fontSize="1.2rem">
              Empowering customers’ success through excellent services and
              innovative solutions.
            </Text>
          </Box>

          {/* Mission Card */}
          <Box
            width={{ base: "100%", md: "45%" }}
            bg="#F1F1F1"
            padding="2rem"
            height="12rem"
            boxShadow="md"
            borderRadius="lg"
            textAlign="center">
            <Heading fontSize="2.5rem" fontWeight={500} marginBottom="1rem">
              Mission
            </Heading>
            <Text fontWeight={400} fontSize="1.2rem">
              Delivering the most innovative solutions with integrity, passion,
              and expertise.
            </Text>
          </Box>
        </Flex>

        {/* Core Values Section */}
        <Box textAlign="center" marginBottom="2rem">
          <Heading size="lg">Core Values</Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 5 }}
          spacing="1.5rem"
          justifyItems="center">
          {[
            "Integrity",
            "Excellence",
            "Customer Satisfaction",
            "Team Work",
            "Work Ethics",
          ].map((value, index) => (
            <Box
              key={index}
              bg="#F1F1F1"
              padding="3rem"
              boxShadow="md"
              borderRadius="lg"
              textAlign="center"
              width="100%"
              height="8rem"
              maxW="15rem"
              margin="auto 0">
              <Text fontWeight={500}>{value}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Flex
        my="4rem"
        padding="4rem 8rem"
        gap="2rem"
        bgImage={`url(${bg3.src})`}
        bgSize="cover"
        bgPosition="center"
        color="#F7F7F7">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Flex width="50%" flexDirection="column" gap="2rem">
            <Text fontWeight={300}>Sustainability</Text>
            <Text fontWeight={500} fontSize="2.5rem">
              Building Prosperity and Self-Sufficiency
            </Text>
            <Text fontWeight={300} fontSize="1.2rem">
              Lorem ipsum dolor sit amet consectetur. Blandit arcu pellentesque
              adipiscing adipiscing feugiat nunc varius sed tincidunt.
            </Text>
            <Button
              width="fit-content"
              padding={theme.buttonPadding}
              bgColor="primaryOrange"
              _hover={{ bgColor: "#961615" }}
              _active={{ bgColor: "#bf1e1d" }}
              borderRadius={theme.buttonRadius.radius}
              rightIcon={<BiChevronRight fontSize="2rem" />}>
              Read More
            </Button>
          </Flex>
          <Box height="150px" width="0.5px" mx="3rem" bgColor="#F7F7F7" />
          <Flex width="50%" flexDirection="column" gap="2rem">
            <Text>7 Sustainability Pillars</Text>
            <SimpleGrid columns={4} rowGap="5" columnGap={8}>
              {[...Array(7)].map((_, i) => (
                <Box
                  key={i}
                  width="50px"
                  height="45px"
                  outline="1px solid #F7F7F7"
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default AboutPage;
