import { Box, Button, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import bg from "../../../public/bg2.png";
import theme from "@/app/theme";
import { BiChevronRight } from "react-icons/bi";
const About = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" height="60svh">
        <Box
          flex="1"
          bgImage={`url(${bg.src})`}
          bgSize="cover"
          bgPosition="center"
          height="100%"
          position="relative">
          <Box
            position="absolute"
            color="#333333"
            bgColor="#F5F8FF"
            right="6%"
            top="30%"
            padding="2rem 5rem">
            <Flex flexDir="column" gap="1.5rem">
              <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
                About Us
              </Text>
              <Text fontSize="1.2rem">
                Lorem ipsum dolor sit amet consectetur. consectetur. <br />{" "}
                Vitae nibh nec ipsum ut at. Aenean sed <br /> scelerisque
                tristique eros. Mauris.
              </Text>{" "}
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
                rightIcon={<BiChevronRight fontSize="2rem" />}>
                Read More
              </Button>
            </Flex>
            <Box my="2rem" bgColor=" #192140" height="1px" opacity=".6" />
            <Flex gap="3rem" color="#333333">
              <Flex
                flexDir="column"
                gap="1rem"
                fontWeight={500}
                fontSize="1.2rem">
                <Text>Shareholders</Text>
                <Text color="primaryOrange" fontWeight={700} fontSize="3rem">
                  500K+
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                gap="1rem"
                fontWeight={500}
                fontSize="1.2rem">
                <Text>Years</Text>
                <Text color="primaryOrange" fontWeight={700} fontSize="3rem">
                  50+
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                gap="1rem"
                fontWeight={500}
                fontSize="1.2rem">
                <Text>Awards</Text>
                <Text color="primaryOrange" fontWeight={700} fontSize="3rem">
                  30+
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default About;
