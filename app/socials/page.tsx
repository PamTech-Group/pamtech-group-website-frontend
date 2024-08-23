"use client";
import { Box, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Nav from "../components/major/Nav";
import Image from "next/image";
import socialsHero from "../../public/socialsBg.webp";
import gallery1 from "../../public/gallery1.webp";
import gallery2 from "../../public/gallery2.webp";
import gallery3 from "../../public/gallery3.webp";
import gallery5 from "../../public/gallery5.webp";
import gallery6 from "../../public/gallery6.webp";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";

const images = [gallery1, gallery2, gallery3, gallery5, gallery6];
const Socials = () => {
  return (
    <Box bgColor="#FFFFFF">
      <Box
        bgPosition="center"
        bgColor="#0F1010"
        height="100vh"
        width="100vw"
        color="#F7F7F7">
        <Box height="inherit" width="inherit" padding="2rem 8rem">
          <Nav />
          <Flex
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent="space-between">
            <Flex
              flexDir="column"
              justifyContent="center"
              gap="2rem"
              width="50%">
              <Heading fontSize="3rem" fontWeight={500}>
                Meet Pamtech Grop
              </Heading>
              <Text width="80%" fontSize="1.2rem">
                With a strong commitment to serving humanity, Pamtech Group has
                built a diverse portfolio in the oil and gas, media, and
                automotive industries.
              </Text>
            </Flex>
            <Flex>
              <Image
                src={socialsHero}
                alt="people of pamtech"
                className="image-style"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box padding={{ base: "2rem", md: "4rem 8rem" }}>
        {/* Gallery Heading */}
        <Heading size="lg" marginBottom="2rem">
          Gallery
        </Heading>

        {/* Gallery Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing="1.5rem"
          justifyItems="center">
          {images.map((image, index) => (
            <Box
              key={index}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              maxW={{ base: "90%", md: "100%" }}>
              <Image src={image} alt={`Gallery Image ${index + 1}`} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
        <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
          Explore our social media platforms
        </Text>
        <Text color="textGrey" fontSize="1.2rem">
          Lorem ipsum dolor sit amet consectetur. Eget est velit senectus nunc
          nulla malesuada dignissim. Adipiscing a lectus urna rhoncus lectus in
          molestie quam. Gravida iaculi
        </Text>
      </VStack>
      <Flex
        my="4rem"
        padding="2rem 8rem"
        justifyContent="space-between"
        wrap="wrap"
        gap="2rem">
        <Flex
          alignItems="center"
          justifyContent="center"
          fontWeight={400}
          fontSize="1.2rem"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="#25D366">
          <Text>Whatsapp</Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontWeight={400}
          fontSize="1.2rem"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="#1877F2">
          <Text> Facebook</Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontWeight={400}
          fontSize="1.2rem"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="#FF0000">
          Youtube
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontWeight={400}
          fontSize="1.2rem"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="#FE2C55">
          Tiktok
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontWeight={400}
          fontSize="1.2rem"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="#CD486B">
          Instagram
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontWeight={400}
          fontSize="1.2rem"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="#171717">
          X
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          fontWeight={400}
          fontSize="1.2rem"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="#0762C8">
          Linkedin
        </Flex>
        {/* <Flex
          alignItems="center"
          borderRadius="2xl"
          height="4rem"
          width="12rem"
          padding="1rem 3rem"
          bgColor="green">
          More
        </Flex> */}
      </Flex>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Socials;
