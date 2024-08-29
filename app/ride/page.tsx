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
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/major/Footer";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import ButtonMain from "../components/minor/ButtonMain";

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
            <ButtonMain text="Talk to us" />
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
          <Flex flexDirection="column" gap="1.5rem" textAlign="justify">
            <Text color="textGrey" fontSize="1.2rem">
              Pamtech Luxury Ride redefines elegance and comfort with our
              exclusive fleet of premium vehicles, tailored for both personal
              and corporate needs. Whether you’re attending a high-profile
              event, planning a special occasion, or simply seeking an
              exceptional travel experience, our luxury vehicles provide
              unparalleled style and sophistication. Each ride is designed to
              ensure you travel in utmost comfort and arrive in style.
            </Text>
            <Text color="textGrey" fontSize="1.2rem">
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
