import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { BiChevronRight, BiLogoPlayStore } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../../public/logo.png";
import { IoCall } from "react-icons/io5";
import { GrApple } from "react-icons/gr";
import phone from "../../../public/phone.png";
import { Image, Link } from "@chakra-ui/next-js";
import theme from "@/app/theme";
const Footer = () => {
  return (
    <Box>
      <Box bgColor="primaryOrange" padding="2rem 8rem" paddingBottom="0">
        <SimpleGrid placeItems="center" columns={2}>
          <Box>
            <Flex
              direction="column"
              height="100%"
              justifyContent="center"
              gap="2rem">
              <Text fontWeight={700} fontSize="1.5rem">
                DOWNLOAD NOW!
              </Text>
              <Text fontSize="2.5rem" fontWeight={700} width="80%">
                {" "}
                Track Your Business Expenses Today
              </Text>
              <Text fontSize="1.2rem" width="70%">
                Your Padi for Oil & Gas Market
              </Text>
              <Flex gap="1rem">
                <Button
                  bgColor="#0e0e0e"
                  colorScheme="gray"
                  leftIcon={<BiLogoPlayStore fontSize="1.5rem" />}
                  variant="solid">
                  Google Play
                </Button>
                <Button
                  leftIcon={<GrApple fontSize="1.5rem" />}
                  bgColor="#0e0e0e"
                  variant="solid">
                  App Store{" "}
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Flex>
            <Image height={600} src={phone} alt="phone image" />
          </Flex>
        </SimpleGrid>
      </Box>
      <Box></Box>
      <Flex
        padding="2rem 8rem"
        align="center"
        justifyContent="space-between"
        bgColor="#010619">
        <Box>
          <Text fontSize="2rem" fontWeight={700}>
            Connect with us
          </Text>
        </Box>

        <Button
          width="fit-content"
          padding={theme.buttonPadding}
          bgColor="#FCFCFF"
          color="primaryOrange"
          _hover={{
            bgColor: "#dbdbd9",
            color: "primaryOrange",
          }}
          _active={{
            bgColor: "#e8e6e1",
            color: "primaryOrange",
          }}
          borderRadius={theme.buttonRadius.radius}
          rightIcon={
            <BiChevronRight fontSize="1.5rem" className="arrow-icon" />
          }>
          Talk to Us{" "}
        </Button>
      </Flex>
      <Box color="#F7F7F7" bgColor="#040A22" padding="2rem 8rem">
        <Flex
          bgColor="#040A22"
          justify="space-between"
          mt={10}
          flexDir={{ base: "column", md: "row" }}>
          <VStack align="start" spacing={5}>
            <Flex flexDirection="column" gap="1.5rem">
              <Link href="/">
                <Image src={logo} alt="Pamtech Logo" height={35} />
              </Link>
              <Text fontSize="1.2rem" fontWeight={300}>
                Commited service to humanity
              </Text>
            </Flex>
          </VStack>

          <Flex gap="3rem">
            <Flex flexDirection="column" justifyContent="start" gap="1rem">
              <Text fontSize="1.2rem" fontWeight={400}>
                Legal
              </Text>
              <Link fontWeight={300} href="/privacy">
                Privacy
              </Link>

              <Link fontWeight={300} href="/blog">
                Cookie policy
              </Link>
            </Flex>
            <Flex flexDirection="column" justifyContent="start" gap="1rem">
              <Text fontSize="1.2rem" fontWeight={400}>
                Address
              </Text>
              <Text>
                Plot CR/8 Port Harcourt Road, Near Hospital Junction, Owerri,
                Imo State.
              </Text>
              <Text>
                <Icon as={IoCall} /> +234-811-500-4000
              </Text>
              <Text>
                <Icon as={IoCall} /> +234-700-726-8324
              </Text>
              <Text>Email:</Text>
              <Flex justify="start" gap="1rem">
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Facebook"
                  icon={<FaFacebook fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Instagram"
                  icon={<FaInstagram fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="YouTube"
                  icon={<FaYoutube fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          mt="2rem"
          flexDirection="column"
          justifyContent="center"
          gap="1rem">
          <Box my="1rem" bgColor=" #fff" height="1px" opacity=".6" />
          <Text fontWeight={300} fontSize="1rem" mb="-1rem" textAlign="center">
            Copyright © 2024 Pamtechgroup. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
