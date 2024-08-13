import { Image } from "@chakra-ui/next-js";
import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import autoland from "../../../public/autoland.png";
import media from "../../../public/media.png";
import petrol from "../../../public/petrol.png";
import ride from "../../../public/ride.png";
import repair from "../../../public/spare-part.png";

const services = [
  { icon: autoland, title: "Autoland" },
  { icon: petrol, title: "Oil and Gas" },
  { icon: repair, title: "Auto part" },
  { icon: media, title: "Media" },
  { icon: ride, title: "Ride" },
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
    </Box>
  );
};

export default Services;
