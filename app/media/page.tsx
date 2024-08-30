"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import rideBg from "../../public/rideBg.png";
import media1 from "../../public/media1.webp";
import media2 from "../../public/media2.webp";
import media3 from "../../public/media3.webp";

import Image from "next/image";
import {
  Box,
  Button,
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

const Media = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 2rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });
  const headingFontSize = useBreakpointValue({ base: "2rem", md: "2.5rem", lg: "3rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });

  return (
    <>
      <Box bgColor="#FFFFFF">
        <Box
          padding={contentPadding}
          backgroundImage={`url(${rideBg.src})`}
          bgSize="cover"
          bgPosition="center"
          minHeight={{ base: "auto", md: "100vh" }}          color="#F7F7F7">
          <Nav />
          <Flex
           height={{ base: "auto", md: "calc(100vh - 80px)" }}
            flexDir="column"
            justifyContent="center"
            width={{ base: "100%", md: "70%", lg: "50%" }}
            paddingY={{ base: "4rem", md: "0" }}>
            <Heading fontSize="3rem" fontWeight={500}>
              Pamtech Media
            </Heading>
            <Text fontWeight={500} width={{ base: "100%", md: "80%", xl: '60%' }} textAlign="justify"  fontSize={textFontSize}>
              Lorem ipsum dolor sit amet consectetur. Tincidunt ac elit
              ullamcorper nibh in. Id pretium amet sem eli t nunc maecenas at
              facilisi. nibh
            </Text>
            <ButtonMain text="Talk to us" />
          </Flex>
        </Box>
        <Box my="6rem">
          <Heading
            mb="4rem"
            textAlign="center"
            fontSize={headingFontSize}
            fontWeight={500}
            color="#2C2B2B">
            Brand Showcase
          </Heading>
          <Flex gap=".5rem" justifyContent="center" flexWrap="wrap" padding={contentPadding}>
            <Image src={media1} alt="ride1" />
            <Image src={media2} alt="ride1" />
            <Image src={media3} alt="ride1" />
          </Flex>
        </Box>
        <VStack align="left" my="4rem" padding={contentPadding} width={{ base: "100%", md: "70%", lg: "50%" }}>
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Media
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="justify">
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

export default Media;
