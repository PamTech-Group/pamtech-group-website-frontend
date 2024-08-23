"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import rideBg from "../../public/rideBg.png";
import ride1 from "../../public/ride1.png";
import ride2 from "../../public/ride2.png";
import ride3 from "../../public/ride3.png";
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

const Ride = () => {
  return (
    <>
      <Box bgColor="#F7F7F7">
        <Box
          padding="2rem 8rem"
          backgroundImage={`url(${rideBg.src})`}
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
              Pamtech Luxury Ride
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
            <Image src={ride1} alt="ride1" />
            <Image src={ride2} alt="ride1" />
            <Image src={ride3} alt="ride1" />
          </Flex>
        </Box>
        <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
          <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
            Luxury Ride
          </Text>
          <Text color="textGrey" fontSize="1.2rem">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet vel lorem eu
            pellentesque iaculis elementum purus. Enim ornare quis praesent nunc
            elit quam mauris elementum a. Porttitor iaculis platea nulla quis
            molestie urna. Lacus egestas ullamcorper aliquet cursus pharetra.
            Lorem ipsum dolor sit amet consectetur. Vulputate amet vel lorem eu
            pellentesque iaculis elementum purus. Enim ornare quis praesent nunc
            elit quam mauris elementum a. Porttitor iaculis platea nulla quis
            molestie urna. Lacus egestas ullamcorper aliquet cursus pharetra.
          </Text>
        </VStack>
        <Sustainability />
        <Footer />
      </Box>
    </>
  );
};

export default Ride;
