"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  useBreakpointValue,
  keyframes,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import bg from "../../public/partsBg.webp";
import NavWhite from "../components/major/NavWhite";
import Footer from "../components/major/Footer";
import TeamCulture from "../components/minor/culture";
import CoreValues from "../components/minor/coreValues";
import EmployeeTestimonials from "../components/minor/teamTestimonials";
import JobApplicationForm from "../components/minor/Form";

const flowAnimation = keyframes`
  0% {
    background-color: silver;
  }
  50% {
    background-color: grey;
  }
  100% {
    background-color: silver;
  }
`;
const CareersHero = () => {
  const headingSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });

  return (
    <Box>
      <Box position="relative" height={["100vh", "90vh"]} overflow="hidden">
        <NavWhite />
        {/* Background Image */}
        <Box>
          <Flex
            bgImage={bg.src}
            bgRepeat="no-repeat"
            bgSize="cover"
            // position="relative"
            zIndex={2}
            direction="column"
            align="center"
            justify="center"
            height="calc(100vh - 80px)"
            color="white"
            textAlign="center"
            px={6}
            pb={8}
          >
            <VStack spacing={6} maxW="800px" textAlign="center">
              <Heading
                size={headingSize}
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                bgGradient="linear(to-r, whiteAlpha.800, whiteAlpha.600)"
                bgClip="text"
              >
                Elevate Your Career
              </Heading>
              <Text
                fontSize={["lg", "xl", "2xl"]}
                fontWeight="medium"
                maxW="600px"
                textShadow="1px 1px 2px rgba(0,0,0,0.3)"
              >
                Discover extraordinary opportunities where innovation meets
                passion. Join a team that transforms challenges into
                breakthrough success.
              </Text>
              <Button
                as="a"
                href="#form"
                mt={4}
                size="md"
                color="#333"
                variant="outline"
                _hover={{
                  bg: "whiteAlpha.200",
                  borderColor: "white",
                }}
                sx={{
                  animation: `${flowAnimation} 2s infinite`, // Apply the animation
                  borderColor: "white",
                  _hover: {
                    bg: "whiteAlpha.200",
                    borderColor: "white",
                  },
                }}
              >
                Explore Opportunities
              </Button>
            </VStack>
          </Flex>
        </Box>
      </Box>
      {/* WHY YOU SHOULD WORK WITH US */}
      <Box>
        <TeamCulture />
      </Box>

      {/* OUR CORE VALUES */}
      <Box>
        <CoreValues />
      </Box>

      <EmployeeTestimonials />
      {/* SIGN UP */}
      <Box>
        <JobApplicationForm />
      </Box>

      <Footer />
    </Box>
  );
};

export default CareersHero;
