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
import { BsArrowRight } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import theme from "@/app/theme";

// Images
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
import Sustainability from "../minor/Sustainability";

// Data for services, images, and industries
const services = [
  { icon: autoland, title: "Autoland" },
  { icon: petrol, title: "Oil and Gas" },
  { icon: repair, title: "Auto part" },
  { icon: media, title: "Media" },
  { icon: ride, title: "Ride" },
];

const images = [
  { image: service1, title: "Auto Land" },
  { image: service2, title: "Repairs" },
  { image: service3, title: "Fixes" },
  { image: service4, title: "Media" },
];

const industries = [
  {
    image: oilandGas,
    title: "Oil and Gas",
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

// Services component
const Services = () => {
  return (
    <Box marginTop="10rem" mb="4rem">
      {/* Service Icons */}
      <Flex gap={10} justifyContent="space-between" padding="2rem 8rem">
        {services.map((service) => (
          <VStack
            key={service.title}
            alignItems="center"
            bgColor="#F7F7F7"
            boxShadow="md"
            padding="1rem 4rem"
            borderRadius="lg">
            <Image height={50} src={service.icon} alt={service.title} />
            <Text textAlign="center" color="#0E0E0F" fontWeight="bold">
              {service.title}
            </Text>
          </VStack>
        ))}
      </Flex>

      {/* Services Description */}
      <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
        <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
          Our Services
        </Text>
        <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
          Explore Our Services
        </Text>
        <Text color="textGrey" fontSize="1.2rem">
          As a diversified and fully integrated conglomerate, our interest in
          multiple industries indicates our determination to cater to our vision
          of empowering success through committed service to humanity. 
        </Text>
      </VStack>

      {/* Services Image Grid */}
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
              Read More <BsArrowRight fontSize="1.5rem" />
            </Link>
          </Box>
        ))}
      </SimpleGrid>

      {/* Sustainability Section */}
      <Box mb="4rem">
        <Sustainability />
      </Box>

      {/* Industries Section */}
      <VStack align="left" my="4rem" padding="2rem 8rem">
        <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
          Industries We Serve
        </Text>
        <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
          Industries that trust our services
        </Text>
        <Text color="textGrey" fontSize="1.2rem">
          Pamtech group tailored registrar services, enhancing efficiency and
          compliance across various industries.
        </Text>
      </VStack>
      <Flex padding="2rem 8rem" justifyContent="space-between">
        {industries.map((industry) => (
          <Flex
            key={industry.title}
            width="20rem"
            flexDirection="column"
            bgColor="rgba(241, 241, 248, .4)"
            outline="1px solid rgba(141, 139, 139, .4)">
            <Flex flexDirection="column" padding="1rem 1.5rem" gap="1rem">
              <Text color="#171717" fontWeight={500} fontSize="1.5rem">
                {industry.title}
              </Text>
              <Text color="textGrey">{industry.description}</Text>
            </Flex>
            <Image src={industry.image} alt={industry.title} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
