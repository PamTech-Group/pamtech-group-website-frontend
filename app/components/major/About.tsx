import { Box, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import bg from "../../../public/bg2.webp";
import ButtonMain from "../minor/ButtonMain";
import theme from "@/app/theme";

const About = () => {
  const isXlScreen = useBreakpointValue({ base: false, xl: true });
  const contentWidth = useBreakpointValue({
    base: "100%",
    md: "80%",
    xl: "40%",
  });
  const contentPadding = useBreakpointValue({
    base: "2rem",
    md: "2rem 3rem",
    xl: "2rem 5rem",
  });
  const headingFontSize = useBreakpointValue({ base: "1.5rem", md: "2rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.2rem" });

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight={{ base: "auto", xl: "60svh" }}
      position="relative"
      bgImage={{ base: "none", myxl: `url(${bg.src})` }}
      backdropFilter="brightness(0%)"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        width={contentWidth}
        bgColor="#F5F8FF"
        boxShadow={theme.customBoxShadow}
        borderRadius={theme.customBorderRadius}
        padding={contentPadding}
        position={isXlScreen ? "absolute" : "relative"}
        right={isXlScreen ? "6%" : "auto"}
        top={
          isXlScreen
            ? { xl: "5%", dxl: "10%", ddxl: "20%", dddxl: "25%" }
            : "auto"
        }
        mt={isXlScreen ? "auto" : "4rem"}
      >
        <VStack spacing="1.5rem" align="start">
          <Text
            fontWeight={500}
            fontSize={headingFontSize}
            color="primaryOrange"
          >
            About Us
          </Text>
          <Text fontSize={textFontSize} color="textGrey">
            Founded in 2016, Pamtech Group has grown from a small petroleum
            supply business to a multi-faceted organization.
          </Text>
          <ButtonMain linkHref="/about" text="Read More" />
        </VStack>
        <Box my="2rem" bgColor="#192140" height="1px" opacity=".6" />
        <Flex justifyContent="space-between" color="textGrey">
          {["Shareholders", "Years", "Awards"].map((item, index) => (
            <Flex
            data-aos="zoom-in"
              key={item}
              flexDir="column"
              gap="1rem"
              fontWeight={500}
              fontSize={textFontSize}
            >
              <Text>{item}</Text>
              <Text
                color="primaryOrange"
                fontWeight={700}
                fontSize={{ base: "2rem", md: "3rem" }}
              >
                {index === 0 ? "250+" : index === 1 ? "08" : "15+"}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      {!isXlScreen && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={`url(${bg.src})`}
          bgSize="cover"
          bgPosition="center"
          zIndex="-1"
        />
      )}
    </Flex>
  );
};

export default About;
