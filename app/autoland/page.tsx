"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import landBg from "../../public/landBg.webp";
import land1 from "../../public/land1.webp";
import land2 from "../../public/land2.webp";
import land3 from "../../public/land3.webp";
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
import ButtonMain from "../components/minor/ButtonMain";

const Autoland = () => {
  return (
    <>
      <Box bgColor="#FFFFFF">
        <Box
          padding="2rem 8rem"
          backgroundImage={`url(${landBg.src})`}
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
              Pamtech Autoland
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
            <Image src={land1} alt="land1" />
            <Image src={land2} alt="land2" />
            <Image src={land3} alt="land3" />
          </Flex>
        </Box>
        <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
          <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
            Autoland
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="justify">
            <Text color="textGrey" fontSize="1.2rem">
               Pamtech Autoland is your one-stop solution for quality autoparts,
              auto maintenance, and repairs. We take extra care of your car to
              keep your vehicle in top condition, and we go the extra mile to
              ensure you are safe on the road. Using the latest technology, we
              deliver the finest in full-service automobile maintenance and
              repair services.  
            </Text>
            <Text color="textGrey" fontSize="1.2rem">
              Our team of expert mechanics and technicians have the experience
              to diagnose, maintain, and repair your vehicles. Whether it’s
              computer diagnostics, engine repair, suspension and transmission
              systems, electrical systems, air conditioning service and repair,
              auto body shop, and spray painting of all vehicle types, trust
              Pamtech Autoland to give your car the care and precision it
              deserves. 
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
