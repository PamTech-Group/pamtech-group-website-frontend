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
import phone from "../../../public/phoneSolution.webp";
import { Image, Link } from "@chakra-ui/next-js";
import theme from "@/app/theme";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const contentPadding = useBreakpointValue({
    base: "1rem",
    sm: "1.5rem",
    md: "2rem 3rem",
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
  // const phoneImageHeight = useBreakpointValue({ base: 400, md: 500, lg: 600 });

  return (
    <>
      <Box bgColor='primaryOrange'  padding={contentPadding} paddingBottom="0">
        <SimpleGrid
          spacing={8}
         placeItems='center'
          
          columns={{ base: 1, md: 2 }}
        
        >
          <Box>
            <Flex
              direction="column"
              height="100%"
              justifyContent="center"
              gap="2rem"
              textAlign={textAlign}
              data-aos="zoom-in-right" 
            >
              <Text fontWeight={700} fontSize="1rem" >
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
                  colorScheme="gray"
                  variant="solid"
                  fontSize={buttonFontSize}
                >
                  App Store{" "}
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Flex data-aos="zoom-in-left"  alignItems="center" justifyContent="center">
            <Image  src={phone} alt="phone image" style={{height: '100%'}} />
          </Flex>
        </SimpleGrid>
      </Box>
      <Box bgColor="#0F1010"  padding={contentPadding}>
        <Flex
          justify="center"
          align="center"
          flexDirection="column" // Responsive direction
          gap="1rem"
          py='1.5rem'
        >
          <SimpleGrid
            placeItems="center"
            columns={{ base: 2, sm: 3, md: 6 }} // Responsive columns
            spacing={5}
          >
            <Link fontSize=".9rem" href="/about">
              ABOUT US
            </Link>
            <Link fontSize=".9rem" href="/growth">
              OUR GROWTH
            </Link>
            {/* <Link fontSize='.9rem' href="/philanthropy"></Link> */}
            <Link fontSize=".9rem" href="/e-solution">
              e-SOLUTIONS
            </Link>
            <Link fontSize=".9rem" href="/socials">
              SOCIALS
            </Link>
            <Link fontSize=".9rem" href="/contact-us">
              CONTACT US
            </Link>
            <Link fontSize=".9rem" href="/blog">
              BLOG
            </Link>
          </SimpleGrid>

          <SimpleGrid
            mt="1.5rem"
            columns={3}
            gap="2rem"
            placeItems="center"
            placeContent="center"
          >
            <Text
              textAlign="center"
              color="white"
              fontSize={{ base: ".6rem", md: ".7rem" }}
            >
              ©2024 Pamtech Group
            </Text>
            <Link fontSize=".7rem" href="/privacy" color="white">
              Privacy Policy
            </Link>
            <Link fontSize=".7rem" href="/privacy" color="white">
              Terms&Condition
            </Link>
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
