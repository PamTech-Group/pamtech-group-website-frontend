"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import rideBg from "../../public/rideBg.webp";
import ride1 from "../../public/ride1.webp";
import ride2 from "../../public/ride2.webp";
import ride3 from "../../public/ride3.webp";
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

const Ride = () => {
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
      <Box bgColor="#F7F7F7">
        <Box
          padding={contentPadding}
          backgroundImage={`url(${rideBg.src})`}
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
            width={{ base: "100%", md: "80%" }}
            paddingY={{ base: "4rem", md: "0" }}
            pl={{
              base: 'unset',
              myxl: '3.5rem'
            }}
            data-aos="zoom-in"

          >
            <Heading fontSize={headingFontSize} fontWeight={500}>
              Pamtech Luxury Ride
            </Heading>
            <Text
              fontWeight={500}
              width={{ base: "100%", md: "80%" }}
              textAlign="left"
              fontSize={textFontSize}
            >
              Experience luxury and comfort with Pamtech Luxury Ride. We offer a
              fleet of premium vehicles for your personal or corporate needs,
              ensuring a stylish ride every time.
            </Text>
            <ButtonMain linkHref="#ride" text="Read More" />
          </Flex>
        </Box>
        <Box   my={{
                base: "1rem",
                md: "2rem",
                myxl: "4rem",
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
              src={ride1}
              alt="ride1"
              style={{ maxWidth: "100%", height: "auto" }}  data-aos="zoom-in"
            />
            <Image
              src={ride2}
              alt="ride1"
              style={{ maxWidth: "100%", height: "auto" }}  data-aos="zoom-in"
            />
            <Image
              src={ride3}
              alt="ride1"
              style={{ maxWidth: "100%", height: "auto" }}  data-aos="zoom-in"
            />
          </SimpleGrid>
        </Box>
        <VStack
          id="ride"
          align="left"
          my={{
            base: "1rem",
            md: "2rem",
            myxl: "4rem",
          }}
          padding={contentPadding}
          width={{ base: "100%", md: "75%"}}
          data-aos="zoom-in-right" >
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Luxury Ride
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="left">
            <Text color="textGrey" fontSize={textFontSize}>
              {` Pamtech Luxury Ride redefines elegance and comfort with our
              exclusive fleet of premium vehicles, tailored for both personal
              and corporate needs. Whether you’re attending a high-profile
              event, planning a special occasion, or simply seeking an
              exceptional travel experience, our luxury vehicles provide
              unparalleled style and sophistication. Each ride is designed to
              ensure you travel in utmost comfort and arrive in style.`}
            </Text>
            <Text color="textGrey" fontSize={textFontSize}>
              Our commitment to excellence means that every detail is
              meticulously managed, from the quality of our vehicles to the
              professionalism of our drivers. At Pamtech Luxury Ride, we aim to
              make every journey a memorable experience, offering you a seamless
              blend of opulence and convenience. Choose us for your next travel
              experience and indulge in the superior service and refinement that
              define our brand.
            </Text>
          </Flex>
        </VStack>
        <Sustainability />
        <Footer />
      </Box>
    </>
  );
};

export default Ride;
