"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import foundationBg from "../../public/foundationBg.webp";
import foundation1 from "../../public/foundation1.webp";
import foundation2 from "../../public/foundation2.webp";
import foundation3 from "../../public/foundation3.webp";
import bg3 from "../../public/bg3.png";
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

const Foundation = () => {
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
          backgroundImage={`url(${foundationBg.src})`}
          bgSize="cover"
          bgPosition="center"
          minHeight={{ base: "auto", md: "100vh" }}
          color="#F7F7F7">
          <Nav />
          <Flex
           height={{ base: "auto", md: "calc(100vh - 80px)" }}
            flexDir="column"
            justifyContent="center"
            gap="2rem"
            width={{ base: "100%", md: "70%", lg: "50%" }}
            paddingY={{ base: "4rem", md: "0" }}>
            <Heading fontSize={headingFontSize} fontWeight={500}>
              Pamtech Foundation
            </Heading>
            <Text fontWeight={500} width={{ base: "100%", md: "80%", xl: '60%' }} textAlign="justify" fontSize={textFontSize}>
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
            <Image src={foundation1} alt="foundation1" style={{ maxWidth: '100%', height: 'auto' }}/>
            <Image src={foundation2} alt="ride1" style={{ maxWidth: '100%', height: 'auto' }}/>
            <Image src={foundation3} alt="ride1" style={{ maxWidth: '100%', height: 'auto' }}/>
          </Flex>
        </Box>
        <VStack align="left" my="4rem" padding={contentPadding} width={{ base: "100%", md: "70%", lg: "50%" }}>
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Foundation
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="justify">
            <Text color="textGrey" fontSize={textFontSize}>
              Lorem ipsum dolor sit amet consectetur. Vulputate amet vel lorem
              eu pellentesque iaculis elementum purus. Enim ornare quis praesent
              nunc elit quam mauris elementum a. Porttitor iaculis platea nulla
              quis molestie urna. Lacus egestas ullamcorper aliquet cursus
              pharetra.
            </Text>
            <Text color="textGrey" fontSize={textFontSize}>
              Lorem ipsum dolor sit amet consectetur. Vulputate amet vel lorem
              eu pellentesque iaculis elementum purus. Enim ornare quis praesent
              nunc elit quam mauris elementum a. Porttitor iaculis platea nulla
              quis molestie urna. Lacus egestas ullamcorper aliquet cursus
              pharetra.
            </Text>
          </Flex>
        </VStack>
        <Sustainability />
        <Footer />
      </Box>
    </>
  );
};

export default Foundation;
