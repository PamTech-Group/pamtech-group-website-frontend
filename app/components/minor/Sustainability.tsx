import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
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

const Sustainability = () => {
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

  const [currentPillar, setCurrentPillar] = useState(0);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // Intersection observer to check if component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Cycle through the sustainability pillars' popups
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentPillar((prev) => (prev + 1) % sustainabilityPillars.length);
      }, 3000); // Show each pillar for 3 seconds

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <Flex
      mt="4rem"
      padding="4rem 8rem"
      gap="2rem"
      bgImage={`url(${bg3.src})`}
      bgSize="cover"
      bgPosition="center"
      color="#F7F7F7"
      ref={containerRef} // reference for the intersection observer
    >
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Flex width="50%" flexDirection="column" gap="2rem">
          <Text fontWeight={400} fontSize="1.2rem">
            Sustainability
          </Text>
          <Text fontWeight={500} fontSize="2.5rem">
            Committed Service to Humanity
          </Text>
          <Text fontWeight={300} fontSize="1.2rem">
            At Pamtech, we are motivated by a deep desire to make impactful
            contributions to the development of our host communities and society
            as a whole.
          </Text>
          <Button
            width="fit-content"
            padding="1.5rem"
            bgColor="primaryOrange"
            _hover={{ bgColor: "#961615" }}
            _active={{ bgColor: "#bf1e1d" }}
            borderRadius="md"
            rightIcon={<BiChevronRight fontSize="1.5rem" />}>
            Read More
          </Button>
        </Flex>
        <Box height="150px" width="0.5px" mx="3rem" bgColor="#F7F7F7" />
        <Flex width="50%" flexDirection="column" gap="2rem">
          <Text textAlign="center" fontWeight={400} fontSize="1.2rem">
            7 Sustainability Pillars
          </Text>
          <SimpleGrid columns={4} rowGap="5" columnGap={2}>
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
                  {currentPillar === i && (
                    <Box
                      position="absolute"
                      bottom="100%"
                      left="50%"
                      transform="translate(-50%, 0)"
                      bg="rgba(0, 0, 0, 1)"
                      color="#fff"
                      padding="0.5rem 1rem"
                      borderRadius="md"
                      mt="0.5rem"
                      zIndex={10}>
                      <Text fontSize="0.9rem" fontWeight={500}>
                        {pillar.description}
                      </Text>
                    </Box>
                  )}
                </Box>
                <Text fontWeight={300}>{pillar.text}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sustainability;
