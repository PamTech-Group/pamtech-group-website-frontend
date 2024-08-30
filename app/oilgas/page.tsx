"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import gasBg from "../../public/gasBg.webp";
import oilgas1 from "../../public/oilgas1.png";
import oilgas2 from "../../public/oilgas2.png";
import oilgas3 from "../../public/oilgas3.webp";
import bg3 from "../../public/bg3.png";
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/major/Footer";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import ButtonMain from "../components/minor/ButtonMain";

const OilGas = () => {
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
          backgroundImage={`url(${gasBg.src})`}
          bgSize="cover"
          bgPosition="center"
          minHeight={{ base: "auto", md: "100vh" }}
          color="#F7F7F7"
        >
          <Nav />
          <Flex
            mt={{
              base: "3rem",
              md: "0rem",
            }}
            height={{ base: "auto", md: "calc(100vh - 80px)" }}
            flexDir="column"
            justifyContent="center"
            gap="2rem"
            width={{ base: "100%", md: "80%", xl: "60%" }}
          >
            <Heading fontSize={headingFontSize} fontWeight={500}>
              Pamtech Oil and Gas
            </Heading>
            <Text fontWeight={500} width="60%" textAlign="justify">
              With our unadulterated and petroleum products, you will experience
              zero downtime and low maintenance costs for your equipments and
              facilities.
            </Text>
            <ButtonMain text="Read More" />
          </Flex>
        </Box>
        <Box my="6rem">
          <Heading
            mb="4rem"
            textAlign="center"
            fontSize={headingFontSize}
            fontWeight={500}
            color="#2C2B2B"
          >
            Brand Showcase
          </Heading>
          <Flex
            gap=".5rem"
            justifyContent="center"
            flexWrap="wrap"
            padding={contentPadding}
          >
            <Image
              src={oilgas1}
              alt="ride1"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Image
              src={oilgas2}
              alt="ride1"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Image
              src={oilgas3}
              alt="ride1"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Flex>
        </Box>
        <VStack
          align="left"
          my="4rem"
          padding={contentPadding}
          width={{ base: "100%", md: "70%", lg: "50%" }}
        >
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Oil & Gas
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="justify">
            <Text color="textGrey" fontSize={textFontSize}>
              {`With diversified interests in the Nigerian economy, Pamtech Oil &
              Gas was incorporated in May 2016 as a direct answer to the
              emerging trends in the dynamic oil and gas industry. We are
              committed to being the trusted source for premium petroleum
              products, ensuring that every drop of fuel we deliver meets the
              highest industry standards. We understand fuel's critical role in
              powering industries, businesses, and everyday life, which is why
              we prioritize value and reliability in every transaction.`}
            </Text>
            <Text color="textGrey" fontSize={textFontSize}>
              At Pamtech Oil & Gas, excellence is a way of life. We are bridging
              the gap in the marketing and distribution of quality petroleum
              products and other value added support services critical to the
              oil and gas industry through the deployment of creative and
              innovative solutions making petroleum products and services more
              accessible and affordable. With our pure, unadulterated petroleum
              products you will experience zero downtime and low maintenance
              costs for your equipments.
            </Text>
          </Flex>
        </VStack>
        <Sustainability />
        <Footer />
      </Box>
    </>
  );
};

export default OilGas;
