import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { BiLogoPlayStore } from "react-icons/bi";
import {
  FaAppStore,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../../public/logo.png";
import { IoCall } from "react-icons/io5";
// import { GrAppleAppStore } from "react-icons/gr";
import phone from "../../../public/phone.png";
import { Image, Link } from "@chakra-ui/next-js";
const Footer = () => {
  return (
    <Box>
      <Box bgColor="#e0344c">
        <SimpleGrid columns={2}>
          <Box>
            <Flex direction="column" height="100%" justifyContent="center">
              <Text>Download Now</Text>
              <Text> Start Tracking Your Business Expenses TOday</Text>
              <Text>
                Download the app now and take control of your fuel purchasing
                decisions
              </Text>
              <Flex gap="1rem">
                <Button
                  bgColor="#0e0e0e"
                  leftIcon={<BiLogoPlayStore />}
                  variant="solid">
                  Google Play
                </Button>
                <Button
                  leftIcon={<FaAppStore />}
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
      <Box bg="gray.900" color="white">
        <Flex align="center" justifyContent="space-between">
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Ready to connect with us?
            </Text>
            <Text fontSize="lg">Reach out to us now.</Text>
          </Box>

          <Button
            bgColor="#FCFCFF"
            color="#171717"
            _hover={{
              bgColor: "#e8e6e6",
            }}
            fontSize="md">
            Talk to us
          </Button>
        </Flex>

        <Flex
          justify="space-between"
          mt={10}
          flexDir={{ base: "column", md: "row" }}>
          <VStack align="start" spacing={5}>
            <Box>
              <Link href="/">
                <Image src={logo} alt="Pamtech Logo" height={50} />
              </Link>
            </Box>
          </VStack>

          <Flex gap="2rem">
            <Flex flexDirection="column" justifyContent="start">
              <Text fontSize="lg" fontWeight="bold">
                Quick link
              </Text>
              <Link href="#">About us</Link>
              <Link href="#">Contact us</Link>
              <Link href="#">Sustainability</Link>
              <Link href="#">Investor relations</Link>
              <Link href="#">e-solution</Link>
            </Flex>
            <Flex flexDirection="column" justifyContent="start">
              <Text fontSize="lg" fontWeight="bold">
                Legal
              </Text>
              <Link href="#">Privacy</Link>
              <Link href="#">Glossary</Link>
              <Link href="#">Cookie policy</Link>
            </Flex>
            <Flex flexDirection="column" justifyContent="start">
              <Text fontSize="lg" fontWeight="bold">
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
                  icon={<FaFacebook />}
                  bg="gray.800"
                  color="white"
                  rounded="full"
                  _hover={{ bg: "gray.700" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  bg="gray.800"
                  color="white"
                  rounded="full"
                  _hover={{ bg: "gray.700" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  bg="gray.800"
                  color="white"
                  rounded="full"
                  _hover={{ bg: "gray.700" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  bg="gray.800"
                  color="white"
                  rounded="full"
                  _hover={{ bg: "gray.700" }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="YouTube"
                  icon={<FaYoutube />}
                  bg="gray.800"
                  color="white"
                  rounded="full"
                  _hover={{ bg: "gray.700" }}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box>
          <Box my="1rem" bgColor=" #fff" height="1px" opacity=".6" />
          <Text fontSize="sm" textAlign="center">
            Copyright © 2024 Pamtechgroup. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
