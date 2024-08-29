"use client";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoBlue from "../../public/logoBlue.png";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "../components/minor/dropdown";
import { HamburgerIcon } from "@chakra-ui/icons";
import theme from "../theme";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";
const Privacy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();
  return (
    <Box bg="#FFFFFF">
      <Box
        bg="white"
        transition="background-color 0.3s ease-in-out"
        boxShadow="md"
        padding={{
          base: "1rem 2rem", // Small screens (mobiles)
          sm: "1rem 4rem", // Small PCs and tablets
          md: "1rem 6rem", // Medium screen (laptops)
          lg: "1rem 8rem", // Larger screens
        }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Logo */}
          <Box>
            <Link href="/">
              <Image src={logoBlue} alt="Pamtech Logo" height={35} />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <HStack
            as={"nav"}
            spacing={{
              base: 4, // Smaller gaps on small screens
              sm: 6, // Slightly larger gap for small tablets
              md: 8, // Normal gap for medium devices
              lg: 12, // Large gap for larger screens
            }}
            display={{ base: "none", md: "flex" }} // Show from medium screens and above
            fontWeight={400}
            color="primaryOrange">
            <Link className="scaler" href="/about">
              About Us
            </Link>

            <Link className="scaler" href="/growth">
              Our Growth
            </Link>
            <Box
              position="relative"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}>
              <Flex className="scaler" cursor="pointer" alignItems="center">
                <Text fontWeight={400}>Business</Text>
                <Icon fontSize="1rem" as={BiChevronDown} />
              </Flex>

              {/* Dropdown menu */}
              <Center>
                <Box
                  marginLeft="10rem"
                  position="absolute"
                  top="100%"
                  transformOrigin="center"
                  bg="white"
                  width="contain"
                  boxShadow="md"
                  borderRadius="md"
                  zIndex={1000}
                  transition="all 0.3s ease-in-out"
                  opacity={isOpen ? 1 : 0}
                  transform={isOpen ? "translateY(0)" : "translateY(-20px)"}
                  pointerEvents={isOpen ? "auto" : "none"}>
                  <Dropdown />
                </Box>
              </Center>
            </Box>

            <Link className="scaler" href="/e-solution">
              e-Solution
            </Link>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }} // Display on small screens
            onClick={onMobileMenuOpen}
            variant="ghost"
            color="white"
            fontSize="1.5rem"
          />

          {/* Contact and Social Buttons */}
          <HStack
            spacing={4}
            display={{ base: "none", md: "flex" }} // Show from medium screens
          >
            <Button
              as="a"
              href="/contact-us"
              colorScheme="transparent"
              color="textGrey"
              fontSize={{ base: "0.8rem", md: "1rem" }} // Responsive font size
              _hover={{
                bgColor: "primaryOrange",
                color: "#F7F7F7",
              }}
              _active={{
                bgColor: "#bf1e1d",
                color: "#F7F7F7",
              }}
              outline="1px solid #E52321"
              padding={theme.buttonPadding}
              borderRadius={theme.buttonRadius.radius}>
              Contact Us
            </Button>
            <Button
              as="a"
              href="socials"
              fontSize={{ base: "0.8rem", md: "1rem" }} // Responsive font size
              padding={theme.buttonPadding}
              bgColor="primaryOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              borderRadius={theme.buttonRadius.radius}>
              Socials
            </Button>
          </HStack>

          {/* Mobile Menu Drawer */}
          <Drawer
            isOpen={isMobileMenuOpen}
            placement="right"
            onClose={onMobileMenuClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="start">
                  <Link href="/about" onClick={onMobileMenuClose}>
                    About Us
                  </Link>
                  <Link href="#" onClick={onMobileMenuClose}>
                    Business
                  </Link>
                  <Link href="#" onClick={onMobileMenuClose}>
                    Investor Relations
                  </Link>
                  <Link href="#" onClick={onMobileMenuClose}>
                    e-Solution
                  </Link>
                  <Button
                    as="a"
                    href="/contact-us"
                    colorScheme="transparent"
                    width="100%"
                    onClick={onMobileMenuClose}>
                    Contact Us
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
      <Flex
        color="textGrey"
        flexDirection="column"
        justifyContent="left"
        padding="2rem 8rem">
        <Heading my="2rem">Privacy Policy</Heading>
        <Flex flexDirection="column" gap="1.5rem">
          <Text textAlign="justify">
            Pamtech Group is committed to protecting your privacy. This Privacy
            Policy outlines how we collect, use, disclose, and protect your
            information when you visit our website, www.pamtechgroup.com. By
            accessing or using our website, you agree to the terms outlined in
            this Privacy Policy.
          </Text>
          <Text textAlign="justify">
            We collect both personal information, such as your name and email
            address, and non-personal information, such as your IP address and
            browser type. We collect personal information that you voluntarily
            provide to us, and we automatically collect non-personal information
            when you visit our website. We also use cookies and similar tracking
            technologies to enhance your experience on our website. These
            technologies help us understand how you use our website and enable
            us to provide you with a personalized experience. You can manage
            your cookie preferences through your browser settings.
          </Text>
          <Text textAlign="justify">
            We may use the information we collect for various purposes,
            including providing, operating, and maintaining our website,
            responding to your inquiries or requests, sending you newsletters,
            updates, and promotional materials, analyzing usage trends and
            improving our website, complying with legal obligations, and
            preventing fraudulent activities.
          </Text>
          <Text textAlign="justify">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this Privacy Policy. We may share your information with
            third-party service providers who assist us in operating our
            website, conducting our business, or serving our users. We may also
            disclose your information if required by law or in response to valid
            legal requests from governmental authorities. In the event of a
            merger, acquisition, or sale of all or a portion of our assets, your
            information may be transferred to the acquiring party.
          </Text>
          <Text textAlign="justify">
            We take reasonable measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the Internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
            You have the right to access and update your personal information,
            opt-out of receiving promotional communications, and request the
            deletion of your personal information. Our website is not intended
            for individuals under the age of 13, and we do not knowingly collect
            personal information from children under 13. We may update this
            Privacy Policy from time to time, and we will notify you of any
            material changes. If you have any questions or concerns about this
            Privacy Policy or our data practices, please contact us.
          </Text>
          <Box textAlign="justify">
            Pamtech Group <br />
            Website <Link href="pamtechgroup.com">pamtechgroup.com</Link> <br />
            Email:{" "}
            <Link href="mailto:info@pamtechgroup.com">info@pamtechgroup.</Link>
            <br />
            Phone:{" "}
            <Link href="tel" target="+234 803 7077 608">
              Phone: +234 803 7077 608
            </Link>
            <br />
            Address: Plot CR17 Housing Area T, Port Harcourt Rd, behind Apams,
            New Owerri, Owerri, Imo State, Nigeria.
          </Box>
        </Flex>
      </Flex>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Privacy;
