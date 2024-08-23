import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import bg from "../../../public/bg1.jpg";
import "../../globals.css";
import theme from "@/app/theme";
import { BiChevronRight } from "react-icons/bi";
import Nav from "./Nav";
const Hero = () => {
  return (
    <Box
      padding="2rem 8rem"
      backgroundImage={`url(${bg.src})`}
      bgSize="cover"
      bgPosition="center"
      height="100vh"
      color="#F7F7F7">
      <Nav />

      <Flex
        height="100%"
        flexDir="column"
        justifyContent="center"
        gap="2rem"
        width="50%">
        <Heading fontSize="3rem" fontWeight={500}>
          Committed Service to Humanity{" "}
        </Heading>
        <Text width="80%" fontSize="1.2rem">
          With a strong commitment to serving humanity, Pamtech Group has built
          a diverse portfolio in the oil and gas, media, and automotive
          industries.
        </Text>
        <Button
          width="fit-content"
          padding={theme.buttonPadding}
          bgColor="primaryOrange"
          _hover={{
            bgColor: "#961615",
          }}
          _active={{
            bgColor: "#bf1e1d",
          }}
          borderRadius={theme.buttonRadius.radius}
          rightIcon={
            <BiChevronRight fontSize="1.5rem" className="arrow-icon" />
          }>
          Read More
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
