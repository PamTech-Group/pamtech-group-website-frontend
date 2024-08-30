import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import oilandGas from "../../../public/oil&gas.webp";
import banking from "../../../public/banking.webp";
import health from "../../../public/health.webp";
import media from "../../../public/mediaIndustries.webp";
import government from "../../../public/government.webp";
import you from "../../../public/you.webp";
const Industries = () => {
  const industries = [
    {
      image: oilandGas,
      title: "Oil and Gas",
      description:
        "Pamtech Group is deeply integrated into the oil and gas industry, providing premium petroleum products and essential services that are vital for the sector's operations.",
    },
    {
      image: banking,
      title: "Banking",
      description:
        "Our tailored services include fuel supply for ATMs and bank branches, as well as vehicle maintenance for bank fleets.",
    },
    {
      image: health,
      title: "Health Care",
      description:
        "Pamtech Group provides reliable fuel for healthcare emergency generators and maintains ambulances, ensuring critical equipment and medical vehicles are always ready for emergencies.",
    },
    {
      image: media,
      title: "Media",
      description:
        "In the media industry, content is king, and our expert team helps clients build brand presence and drive engagement with creative, results-driven strategies.",
    },
    {
      image: government,
      title: "Government Parastals",
      description:
        "Pamtech Group supplies premium petroleum products and essential services to government parastatals, ensuring smooth and efficient operations.",
    },
    {
      image: you,
      title: "Business Owners",
      description:
        "We also supply premium petroleum products and services to individual businesses, ensuring operational efficiency and reliable fuel solutions.",
    },
  ];
  return (
    <>
      {/* Industries Section */}
      <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
        <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
          Industries We Serve
        </Text>
        <Text color="#171717" fontSize="2.5rem" fontWeight={500}>
          Industries that trust our services
        </Text>
        <Text color="textGrey" fontSize="1.2rem">
        Our deep expertise across various fields allows us to deliver top-quality services and products that drive efficiency, innovation, and sustainable growth.

        </Text>
      </VStack>
      {/* Cards*/}
      <Flex padding="2rem 8rem" gap="4rem">
        <Marquee>
          {industries.map((industry) => (
            <Flex
              key={industry.title}
              width="20rem"
              height="24rem" // Set a fixed height for the card
              mx="1rem"
              borderRadius="lg"
              flexDirection="column"
              justifyContent="space-between" // Distribute space evenly
              bgColor="rgba(241, 241, 248, .4)"
              outline="1px solid rgba(141, 139, 139, .4)">
              <Flex
                flexDirection="column"
                padding="1rem 1.5rem"
                gap="1rem"
                flexGrow={1} // Allow the text content to grow and shrink as needed
                overflow="hidden" // Hide overflow content
              >
                <Text color="#171717" fontWeight={500} fontSize="1.5rem">
                  {industry.title}
                </Text>
                <Text color="textGrey" noOfLines={5}>
                  {" "}
                  {/* Limit description to 3 lines */}
                  {industry.description}
                </Text>
              </Flex>
              <Box mt="auto">
                {" "}
                {/* Ensures the image is at the bottom */}
                <Image src={industry.image} alt={industry.title} />
              </Box>
            </Flex>
          ))}
        </Marquee>
      </Flex>
    </>
  );
};

export default Industries;
