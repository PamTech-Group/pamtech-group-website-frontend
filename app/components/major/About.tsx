import { Box, Button, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import bg from "../../../public/bg2.webp";
import theme from "@/app/theme";
import { BiChevronRight } from "react-icons/bi";
import ButtonMain from "../minor/ButtonMain";
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
            boxShadow="md"
            borderRadius="md"
            position="absolute"
            color="#333333"
            bgColor="#F5F8FF"
            right="6%"
            top={{
              base: "30%",
              dddxl: "45%",
            }}
            padding="2rem 5rem"
            width="40%">
            <Flex flexDir="column" gap="1.5rem">
              <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
                About Us
              </Text>
              <Text fontSize="1.2rem">
                Founded in 2016, Pamtech Group has grown from a small petroleum
                supply business to a multi-faceted organization.
              </Text>{" "}
              <ButtonMain text="Read More" />
            </Flex>
            <Box my="2rem" bgColor=" #192140" height="1px" opacity=".6" />
            <Flex justifyContent="space-between" color="#333333">
              <Flex
                flexDir="column"
                gap="1rem"
                fontWeight={500}
                fontSize="1.2rem">
                <Text>Shareholders</Text>
                <Text color="primaryOrange" fontWeight={700} fontSize="3rem">
                  250+
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                gap="1rem"
                fontWeight={500}
                fontSize="1.2rem">
                <Text>Years</Text>
                <Text color="primaryOrange" fontWeight={700} fontSize="3rem">
                  08
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                gap="1rem"
                fontWeight={500}
                fontSize="1.2rem">
                <Text>Awards</Text>
                <Text color="primaryOrange" fontWeight={700} fontSize="3rem">
                  15+
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
