import { Image, Link } from "@chakra-ui/next-js";
import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import autoland from "../../../public/autoland.png";
import media from "../../../public/media.png";
import petrol from "../../../public/petrol.png";
import ride from "../../../public/ride.png";
import repair from "../../../public/spare-part.png";
import service1 from "../../../public/service1.jpg";
import service2 from "../../../public/service2.jpg";
import service3 from "../../../public/service3.jpg";
import service4 from "../../../public/service4.png";
import bg3 from "../../../public/bg3.png";
import { BsArrowRight } from "react-icons/bs";
const services = [
  { icon: autoland, title: "Autoland" },
  { icon: petrol, title: "Oil and Gas" },
  { icon: repair, title: "Auto part" },
  { icon: media, title: "Media" },
  { icon: ride, title: "Ride" },
];

const images = [
  { image: service1, title: "auto land" },
  { image: service2, title: "repairs" },
  { image: service3, title: "fixes" },
  { image: service4, title: "media" },
  // { image: "", title: "" },
];

const Services = () => {
  return (
    <Box marginTop="10rem">
      <Flex gap={10} justifyContent="center">
        {services.map((service) => (
          <VStack
            flexDir="column"
            key={service.title}
            gap={5}
            alignItems="center"
            bgColor="#E4E5EA"
            padding="1rem 4rem">
            <Image height={50} src={service.icon} alt={service.title} />
            <Text textAlign="center" color="#0E0E0F" fontWeight="bold">
              {service.title}
            </Text>
          </VStack>
        ))}
      </Flex>
      <VStack align="left" my="4rem">
        <Text color="primaryOrange">Our Services</Text>
        <Text color="#171717">Explore Our Services</Text>
        <Text color="textGrey">
          Lorem ipsum dolor sit amet consectetur. Fringilla sagittis justo{" "}
          <br />
          nulla a. Morbi sed consectetur porta vitae ullamcorper. Odio at.
        </Text>
      </VStack>
      {/* <Flex gap={10} justifyContent="center" my="3rem">
        {images.map((image) => (
          <Box
            key={image.title}
            position="relative"
            overflow="hidden"
            width="260px"
            height="320px">
            <Image src={image.image} alt={image.title} />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p="4"
              bg="rgba(0, 0, 0, 0.2)"
              color="white">
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet consectetur. Blandit arcu
                pellentesque adipiscing.
              </Text>
              <Text mt="2rem" fontSize="sm" fontWeight="bold">
                Read more →
              </Text>
            </Box>
          </Box>
        ))}
      </Flex> */}
      <SimpleGrid columns={[1, 2, 4]} spacing={5} padding="2rem">
        {images.map((image) => (
          <Box
            key={image.title}
            position="relative"
            bgImage={`url(${image.image.src})`}
            bgSize="cover"
            bgPosition="center"
            height="500px"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            padding="1rem"
            color="white"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}>
            <Text fontSize="lg" fontWeight="bold">
              {image.title}
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur. Blandit arcu pellentesque
              adipiscing.
            </Text>
            <Link
              href="#"
              color="#F7F7F7"
              display="flex"
              alignItems="center"
              gap=".5rem"
              mt="2rem">
              Read More <BsArrowRight color="#F7F7F7" fontSize="1.5rem" />
            </Link>
          </Box>
        ))}
      </SimpleGrid>
      <Flex
        justifyContent="center"
        padding="3rem 2rem"
        gap="2rem"
        bgImage={`url(${bg3.src})`}
        bgSize="cover"
        bgPosition="center"
        width="100%">
        <Flex width="49%" alignItems="center">
          <Flex flexDirection="column" gap="2rem">
            <Text>Sustainability</Text>
            <Text>
              Building Prosperity <br /> and Self-Sufficiency
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Blandit <br /> arcu
              pellentesque adipiscing adipiscing feugiat <br /> nunc varius sed
              tincidunt. Ultricies dign
            </Text>
            <Link
              href="#"
              color="primaryOrange"
              display="flex"
              alignItems="center"
              gap=".5rem">
              Read More <BsArrowRight color="#F7F7F7" fontSize="1.5rem" />
            </Link>
          </Flex>
          <Box height="150px" width="0.5px" mx="3rem" bgColor="#F7F7F7" />
          <Flex width="49%" flexDirection="column" gap="2rem">
            <Text>7 Sustainabilty Pillers</Text>
            <SimpleGrid columns={4} rowGap="5" columnGap={8}>
              <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
              <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
              <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
              <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
              <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
              <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
              <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <VStack align="left" my="4rem">
        <Text color="primaryOrange">Our Services</Text>
        <Text color="#171717">Explore Our Services</Text>
        <Text color="textGrey">
          Pamtech group tailored registrar services,enhancing efficiency <br />{" "}
          and compliance across various industries, including Oil and gas,
          <br /> Media, Auto-part, Autoland.
        </Text>
      </VStack>
    </Box>
  );
};

export default Services;
