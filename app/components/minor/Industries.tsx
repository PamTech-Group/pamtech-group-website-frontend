import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import oilandGas from "../../../public/oil-gas.png";
import banking from "../../../public/banking.png";
import health from "../../../public/health.png";

const Industries = () => {
  const industries = [
    {
      image: oilandGas,
      title: "Oil and Gas",
      description:
        "Pamtech Group is a key player in the oil and gas sector, offering high-quality petroleum products and essential services for smooth industry operations.",
    },
    {
      image: banking,
      title: "Banking",
      description:
        "Their specialized services include fuel supply for ATMs, bank branches, and vehicle maintenance for bank fleets, ensuring seamless business operations.",
    },
    {
      image: health,
      title: "Health Care",
      description:
        "Pamtech ensures hospitals have reliable fuel for emergency generators and maintains ambulances to be always ready for emergencies.",
    },
    {
      image: health,
      title: "Media",
      description:
        "In the media industry, Pamtech helps clients build brand presence and engage their audience with creative, results-driven strategies.",
    },
    {
      image: health,
      title: "Government Parastals",
      description:
        "Pamtech Group is crucial to the oil and gas industry, delivering premium petroleum products and vital services that support operational efficiency.",
    },
    {
      image: health,
      title: "You",
      description:
        "They provide auto repair services and quality parts, enhancing vehicle performance for individual and business customers while also offering reliable transportation solutions.",
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
          Pamtech group tailored registrar services, enhancing efficiency and
          compliance across various industries.
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
              mx="3rem"
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
