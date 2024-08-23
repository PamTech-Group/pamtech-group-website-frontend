"use client";
import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/major/Nav";
import Image from "next/image";
import ceo from "../../public/ceo1.webp";

import Footer from "../components/major/Footer";
import Sustainability from "../components/minor/Sustainability";

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
            bg="#BFD7FC"
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
            bg="#BFD7FC"
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
          <Heading fontSize="2.5rem" fontWeight={500}>
            Core Values
          </Heading>
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
            <Flex
              key={index}
              bg={
                value === "Excellence" || value === "Team Work"
                  ? "#62728A"
                  : "#BFD7FC"
              }
              padding="3rem"
              boxShadow="md"
              borderRadius="lg"
              textAlign="center"
              width="100%"
              height="8rem"
              maxW="15rem"
              alignItems="center"
              justifyContent="center">
              <Text
                color={
                  value === "Excellence" || value === "Team Work"
                    ? "#F1F1F1"
                    : "textGrey"
                }
                fontSize="1.2rem"
                fontWeight={500}>
                {value}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default AboutPage;
