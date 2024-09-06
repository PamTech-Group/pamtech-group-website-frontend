"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import landBg from "../../public/landBg.webp";
import land1 from "../../public/land1.webp";
import land2 from "../../public/land2.webp";
import land3 from "../../public/land3.webp";
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Footer from "../components/major/Footer";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import ButtonMain from "../components/minor/ButtonMain";

const Autoland = () => {
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
          backgroundImage={`url(${landBg.src})`}
          bgSize="cover"
          bgPosition="center"
          minHeight={{   base:'100vh', md: '65vh', xl: "100vh" }}

          color="#F7F7F7"
        >
          <Nav />
          <Flex
                     height={{   base:'100vh', md: '65vh', xl: "100vh" }}

            flexDir="column"
            justifyContent="center"
            gap="2rem"
            width={{ base: "100%", md: "70%" }}
            paddingY={{ base: "4rem", md: "0" }}
            pl={{
              base: 'unset',
              myxl: '3.5rem'
            }}
            data-aos="zoom-in"
          >
            <Heading fontSize={headingFontSize} fontWeight={500}>
              Pamtech Autoland
            </Heading>
            <Text
              fontWeight={500}
              width={{ base: "100%", xl: "80%" }}
              textAlign="left"
              fontSize={textFontSize}
            >
              Pamtech Autoland is your one-stop solution for quality auto
              repairs and maintenance. 
            </Text>
            <ButtonMain linkHref="autoland" text="Read More" />
          </Flex>
        </Box>
        <Box  my={{
            base:'2rem',
            md: '3rem',
            myxl: '6rem'
          }}>
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
          <SimpleGrid
            gap=".5rem"
            placeItems="center"
            columns={{base:1, lg:2, xl:3}}
            padding={contentPadding}
          >
            <Image
              src={land1}
              alt="land1"
              style={{ maxWidth: "100%", height: "auto" }}
              data-aos="zoom-in"
            />
            <Image
              src={land2}
              alt="land2"
              style={{ maxWidth: "100%", height: "auto" }}
              data-aos="zoom-in"
            />
            <Image
              src={land3}
              alt="land3"
              style={{ maxWidth: "100%", height: "auto" }}
              data-aos="zoom-in"
            />
          </SimpleGrid>
        </Box>
        <VStack
        id="autoland"
          align="left"
          my={{
            base: "1rem",
            md: "2rem",
            myxl: "4rem",
          }}
          padding={contentPadding}
          width={{ base: "100%", md: "80%" }}
          data-aos="zoom-in-right"
        >
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Autoland
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="left">
            <Text color="textGrey" fontSize={textFontSize}>
              Pamtech Autoland is your one-stop solution for quality autoparts,
              auto maintenance, and repairs. We take extra care of your car to
              keep your vehicle in top condition, and we go the extra mile to
              ensure you are safe on the road. Using the latest technology, we
              deliver the finest in full-service automobile maintenance and
              repair services.
            </Text>
            <Text color="textGrey" fontSize={textFontSize}>
              {` Our team of expert mechanics and technicians have the experience
              to diagnose, maintain, and repair your vehicles. Whether it's
              computer diagnostics, engine repair, suspension and transmission
              systems, electrical systems, air conditioning service and repair,
              auto body shop, and spray painting of all vehicle types, trust
              Pamtech Autoland to give your car the care and precision it
              deserves. `}
            </Text>
          </Flex>
        </VStack>
        <Sustainability />
        <Footer />
      </Box>
    </>
  );
};

export default Autoland;
