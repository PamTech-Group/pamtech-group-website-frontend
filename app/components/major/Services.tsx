import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const services = [
  { icon: "/autoland-icon.png", title: "Autoland" },
  { icon: "/oil-gas-icon.png", title: "Oil and Gas" },
  { icon: "/auto-part-icon.png", title: "Auto part" },
  { icon: "/media-icon.png", title: "Media" },
  { icon: "/ride-icon.png", title: "Ride" },
];

const Services = () => {
  return (
    <Box bg="gray.200" p={10}>
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={10}>
        {services.map((service) => (
          <VStack key={service.title} spacing={4}>
            <img src={service.icon} alt={service.title} />
            <Text>{service.title}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
