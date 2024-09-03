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

    <>
      <Box   bgColor="#0F1010" padding={contentPadding}>
      <Flex
        justify="center"
        align="center"
        flexDirection={{ base: "column", md: "column" }} // Responsive direction
        gap="1rem"
      >
        <SimpleGrid 
          columns={{ base: 2, sm: 3, md: 6 }} // Responsive columns
          spacing={5}
        >
          <Link fontSize='.8rem' href="/about">About Us</Link>
          <Link fontSize='.8rem' href="/investments">Our Growth</Link>
          <Link fontSize='.8rem' href="/philanthropy">Philanthropy</Link>
          <Link fontSize='.8rem' href="/media">e-Solutions</Link>
          <Link fontSize='.8rem' href="/careers">Socials</Link>
          <Link fontSize='.8rem' href="/contact">Contact Us</Link>
        </SimpleGrid>
       
        <Flex 
          direction={{ base: "row", md: "row" }} // Responsive direction for links
          gap="2rem"
        >
           <Text color="white" fontSize={{ base: ".6rem", md: ".7rem" }}> 
          ©2024 Pamtech Group 
        </Text>
          <Link fontSize='.7rem' href="/privacy" color="white">Privacy Policy</Link>
          <Link fontSize='.7rem' href="/terms" color="white">Terms & Conditions</Link>
        </Flex>
      </Flex>
    </Box>

    </>
  );
};

export default Footer;
