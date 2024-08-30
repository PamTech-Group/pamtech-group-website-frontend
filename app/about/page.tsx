"use client";
import { Box, Button, Flex, Heading, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Nav from "../components/major/Nav";
import Footer from "../components/major/Footer";
import Sustainability from "../components/minor/Sustainability";
import { Image } from "@chakra-ui/next-js";
import theme from "../theme";

// Import images
import ceo from "../../public/ceo1.webp";
import gm from "../../public/gm.png";
import deacon from "../../public/deacon.png";
import buchi from "../../public/buchi.png";
import somi from "../../public/somi.png";
import bro from "../../public/bro.png";
import akay from "../../public/akay.png";
import praise from "../../public/praise.png";
import value1 from "../../public/value1.webp";
import value2 from "../../public/value2.webp";
import value3 from "../../public/value3.webp";
import value4 from "../../public/value4.webp";
import value5 from "../../public/value5.webp";
import pamtech from "../../public/pamtech-way.png";

const AboutPage = () => {
  const heroImages = [
    { image: ceo, alt: "ceo" },
    { image: gm, alt: "general manager" },
    { image: deacon, alt: "director3" },
    { image: buchi, alt: "director4" },
    { image: somi, alt: "director5" },
    { image: bro, alt: "director6" },
    { image: akay, alt: "director7" },
    { image: praise, alt: "director8" },
  ];

  const values = [
    { image: value1, text: "Integrity" },
    { image: value2, text: "Excellence" },
    { image: value3, text: "Customer Satisfaction" },
    { image: value4, text: "Team Work" },
    { image: value5, text: "Work Ethics" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const contentPadding = useBreakpointValue({
    base: "1rem",
    sm: "1.5rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });

  const headingFontSize = useBreakpointValue({ base: "2rem", md: "2.5rem", lg: "3rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });
  const imageHeight = useBreakpointValue({ base: 400, md: 500, lg: 600 });

  return (
    <Box bgColor="#FFFFFF" overflow="hidden">
      {/* HERO SECTION */}
      <Box
        bgPosition="center"
        bgColor="#0F1010"
        height={{ base: "auto", md: "100vh" }}
        width="100vw"
        color="#F7F7F7"
        position="relative"
      >
        <Box height="inherit" width="inherit" padding={contentPadding}>
          <Nav />
          <Flex
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent={{ base: "center", md: "space-around" }}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "2rem", md: "0" }}
            paddingY={{ base: "2rem", md: "0" }}
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              gap="2rem"
              width={{ base: "100%", md: "50%" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading fontSize={headingFontSize} fontWeight={500}>
                Meet <br /> Pamtech Group
              </Heading>
              <Text width={{ base: "100%", md: "80%" }} fontSize={textFontSize}>
                At our core, we are committed to empowering success and
                prosperity for all. We deliver innovative and beneficial
                solutions designed to drive growth and unlock potential.
              </Text>
            </Flex>

            <Flex
              marginTop={{ base: "2rem", md: "0" }}
              justifyContent={{ base: "center", md: "flex-end" }}
              width={{ base: "100%", md: "50%" }}
            >
              <Flex
              justifyContent='center'
                className={`fade ${isFading ? "fade-out" : "fade-in"}`}
                position="relative"
                width={{ base: "100%", md: "100%" }}
              >
                <Image
                  height={imageHeight}
                  src={heroImages[currentImageIndex].image}
                  alt={heroImages[currentImageIndex].alt}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* BODY */}
      <Flex
        width="100%"
        padding={contentPadding}
        color="textGrey"
        my="4rem"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "2rem", md: "0" }}
      >
        <Flex justifyContent={{
          base: 'center',
          md: 'initial'
        }} width={{ base: "50%", md: "100%" }}>
          <Image src={pamtech} alt="pamtech way" style={{ width: "100%", height: "auto" }} />
        </Flex>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text textAlign="justify" fontWeight={500} fontSize={textFontSize}>
            Our culture is built on the biblical cornerstones and
            principles of doing business in accordance with the ways
            of God. We strive to be a beacon of light; bringing value
            and prosperity to everyone we encounter.
          </Text>
        </Box>
      </Flex>

      <Box padding={contentPadding} color="textGrey" my="4rem">
        {/* Vision and Mission Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="2rem"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="6rem"
        >
          {/* Vision Card */}
          <Box
            width={{ base: "100%", md: "45%" }}
            bg="#F1F1F1"
            padding="2rem"
            boxShadow="md"
            height={{ base: "auto", md: "12rem" }}
            borderRadius="lg"
            textAlign="center"
          >
            <Heading fontSize={headingFontSize} fontWeight={500} marginBottom="1rem">
              Vision
            </Heading>
            <Text fontWeight={400} fontSize={textFontSize}>
            {`
             Empowering customers' success through excellent services and
              innovative solutions.
            `} 
            </Text>
          </Box>

          {/* Mission Card */}
          <Box
            width={{ base: "100%", md: "45%" }}
            bg="#F1F1F1"
            padding="2rem"
            height={{ base: "auto", md: "12rem" }}
            boxShadow="md"
            borderRadius="lg"
            textAlign="center"
          >
            <Heading fontSize={headingFontSize} fontWeight={500} marginBottom="1rem">
              Mission
            </Heading>
            <Text fontWeight={400} fontSize={textFontSize}>
              Delivering the most innovative solutions with integrity, passion,
              and expertise.
            </Text>
          </Box>
        </Flex>

        {/* Core Values Section */}
        <Box textAlign="center" my="4rem">
          <Heading fontSize={headingFontSize} fontWeight={500}>
            Core Values
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4, dxl: 5 }}
          spacing="1.5rem"
          justifyItems="center"
          px={{
            base: '.5rem',
            md:'1rem',
            lg:'1.5rem'
          }}
        >
          {values.map((value, index) => (
            <Flex
              key={index}
              bg={
                value.text === "Excellence" || value.text === "Team Work"
                  ? "#00030C"
                  : "#F1F1F1"
              }
              padding="1rem"
              borderRadius="md"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height={{
                base: '7.5rem',
                md: '8rem'
              }}
              width={{
                base: '8rem',
                md: '12rem'
              }}
              boxShadow="md"
              transition="0.3s"
              _hover={{ transform: "scale(1.08)" }}
            >
              <Image
                src={value.image}
                alt={value.text}
                style={{ objectFit: "cover", width: "auto", height: "auto" }}
              />
              <Text
                textAlign="center"
                fontSize={textFontSize}
                fontWeight="500"
                mt="0.5rem"
                color={
                  value.text === "Excellence" || value.text === "Team Work"
                    ? "#F1F1F1"
                    : "textGrey"
                }
              >
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
          height="100%"
        >
          <Heading my="2rem" fontSize={headingFontSize}>Our History</Heading>
          <Flex justifyContent="space-between" gap="3rem" flexDirection={{ base: "column", md: "row" }}>
            <Flex flexDirection="column" gap="2rem" height="100%">
              <Text fontSize={textFontSize}>
            {`In 2016, Pamtech Group was founded with a mission to render committed service to humanity starting with petroleum distribution in the downstream sector of the oil and gas industry. The company's reputation for reliability and integrity quickly established us among key industry players, leading to expanded operations and investments in infrastructure and technology.`}
            
              </Text>
              <Text fontSize={textFontSize}>
                As we grew, we diversified our portfolio, venturing into auto services, spare parts distribution, and media production. Each new venture was driven by our core values and a commitment to excellence, further solidifying our position as a trusted name across multiple sectors.
              </Text>
            </Flex>
            <Flex flexDirection="column" gap="2rem" height="100%">
              <Text fontSize={textFontSize}>
                Today, Pamtech Group stands as a diversified conglomerate, with interests spanning oil and gas, automotive services, media, and technology. Our journey is marked by continuous innovation, strategic partnerships, and a steadfast commitment to our founding principles.
              </Text>
              <Text fontSize={textFontSize}>
                Looking ahead, we remain dedicated to our mission of empowering success and prosperity for all, constantly seeking new ways to deliver value and drive positive change in the communities we serve.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* Sustainability Section */}
      <Box>
        <Sustainability />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default AboutPage;