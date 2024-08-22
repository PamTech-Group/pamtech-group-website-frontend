import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
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
import oilandGas from "../../../public/oil-gas.png";
import banking from "../../../public/banking.png";
import health from "../../../public/health.png";
import mediapg from "../../../public/mediapg.png";

import { BsArrowRight } from "react-icons/bs";
import theme from "@/app/theme";
import { BiChevronRight } from "react-icons/bi";
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

const industries = [
  {
    image: oilandGas,
    title: "oil and gas",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor accumsan duis faucibus mauris vitae leo duis",
  },
  {
    image: banking,
    title: "Banking",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor accumsan duis faucibus mauris vitae leo duis",
  },
  {
    image: health,
    title: "Health Care",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor accumsan duis faucibus mauris vitae leo duis",
  },
  {
    image: health,
    title: "Media",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor accumsan duis faucibus mauris vitae leo duis",
  },
];

const Services = () => {
  return (
    <Box marginTop="10rem" mb="4rem">
      <Flex gap={10} justifyContent="space-between" padding="2rem 8rem">
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
      <VStack align="left" my="4rem" padding="2rem 8rem">
        <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
          Our Services
        </Text>
        <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
          Explore Our Services
        </Text>
        <Text color="textGrey" fontSize="1.2rem">
          Lorem ipsum dolor sit amet consectetur. Fringilla sagittis justo{" "}
          <br />
          nulla a. Morbi sed consectetur porta vitae ullamcorper. Odio at.
        </Text>
      </VStack>

      <SimpleGrid my="4rem" columns={[1, 2, 4]} spacing={5} padding="2rem 8rem">
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
        my="4rem"
        padding="4rem 8rem"
        gap="2rem"
        bgImage={`url(${bg3.src})`}
        bgSize="cover"
        bgPosition="center"
        width="100%"
        color="#F7F7F7">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Flex width="50%" flexDirection="column" gap="2rem">
            <Text fontWeight={300}> Sustainability</Text>
            <Text fontWeight={500} fontSize="2.5rem">
              Building Prosperity and Self-Sufficiency
            </Text>
            <Text fontWeight={300} fontSize="1.2rem">
              Lorem ipsum dolor sit amet consectetur. Blandit arcu pellentesque
              adipiscing adipiscing feugiat nunc varius sed tincidunt. Ultricies
              dign
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
              rightIcon={
                <BiChevronRight fontSize="2rem" className="arrow-icon" />
              }>
              Read More
            </Button>
          </Flex>
          <Box height="150px" width="0.5px" mx="3rem" bgColor="#F7F7F7" />
          <Flex width="50%" flexDirection="column" gap="2rem">
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
      <VStack align="left" my="4rem" padding="2rem 8rem">
        <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
          Industrial we services
        </Text>
        <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
          Industries that trust <br /> our services 
        </Text>
        <Text color="textGrey" fontSize="1.2rem">
          Pamtech group tailored registrar services,enhancing efficiency <br />{" "}
          and compliance across various industries, including Oil and gas,
          <br /> Media, Auto-part, Autoland.
        </Text>
      </VStack>
      <Flex padding="2rem 8rem" justifyContent="space-between">
        {industries.map((industry) => (
          <Flex
            width="20rem"
            flexDirection="column"
            bgColor="rgba(241, 241, 248, .4)"
            outline="1px solid rgba(141, 139, 139, .4)"
            key={industry.title}>
            <Flex flexDirection="column" padding="1rem 1.5rem" gap="1rem">
              <Text color="#171717" fontWeight={500} fontSize="1.5rem">
                {industry.title}
              </Text>
              <Text color="textGrey">{industry.description}</Text>
            </Flex>

            <Image
              bgSize="100%"
              bgPosition="center"
              src={industry.image}
              alt={industry.title}
            />
          </Flex>
        ))}
      </Flex>
      <VStack align="left" my="4rem" padding="2rem 8rem">
        <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
          Testimonial
        </Text>
        <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
          Trusted by multiple <br /> organisations!
        </Text>
        <Text color="textGrey" fontSize="1.2rem">
          With over 100 businesses experiencing our <br /> impact, this is what
          a few had to say.
        </Text>
      </VStack>
      <Flex
        gap={10}
        padding="2rem 8rem"
        justifyContent="space-between"
        my="4rem">
        <Box
          bgColor="#E3E3E8"
          padding="2rem 1rem"
          width="18rem"
          color="textGrey"
          textAlign="center">
          <Text>
            Lorem ipsum dolor sit amet consectetur. Etiam velit enim semper eget
            elit pretium egestas. Vel molestie mauris ornare tincidunt nibh id
            metus. Scelerisque donec sed vel amet tincidunt aliquet in
          </Text>
        </Box>
        <Box
          bgColor="#E3E3E8"
          padding="2rem 1rem"
          color="textGrey"
          width="18rem"
          textAlign="center">
          <Text>
            Lorem ipsum dolor sit amet consectetur. Etiam velit enim semper eget
            elit pretium egestas. Vel molestie mauris ornare tincidunt nibh id
            metus. Scelerisque donec sed vel amet tincidunt aliquet in
          </Text>
        </Box>
        <Box
          bgColor="#E3E3E8"
          padding="2rem 1rem"
          color="textGrey"
          width="18rem"
          textAlign="center">
          <Text>
            Lorem ipsum dolor sit amet consectetur. Etiam velit enim semper eget
            elit pretium egestas. Vel molestie mauris ornare tincidunt nibh id
            metus. Scelerisque donec sed vel amet tincidunt aliquet in
          </Text>
        </Box>
        <Box
          bgColor="#E3E3E8"
          padding="2rem 1rem"
          color="textGrey"
          width="18rem"
          textAlign="center">
          <Text>
            Lorem ipsum dolor sit amet consectetur. Etiam velit enim semper eget
            elit pretium egestas. Vel molestie mauris ornare tincidunt nibh id
            metus. Scelerisque donec sed vel amet tincidunt aliquet in
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;
