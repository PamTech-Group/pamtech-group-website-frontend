import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import gasBg from "../../public/gasBg.png";
import land1 from "../../public/land1.png";
import land2 from "../../public/land2.png";
import land3 from "../../public/land3.png";
import bg3 from "../../public/bg3.png";
import Image from "next/image";
import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Footer from "../components/major/Footer";

const Autoland = () => {
  return (
    <>
      <Box bgColor="#F7F7F7">
        <Box
          padding="2rem 8rem"
          backgroundImage={`url(${gasBg.src})`}
          bgSize="cover"
          bgPosition="center"
          height="100vh"
          color="#F7F7F7">
          <Flex
            height="100%"
            flexDir="column"
            justifyContent="center"
            gap="1.5rem"
            width="50%">
            <Heading fontSize="3rem" fontWeight={500}>
              Pamtech Autoland
            </Heading>
            <Text fontWeight={500} width="60%" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ac elit
              ullamcorper
              <br />
              nibh in. Id pretium amet sem eli t nunc maecenas at facilisi. nibh
              in. Id pretium amet sem eli t nunc maecenas at facilisi. nibh in.
              Id pretium amet sem eli t nunc maecenas at facilisi. Id pretium
              amet sem eli t nunc maecenas at facilisi. nibh in. Id pretium amet
              sem eli t nunc maecenas at facilisi. Id pretium amet sem eli t
              nunc maecenas at facilisi. nibh in. Id pretium amet sem eli t nunc
              maecenas at facilisi.
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
              rightIcon={<BiChevronRight fontSize="2rem" />}>
              Talk to us
            </Button>
          </Flex>
        </Box>
        <Box my="6rem">
          <Heading
            mb="4rem"
            textAlign="center"
            fontSize="2.5rem"
            fontWeight={500}
            color="#2C2B2B">
            Brand Showcase
          </Heading>
          <Flex gap=".5rem" justifyContent="center">
            <Image src={land1} alt="land1" />
            <Image src={land2} alt="land2" />
            <Image src={land3} alt="land3" />
          </Flex>
        </Box>
        <Flex
          justifyContent="center"
          padding="3rem 0rem"
          gap="2rem"
          bgImage={`url(${bg3.src})`}
          bgSize="cover"
          bgPosition="center"
          width="100%"
          color="#F7F7F7">
          <Flex width="49%" alignItems="center">
            <Flex flexDirection="column" gap="2rem">
              <Text fontWeight={100}> Sustainability</Text>
              <Text fontWeight={500} fontSize="2rem">
                Building Prosperity <br /> and Self-Sufficiency
              </Text>
              <Text fontWeight={300}>
                Lorem ipsum dolor sit amet consectetur. Blandit <br /> arcu
                pellentesque adipiscing adipiscing feugiat <br /> nunc varius
                sed tincidunt. Ultricies dign
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
                rightIcon={<BiChevronRight fontSize="2rem" />}>
                Read More
              </Button>
            </Flex>
            <Box height="150px" width="0.5px" mx="3rem" bgColor="#F7F7F7" />
            <Flex width="49%" flexDirection="column" gap="2rem">
              <Text>7 Sustainabilty Pillers</Text>
              <SimpleGrid columns={4} rowGap="5" columnGap={8}>
                <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
                <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
                <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
                <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
                <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
                <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
                <Box width="50px" outline="1px solid #F7F7F7" height="45px" />
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default Autoland;
