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
        gap="1.5rem"
        width="50%">
        <Heading fontSize="3rem" fontWeight={500}>
          Title Website-Headline
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Tincidunt ac elit ullamcorper
          <br />
          nibh in. Id pretium amet sem eli t nunc maecenas at facilisi.
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
          rightIcon={<BiChevronRight fontSize="2rem" className="arrow-icon" />}>
          Read More
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
