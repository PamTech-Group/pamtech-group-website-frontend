"use client";
import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/major/Nav";
import Image from "next/image";
import ceo from "../../public/ceo1.webp";
import value1 from "../../public/value1.webp";
import value2 from "../../public/value2.webp";
import value3 from "../../public/value3.webp";
import value4 from "../../public/value4.webp";
import value5 from "../../public/value5.webp";

import Footer from "../components/major/Footer";
import Sustainability from "../components/minor/Sustainability";

const AboutPage = () => {
  const values = [
    {
      image: value1,
      text: "Intergrity",
    },
    {
      image: value2,
      text: "Excellence",
    },
    {
      image: value3,
      text: "Customer Satisfaction",
    },
    {
      image: value4,
      text: "Team Work",
    },
    {
      image: value5,
      text: "Work Ethics",
    },
  ];

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
            justifyContent={{
              base: "center",
              md: "space-between",
              dddxl: "space-around",
            }}>
            <Flex
              flexDir="column"
              justifyContent="center"
              gap="2rem"
              width="50%">
              <Heading fontSize="3rem" fontWeight={500}>
                Meet <br /> Pamtech Group
              </Heading>
              <Text width="80%" fontSize="1.2rem">
                With a strong commitment to serving humanity, Pamtech Group has
                built a diverse portfolio in the oil and gas, media, and
                automotive industries.
              </Text>
            </Flex>
            <Flex
              marginTop={{
                base: "5rem",
                ddxl: "0rem",
              }}>
              <Image
                src={ceo}
                alt="people of pamtech"
                className="image-style "
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
        <Box textAlign="center" my="4rem">
          <Heading fontSize="2.5rem" fontWeight={500}>
            Core Values
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 2, md: 5 }}
          spacing="1.5rem"
          justifyItems="center"
          px="2rem">
          {values.map((value, index) => (
            <Flex
              key={index}
              bg={
                value.text === "Excellence" || value.text === "Team Work"
                  ? "#00030C"
                  : "#F1F1F1"
              }
              padding="1.5rem"
              borderRadius="md"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="8rem"
              width="12rem"
              boxShadow="md"
              transition="0.3s"
              _hover={{ transform: "scale(1.05)" }}>
              <Image
                src={value.image}
                alt={value.text}
                width={40}
                height={40}
              />
              <Text
                textAlign="center"
                fontSize="1rem"
                fontWeight="500"
                mt="0.5rem"
                color={
                  value.text === "Excellence" || value.text === "Team Work"
                    ? "#F1F1F1"
                    : "textGrey"
                }>
                {value.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>

        <Box
          mt="6rem"
          borderRadius="md"
          bgColor="#00030C"
          padding="2.5rem 3rem"
          color="#F1F1F1"
          height="100%">
          <Heading my="2rem">Our History</Heading>
          <Flex justifyContent="space-between" gap="3rem">
            <Flex flexDirection="column" gap="2rem" height="100%">
              <Text>
                {`In 2016, Pamtech Group was founded with a mission to render
                committed service to humanity starting with petroleum
                distribution in the downstream sector of the oil and gas
                industry. The company's reputation for reliability and integrity
                quickly established us among key industry players, leading to
                expanded operations and investments in infrastructure and
                technology.`}
              </Text>
              <Text>
                Pamtech Group diversified into the automotive industry with
                Pamtech Autoland for vehicle maintenance and repairs in 2020 and
                Pamtech Auto Parts in 2021 for Tokunbo and OEM spare parts,
                expanding our reach to both individual car owners and large
                fleet operators.
              </Text>
              <Text>
                Building on our success in the automotive and energy sectors, we
                continued to diversify our business interests. In 2023, we
                diversified into the media industry with Pamtech Media, focusing
                on content and digital marketing for the automotive sector. It
                quickly became a trusted partner for brands, enhancing their
                visibility through innovative content.
              </Text>
            </Flex>
            <Flex flexDirection="column" gap="2rem">
              <Text>
                Same 2023, the Pamtech Luxury Ride was also established to meet
                the demand for premium transportation, offering a fleet of
                luxury vehicles for personal, corporate, and special events. 
              </Text>
              <Text>
                In 2024, we developed and launched Petrol Padi, a mobile app
                offering real-time fuel price information and enabling users to
                order fuel with timely delivery across Nigeria. 
              </Text>
              <Text>
                Our impact extends beyond business through the Pamtech
                Foundation, established in 2016. The foundation focuses on
                improving lives across Nigeria with educational,
                entrepreneurial, and community initiatives, reflecting the
                company’s commitment to giving back.
              </Text>
              <Text>
                As Pamtech Group grows, we aim to become a leading conglomerate
                across Africa, driven by innovation and excellence. With a
                strong foundation of trust and integrity, our journey is one of
                growth, innovation, and making a societal impact on industries
                and our communities.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Sustainability />
      <Footer />
    </Box>
  );
};

export default AboutPage;
