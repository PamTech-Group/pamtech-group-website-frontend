"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import gasBg from "../../public/gasBg.png";
import oilgas1 from "../../public/oilgas1.png";
import oilgas2 from "../../public/oilgas2.png";
import oilgas3 from "../../public/oilgas3.png";
import bg3 from "../../public/bg3.png";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/major/Footer";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";

const OilGas = () => {
  return (
    <>
      <Box bgColor="#F7F7F7">
        <Box
          padding="2rem 8rem"
          backgroundImage={`url(${gasBg.src})`}
          bgSize="cover"
          bgPosition="center"
          height="100vh"
          color="#F7F7F7">
          <Nav />
          <Flex
            height="100%"
            flexDir="column"
            justifyContent="center"
            gap="2rem"
            width="50%">
            <Heading fontSize="3rem" fontWeight={500}>
              Pamtech Oil and Gas
            </Heading>
            <Text fontWeight={500} width="60%" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ac elit
              ullamcorper nibh in. Id pretium amet sem eli t nunc maecenas at
              facilisi. nibh
            </Text>
            <Button
              width="fit-content"
              padding={theme.buttonPadding}
              bgColor="primaryOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              borderRadius={theme.buttonRadius.radius}
              rightIcon={<BiChevronRight fontSize="2rem" />}>
              Talk to us
            </Button>
          </Flex>
        </Box>
        <Box my="6rem">
          <Heading
            mb="4rem"
            textAlign="center"
            fontSize="2.5rem"
            fontWeight={500}
            color="#2C2B2B">
            Brand Showcase
          </Heading>
          <Flex gap=".5rem" justifyContent="center">
            <Image src={oilgas1} alt="ride1" />
            <Image src={oilgas2} alt="ride1" />
            <Image src={oilgas3} alt="ride1" />
          </Flex>
        </Box>
        <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
          <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
            Oil & Gas
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="justify">
            <Text color="textGrey" fontSize="1.2rem">
              {`With diversified interests in the Nigerian economy, Pamtech Oil &
              Gas was incorporated in May 2016 as a direct answer to the
              emerging trends in the dynamic oil and gas industry. We are
              committed to being the trusted source for premium petroleum
              products, ensuring that every drop of fuel we deliver meets the
              highest industry standards. We understand fuel's critical role in
              powering industries, businesses, and everyday life, which is why
              we prioritize value and reliability in every transaction.`}
            </Text>
            <Text color="textGrey" fontSize="1.2rem">
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
