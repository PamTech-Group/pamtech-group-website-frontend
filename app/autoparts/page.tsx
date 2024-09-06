"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import partsBg from "../../public/partsBg.webp";
import parts1 from "../../public/parts1.webp";
import parts2 from "../../public/parts2.webp";
import parts3 from "../../public/parts3.webp";

import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/major/Footer";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import ButtonMain from "../components/minor/ButtonMain";

const Autoparts = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 2rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });
  const headingFontSize = useBreakpointValue({
    base: "2rem",
    md: "2.5rem",
    lg: "3rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.1rem",
    lg: "1.2rem",
  });

  return (
    <>
      <Box bgColor="#FFFFFF">
        <Box
          padding={contentPadding}
          backgroundImage={`url(${partsBg.src})`}
          bgSize="cover"
          bgPosition="center"
          height={{ base: "100vh", md: "80vh", myxl:'100vh' }}

          color="#F7F7F7"
        >
          <Nav />
          <Flex
            height={{ base: "100vh", md: "65vh", xl: "100vh" }}
            flexDir="column"
            justifyContent="center"
            gap="2rem"
            width={{ base: "100%", md: "70%" }}
            paddingY={{ base: "4rem", md: "0" }}
            pl={{
              base: "unset",
              myxl: "3.5rem",
            }}
            data-aos="zoom-in"
          >
            <Heading fontSize={headingFontSize} fontWeight={500}>
              Pamtech Autoparts
            </Heading>
            <Text
              fontWeight={500}
              width={{ base: "100%", md: "80%", xl: "70%" }}
              textAlign="left"
              fontSize={textFontSize}
            >
              Get all the genuine OEM parts at the right price and without
              stress. 
            </Text>
            <ButtonMain linkHref="#autoparts" text="Read More" />
          </Flex>
        </Box>
        <Box
          my={{
            base: "2rem",
            md: "3rem",
            myxl: "6rem",
          }}
        >
          <Heading
            mb={{
              base: "1rem",
              md: "2rem",
              myxl: "4rem",
            }}
            textAlign="center"
            fontSize={headingFontSize}
            fontWeight={500}
            color="#2C2B2B"
          >
            Brand Showcase
          </Heading>
          <Flex
            gap=".5rem"
            placeItems="center"
            justifyContent="center"
            flexWrap="wrap"
            padding={contentPadding}
          >
            <Image
              src={parts1}
              alt="parts1"
              style={{ maxWidth: "100%", height: "auto" }}
              data-aos="zoom-in"
            />
            <Image
              src={parts2}
              alt="parts2"
              style={{ maxWidth: "100%", height: "auto" }}
              data-aos="zoom-in"
            />
            <Image
              src={parts3}
              alt="parts3"
              style={{ maxWidth: "100%", height: "auto" }}
              data-aos="zoom-in"
            />
          </Flex>
        </Box>
        <VStack
          id="autoparts"
          align="left"
          my={{
            base: "1rem",
            md: "2rem",
            myxl: "4rem",
          }}
          padding={contentPadding}
          width={{ base: "100%", md: "75%" }}
          data-aos="zoom-in-right"
        >
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Autoparts
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="left">
            <Text color="textGrey" fontSize={textFontSize}>
              {`Pamtech Autoparts offers a wide selection of quality OEM
              autoparts for vehicle repair, maintenance, servicing, and
              replacement as well as accessories, — all at extremely competitive
              prices. Paired with our fast shipping, we prioritize authenticity
              and quality, so every part in our inventory meets the
              manufacturer's specifications, giving you confidence in the
              performance and durability of your equipment.`}
            </Text>
            <Text color="textGrey" fontSize={textFontSize}>
              Currently the bigest auto spare parts plaza in the South East, our
              commitment to ensuring that you get the right parts at the right
              price, and our dedicated customer support at Pamtech Autoparts
              guarantees a seamless and satisfying order and delivery
              experience. Trust us to provide genuine OEM parts that deliver
              both exceptional value and peace of mind.
            </Text>
          </Flex>
        </VStack>
        <Sustainability />
        <Footer />
      </Box>
    </>
  );
};

export default Autoparts;
