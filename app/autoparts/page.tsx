"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import gasBg from "../../public/gasBg.png";
import parts1 from "../../public/parts1.png";
import parts2 from "../../public/parts2.png";
import parts3 from "../../public/parts3.png";
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

const Autoparts = () => {
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
              Pamtech Autoparts
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
            <Image src={parts1} alt="parts1" />
            <Image src={parts2} alt="parts2" />
            <Image src={parts3} alt="parts3" />
          </Flex>
        </Box>
        <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
          <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
            Autoparts
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="justify">
            <Text color="textGrey" fontSize="1.2rem">
               Pamtech Autoparts offers a wide selection of quality OEM
              autoparts for vehicle repair, maintenance, servicing, and
              replacement as well as accessories, — all at extremely competitive
              prices. Paired with our fast shipping, we prioritize authenticity
              and quality, so every part in our inventory meets the
              manufacturer's specifications, giving you confidence in the
              performance and durability of your equipment.
            </Text>
            <Text color="textGrey" fontSize="1.2rem">
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
