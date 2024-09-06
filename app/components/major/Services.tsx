import { Image } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
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
  { icon: petrol, title: "Oil and Gas" },
  { icon: autoland, title: "Autoland" },
  { icon: repair, title: "Autoparts" },
  { icon: media, title: "Media" },
  { icon: ride, title: "Luxury Ride" },
  { icon: petrolpadi, title: "Petrol Padi" },
];

const images = [
  {
    image: service4,
    title: "Oil & Gas",
    description:
      "Experience zero downtime and reduced maintenance with our high-quality petroleum products.",
    linkHref: "/oilgas",
  },
  {
    image: service3,
    title: "Autoland",
    description:
      "Pamtech Autoland is your one-stop solution for quality auto repairs and maintenance.",
    linkHref: "/autoland",
  },
  {
    image: service2,
    title: "Autoparts",
    description:
      "Get all the genuine OEM parts at the right price and without stress.",
    linkHref: "/autoparts",
  },
  {
    image: service5,
    title: "Media",
    description:
      "Pamtech Media enhances brand engagement with key content and marketing services.",
    linkHref: "/media",
  },
  {
    image: service1,
    title: "Ride",
    description:
      "Pamtech Luxury Ride: Premium vehicles for personal and corporate needs.",
    linkHref: "/ride",
  },
  {
    image: service6,
    title: "Foundation",
    description: `The Pamtech Foundation’s core vision is to give hope and share love with humanity.`,
    linkHref: "/foundation",
  },
];

// Services component
const Services = () => {
  const serviceIconsDisplay = useBreakpointValue({ base: "flex", md: "flex" });
  const contentPadding = useBreakpointValue({
    base: "1rem",
    sm: "1.5rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });
  const descriptionWidth = useBreakpointValue({
    base: "100%",
    md: "70%",
  });
  const headingFontSize = useBreakpointValue({
    base: "1.5rem",
    md: "2rem",
    lg: "2.5rem",
  });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.2rem" });

  return (
    <>
      <Box
        marginTop={{
          base: "2rem",
          md: "2.5rem",
          xl: "8rem",
          dxl: "10rem",
        }}
        mb={{
          base: "2rem",
          myxl: "4rem",
        }}
        id="services"
      >
        {/* Service Icons */}
        <Grid
          data-aos="zoom-in"
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(6, 1fr)",
            lg: "repeat(6, 1fr)",
          }} // Responsive grid
          gap={{ base: 4, md: 6, lg: 10 }} // Responsive gap
          padding={contentPadding}
          mb={{ base: 4, lg: 0 }}
        >
          {services.map((service) => (
            <Flex
              key={service.title}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap=".5rem"
              bgColor="#F7F7F7"
              boxShadow="md"
              padding={{
                base: "0.5rem 1rem",
                md: "1rem ",
                lg: "1rem",
              }}
              borderRadius="lg"
            >
              <Image height={30} src={service.icon} alt={service.title} />
              <Text
                textAlign="center"
                color="#0E0E0F"
                fontWeight="bold"
                fontSize={textFontSize}
              >
                {service.title}
              </Text>
            </Flex>
          ))}
        </Grid>

        {/* Services Description */}
        <VStack
        data-aos="zoom-in-right"
          align="left"
          my={{
            base: "1rem",
            md: "2rem",
            myxl: "4rem",
          }}
          padding={contentPadding}
          width={descriptionWidth}
        >
          <Text fontWeight={500} fontSize={textFontSize} color="primaryOrange">
            Our Businesses
          </Text>
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Explore Our Businesses
          </Text>
          <Text color="textGrey" fontSize={textFontSize}>
            As a diversified and fully integrated conglomerate, our interest in
            multiple industries indicates our determination to cater to our
            vision of empowering success through committed service to humanity.
          </Text>
        </VStack>

        {/* Services Image Grid */}
        <Box padding={contentPadding} data-aos="zoom-in" >
          <Marquee gradientWidth={50}>
            <Flex
              my={{
                base: "1rem",
                myxl: "4rem",
              }}
              gap={5}
              padding={5}
            >
              {images.map((image) => (
                <Box
                  key={image.title}
                  position="relative"
                  bgImage={`url(${image.image.src})`}
                  borderRadius="lg"
                  bgSize="cover"
                  bgPosition="center"
                  height={{ base: "400px", lg: "450px" }}
                  width={{ base: "275px", lg: "300px" }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  padding="1rem"
                  color="white"
                  _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                >
                  <Flex flexDirection='column'  height="50%">
                    <Text
                      fontSize={{ base: "1.2rem", md: "1.5rem" }}
                      fontWeight={500}
                      mb=".5rem"
                    >
                      {image.title}
                    </Text>
                    <Text fontSize={{ base: "0.9rem", md: "1rem" }}>
                      {image.description}
                    </Text>
                    <Link
                      href={image.linkHref}
                      color="#F7F7F7"
                      className="read-more"
                    >
                      Read More <BsArrowRight fontSize="1.5rem" />
                    </Link>
                  </Flex>
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
