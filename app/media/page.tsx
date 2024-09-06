"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import mediaBg from "../../public/mediaBg.webp";
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
          backgroundImage={`url(${mediaBg.src})`}
          backdropFilter="brightness(0%)"
          bgSize="cover"
          bgPosition="center"
          minHeight={{ base: "auto", md: "100vh" }}
          color="#F7F7F7"
        >
          <Nav />
          <Flex
            height={{ base: "auto", md: "calc(100vh - 80px)" }}
            flexDir="column"
            gap="1rem"
            justifyContent="center"
            width={{ base: "100%", lg: "70%", }}
            paddingY={{ base: "4rem", md: "0" }}
            pl={{
              base: 'unset',
              myxl: '3.5rem'
            }}
            data-aos="zoom-in"

          >
            <Heading fontSize={headingFontSize} fontWeight={500}>
              Pamtech Media
            </Heading>
            <Text
              fontWeight={500}
              width={{ base: "100%", md: "70%"}}
              textAlign="left"
              fontSize={textFontSize}
            >
              From content marketing to talent management and media consulting,
              we help brands connect with their audience and grow their presence
              online.
            </Text>
            <ButtonMain linkHref="#media" text="Read More" />
          </Flex>
        </Box>
        <Box  my={{
            base:'2rem',
            myxl: '4rem'
          }}>
          <Heading
            mb="4rem"
            textAlign="center"
            fontSize={headingFontSize}
            fontWeight={500}
            color="#2C2B2B"
          >
            Brand Showcase
          </Heading>
          <SimpleGrid
            gap=".5rem"
            placeItems="center"
            columns={{base:1, lg:2, xl:3}}
            padding={contentPadding}
          >
            <Image src={media1} alt="ride1"  data-aos='zoom-in' />
            <Image src={media2} alt="ride1" data-aos='zoom-in' />
            <Image src={media3} alt="ride1"  data-aos='zoom-in'/>
          </SimpleGrid>
        </Box>
        <VStack
          align="left"
          my={{
            base:'2rem',
            myxl: '4rem'
          }}
          padding={contentPadding}
          width={{ base: "100%", md: "70%" }}
          id="media"
          data-aos="zoom-in-right"
        >
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Media
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="left">
            <Text color="textGrey" fontSize={textFontSize}>
              {`Pamtech Media offers a comprehensive suite of services designed to elevate your brand's presence and engagement in the digital landscape. From crafting compelling content marketing strategies to managing and nurturing talent, we tailor our approach to meet your unique needs.`}
            </Text>
            <Text color="textGrey" fontSize={textFontSize}>
              From content marketing to talent management and media consulting,
              we help brands connect with their audience and grow their presence
              online.
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
