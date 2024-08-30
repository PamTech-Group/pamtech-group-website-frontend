import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import sp1 from "../../../public/SPpeople.webp";
import sp2 from "../../../public/SPphilosophy.webp";
import sp3 from "../../../public/SPplace.webp";
import sp4 from "../../../public/SPpartners.webp";
import sp5 from "../../../public/SPpolicy.webp";
import sp6 from "../../../public/SPpromotion.webp";
import sp7 from "../../../public/SPprogress.webp";
import bg3 from "../../../public/bg3.png";
import Image from "next/image";
import theme from "@/app/theme";
import ButtonMain from "./ButtonMain";

const sustainabilityPillars = [
  {
    image: sp1,
    text: "People",
    description:
      "Pamtech ensures its people are at the heart of all operations.",
  },
  {
    image: sp2,
    text: "Philosophy",
    description:
      "Our guiding philosophy drives sustainability in every sector.",
  },
  {
    image: sp3,
    text: "Place",
    description:
      "Creating sustainable environments within communities we serve.",
  },
  {
    image: sp4,
    text: "Partners",
    description:
      "Collaborating with strategic partners to foster sustainability.",
  },
  {
    image: sp5,
    text: "Policy",
    description: "Our policies are built around long-term community impact.",
  },
  {
    image: sp6,
    text: "Promotion",
    description: "Advocating for sustainable practices across all sectors.",
  },
  {
    image: sp7,
    text: "Progress",
    description:
      "We are committed to constant progress in sustainability efforts.",
  },
];
const Sustainability = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 1.5rem",
    md: "3rem 4rem",
    lg: "4rem 6rem",
    xl: "4rem 8rem",
  });
  const flexDirection = useBreakpointValue({ base: "column", lg: "row" });
  const textWidth = useBreakpointValue({ base: "100%", lg: "50%" });
  const gridColumns = useBreakpointValue({ base: 2, sm: 3, md: 4 });
  const headingFontSize = useBreakpointValue({ base: "1.8rem", md: "2.2rem", lg: "2.5rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });

  return (
    <Flex
      mt="4rem"
      padding={contentPadding}
      gap="2rem"
      bgImage={`url(${bg3.src})`}
      bgSize="cover"
      bgPosition="center"
      color="#F7F7F7" 
      flexDirection={{
        base: 'column',
        lg: 'row'
      }}>
      <Flex  flexDirection={{
        base: 'column',
        lg: 'row'
      }} width="100%" alignItems="center" justifyContent="space-between">
        <Flex width={textWidth} flexDirection="column" gap="2rem">
          <Text fontWeight={400}  fontSize={textFontSize}>
            Sustainability
          </Text>
          <Text fontWeight={500} fontSize={headingFontSize}>
            Committed Service to Humanity
          </Text>
          <Text fontWeight={300} fontSize={textFontSize}>
            At Pamtech, we are motivated by a deep desire to make impactful
            contributions to the development of our host communities and society
            as a whole.
          </Text>
          <ButtonMain text="Read More" />
        </Flex>
        <Box height={{ base: "1px", lg: "auto" }} width={{ base: "100%", lg: "1px" }} my={{ base: "2rem", lg: "0" }} mx={{ base: "0", lg: "3rem" }}  bgColor="#F7F7F7" />
        <Flex width={textWidth} flexDirection="column" gap="2rem">
          <Text textAlign="center" fontWeight={400} fontSize={textFontSize}>
            7 Sustainability Pillars
          </Text>
          <SimpleGrid columns={gridColumns} rowGap="5" columnGap={2}>
            {sustainabilityPillars.map((pillar, i) => (
              <Flex
                flexDirection="column"
                gap=".5rem"
                alignItems="center"
                key={i}>
                <Box
                  outline="1px solid #F7F7F7"
                  borderRadius="md"
                  justifyContent="center"
                  padding="1rem 2.5rem"
                  position="relative">
                  <Image src={pillar.image} alt={pillar.text} />
                </Box>
                <Text fontWeight={300} fontSize={textFontSize}>{pillar.text}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sustainability;
