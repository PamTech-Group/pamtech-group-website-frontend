import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  useBreakpointValue,
  ResponsiveValue,
} from "@chakra-ui/react";
import { BiChevronRight, BiLogoPlayStore } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../../public/logo.webp";
import { IoCall } from "react-icons/io5";
import { GrApple } from "react-icons/gr";
import phone from "../../../public/esolution.webp";
import { Image, Link } from "@chakra-ui/next-js";
import theme from "@/app/theme";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 1.5rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });
  const textAlign = useBreakpointValue({
    base: "center",
    md: "left",
  }) as ResponsiveValue<CanvasTextAlign>;
  const headingFontSize = useBreakpointValue({
    base: "1.8rem",
    md: "2.2rem",
    lg: "2.5rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.1rem",
    lg: "1.2rem",
  });
  const buttonFontSize = useBreakpointValue({ base: "0.8rem", md: "1rem" });
  const phoneImageHeight = useBreakpointValue({ base: 400, md: 500, lg: 600 });

  return (
    <Box>
      <Box bgColor="primaryOrange" padding={contentPadding} paddingBottom="0">
        <SimpleGrid
          spacing={8}
          alignItems="center"
          columns={{ base: 1, md: 2 }}
        >
          <Box>
            <Flex
              direction="column"
              height="100%"
              justifyContent="center"
              gap="2rem"
              textAlign={textAlign}
            >
              <Text fontWeight={700} fontSize="1.5rem">
                DOWNLOAD NOW!
              </Text>
              <Text
                fontSize={headingFontSize}
                fontWeight={700}
                width={{
                  base: "100%",
                  lg: "80%",
                }}
              >
                {" "}
                Track Your Business Expenses Today
              </Text>
              <Text
                fontSize={textFontSize}
                width={{
                  base: "100%",
                  lg: "70%",
                }}
              >
                Your Padi for Oil & Gas Market
              </Text>
              <Flex
                gap="1rem"
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                <Button
                  as="a"
                  href="https://play.google.com/store/apps/details?id=com.petroconnect.petro_connect"
                  bgColor="#0e0e0e"
                  colorScheme="gray"
                  leftIcon={<BiLogoPlayStore fontSize="1.5rem" />}
                  variant="solid"
                  fontSize={buttonFontSize}
                >
                  Google Play
                </Button>
                <Button
                  as="a"
                  href="https://apps.apple.com/us/app/petrol-padi/id6476345449?platform=iphone"
                  leftIcon={<GrApple fontSize="1.5rem" />}
                  bgColor="#0e0e0e"
                  variant="solid"
                  fontSize={buttonFontSize}
                >
                  App Store{" "}
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Flex alignItems="center" justifyContent="center">
            <Image height={phoneImageHeight} src={phone} alt="phone image" />
          </Flex>
        </SimpleGrid>
      </Box>

      <Flex
        padding={contentPadding}
        align="center"
        justifyContent={{ base: "center", md: "space-between" }}
        bgColor="#010619"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "2rem", md: "0" }}
      >
        <Box>
          <Text fontSize={headingFontSize} fontWeight={700}>
            Connect with us
          </Text>
        </Box>

        <Button
          as="a"
          href="/contact-us"
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
          }
          fontSize={buttonFontSize}
        >
          Talk to Us{" "}
        </Button>
      </Flex>
      <Box color="#F7F7F7" bgColor="#040A22" padding={contentPadding}>
        <Flex
          bgColor="#040A22"
          justify={{ base: "center", md: "space-between" }}
          mt={10}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "3rem", md: "0" }}
        >
          <VStack
            align={{
              base: "center",
              lg: "start",
            }}
            spacing={5}
          >
            <Flex
              flexDirection="column"
              gap="1.5rem"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Link href="/">
                <Image src={logo} alt="Pamtech Logo" height={35} />
              </Link>
              <Text
                fontSize={textFontSize}
                fontWeight={300}
                textAlign={textAlign}
              >
                Commited service to humanity
              </Text>
            </Flex>
          </VStack>

          <Flex
            gap={{ base: "2rem", md: "3rem" }}
            flexWrap="wrap"
            justifyContent={{
              base: "space-between",
              lg: "center",
            }}
          >
            <Flex
              flexDirection="column"
              justifyContent="start"
              gap="1rem"
              alignItems={{ base: "start", md: "flex-start" }}
            >
              <Text fontSize={textFontSize} fontWeight={400}>
                Quick Links
              </Text>
              <Link fontWeight={300} href="/about">
                About us
              </Link>

              <Link fontWeight={300} href="/socials">
                Socials
              </Link>
              <Link fontWeight={300} href="/growth">
                Our Growth
              </Link>
              <Link fontWeight={300} href="/e-solution">
                e-solutions
              </Link>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="start"
              gap="1rem"
              alignItems={{ base: "start", md: "flex-start" }}
            >
              <Text fontSize={textFontSize} fontWeight={400}>
                Legal
              </Text>
              <Link fontWeight={300} href="/privacy">
                Privacy
              </Link>

              <Link fontWeight={300} href="/privacy">
                Cookie policy
              </Link>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="start"
              gap="1rem"
              alignItems={{ base: "start", md: "flex-start" }}
            >
              <Text fontSize={textFontSize} fontWeight={400}>
                Address
              </Text>
              <Text>
                Plot CR/8 Port Harcourt Road, <br /> Near Hospital Junction,
                Owerri, Imo State.
              </Text>
              <Text>
                <Icon as={IoCall} /> +234-811-500-4000
              </Text>
              <Text>
                <Icon as={IoCall} /> +234-700-726-8324
              </Text>
              <Text>Email: info@pamtechgroup.com</Text>
              <Flex justify="start" gap="1rem">
                <IconButton
                  as="a"
                  href="https://www.facebook.com/pamtechgroup/"
                  aria-label="Facebook"
                  icon={<FaFacebook fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="https://www.instagram.com/pamtechgroup"
                  aria-label="Instagram"
                  icon={<FaInstagram fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="https://www.linkedin.com/company/pamtechgroup/"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="https://x.com/thepamtechgroup"
                  aria-label="Twitter"
                  icon={<FaXTwitter fontSize="1.5rem" />}
                  bg="gray.100"
                  color="black"
                  rounded="5px"
                  _hover={{ bg: "gray.300" }}
                />
                <IconButton
                  as="a"
                  href="https://www.youtube.com/channel/UCjJ-fWJYIhpViYWr97-yWNw"
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
          gap="1rem"
        >
          <Box my="1rem" bgColor=" #fff" height="1px" opacity=".6" />
          <Text
            fontWeight={300}
            fontSize={textFontSize}
            mb="-1rem"
            textAlign="center"
          >
            Copyright © 2024 Pamtechgroup. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
