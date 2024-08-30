import { Image } from "@chakra-ui/next-js";
import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

// Images
import autoland from "../../../public/autoland.webp";
import petrolpadi from "../../../public/petrolPadi.webp";
import media from "../../../public/media.webp";
import petrol from "../../../public/petrol.webp";
import ride from "../../../public/ride.webp";
import repair from "../../../public/spare-part.webp";
import service1 from "../../../public/service1.webp";
import service2 from "../../../public/service2.webp";
import service3 from "../../../public/service3.webp";
import service4 from "../../../public/service4.webp";
import service5 from "../../../public/service5.webp";
import service6 from "../../../public/service6.webp";
import Sustainability from "../minor/Sustainability";
import Link from "next/link";
import Industries from "../minor/Industries";
import Marquee from "react-fast-marquee";

// Data for services, images, and industries
const services = [
  { icon: autoland, title: "Autoland" },
  { icon: petrol, title: "Oil and Gas" },
  { icon: repair, title: "Auto part" },
  { icon: media, title: "Media" },
  { icon: ride, title: "Ride" },
  { icon: petrolpadi, title: "Petrol Padi" },
];

const images = [
  {
    image: service2,
    title: "Oil & Gas",
    description:
      "Experience zero downtime and reduced maintenance costs with our pure petroleum products.",
  },
  {
    image: service3,
    title: "Autoland",
    description:
      "Pamtech Autoland is your one-stop solution for quality auto repairs and maintenance.",
  },
  {
    image: service4,
    title: "Autoparts",
    description:
    "Get all the genuine OEM parts at the right price and without stress.",
  },
  {
    image: service5,
    title: "Media",
    description:
    "Pamtech Media is your go-to hub for content creation and digital marketing, helping brands grow and connect with their audience online.",
  },
  {
    image: service1,
    title: "Ride",
    description:
      "Experience luxury and comfort with Pamtech Luxury Ride's premium vehicles for all your personal and corporate needs.",
  },
  {
    image: service6,
    title: "Foundation",
    description:
      "The Pamtech Foundation is guided by a core vision: Giving hope and sharing love to humanity.",
  },
];

// Services component
const Services = () => {
  return (
    <>
      <Box marginTop="10rem" mb="4rem">
        {/* Service Icons */}
        <Flex gap={10} justifyContent="space-between" padding="2rem 8rem">
          {services.map((service) => (
            <Flex
              key={service.title}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="1rem"
              bgColor="#F7F7F7"
              boxShadow="md"
              padding="1rem 3rem"
              borderRadius="lg">
              <Image height={50} src={service.icon} alt={service.title} />
              <Text textAlign="center" color="#0E0E0F" fontWeight="bold">
                {service.title}
              </Text>
            </Flex>
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
            multiple industries indicates our determination to cater to our
            vision of empowering success through committed service to humanity. 
          </Text>
        </VStack>

        {/* Services Image Grid */}
        <Box padding='2rem 8rem'>

        <Marquee>
          <Flex
            my="4rem"
            gap={5}
            padding={5}>
            {images.map((image) => (
              <Box
                key={image.title}
                position="relative"
                bgImage={`url(${image.image.src})`}
                borderRadius="lg"
                bgSize="cover"
                bgPosition="center"
                height="450px"
                width="300px"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                padding="1rem"
                color="white"
                _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}>
                <Text fontSize="1.5rem" fontWeight={500} mb="2.5rem">
                  {image.title}
                </Text>
                <Text fontSize="1rem">{image.description}</Text>
                <Link href="#" color="#F7F7F7" className="read-more">
                  Read More <BsArrowRight fontSize="1.5rem" />
                </Link>
              </Box>
            ))}
          </Flex>
        </Marquee>
        </Box>
      </Box>
      {/* Industries section */}
      <Industries />
      {/* Sustainability Section */}
      <Box>
        <Sustainability />
      </Box>
    </>
  );
};

export default Services;
