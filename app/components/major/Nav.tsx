"use client";
import {
  Box,
  Flex,
  Button,
  HStack,
  Text,
  useDisclosure,
  Center,
  Icon,
  IconButton,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../../public/logo.webp";
import logoBlue from "../../../public/logoBlue.webp";
import { Image } from "@chakra-ui/next-js";
import theme from "@/app/theme";
import { useState, useEffect } from "react";
import Dropdown from "../minor/dropdown";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import Aos from "aos";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Use breakpoints for responsive design
  const logoSize = useBreakpointValue({ base: 25, sm: 30 });
  const buttonFontSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" });
  const navSpacing = useBreakpointValue({ base: 2, sm: 4, md: 6, lg: 8 });

  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > window.innerHeight * 0.2); // When past the hero section
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
      bg={isScrolled ? "white" : "transparent"}
      transition="background-color 0.3s ease-in-out"
      boxShadow={isScrolled ? "md" : "none"}
      padding={{
        base: "0.5rem 0.5rem",
        sm: "0.75rem 2rem",
        md: "1rem 4rem",
        lg: "1rem 6rem",
      }}
    >
      <Flex
        h={{
          base: 10,
          md: 16,
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* Logo */}
        <Box>
          <Link href="/">
            <Image
              src={isScrolled ? logoBlue : logo}
              alt="Pamtech Logo"
              height={logoSize}
              transition="opacity 0.5s ease-in-out"
              style={{
                opacity: isScrolled ? 1 : 0,
                animation: isScrolled ? "fadeIn 0.5s" : "none",
              }}
            />
          </Link>
        </Box>

        {/* Desktop Menu */}
        <HStack
          as={"nav"}
          spacing={navSpacing}
          display={{ base: "none", xl: "flex" }} // Show from medium screens and above
          fontWeight={theme.fontWeights.medium}
          color={isScrolled ? "primaryOrange" : "white"}
        >
          <Link className="scaler" href="/about">
            About Us
          </Link>

          <Link className="scaler" href="/growth">
            Our Growth
          </Link>
          <Box position="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
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
                pointerEvents={isOpen ? "auto" : "none"}
              >
                <Dropdown />
              </Box>
            </Center>
          </Box>

          <Link className="scaler" href="/e-solution">
            e-Solutions
          </Link>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", xl: "none" }} // Display on small screens
          onClick={onMobileMenuOpen}
          variant="ghost"
          color={isScrolled ? "black" : "white"}
          fontSize={{ base: "1.2rem", sm: "1.5rem" }}
        />

        {/* Contact and Social Buttons */}
        <HStack
          spacing={4}
          display={{ base: "none", xl: "flex" }} // Show from medium screens
        >
          <Button
            as="a"
            href="/contact-us"
            colorScheme="transparent"
            color={isScrolled ? "textGrey" : "white"}
            fontSize={buttonFontSize} // Responsive font size
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
            borderRadius={theme.buttonRadius.radius}
          >
            Contact Us
          </Button>
          <Button
            as="a"
            href="/socials"
            fontSize={buttonFontSize} // Responsive font size
            padding={theme.buttonPadding}
            bgColor="primaryOrange"
            _hover={{
              bgColor: "#961615",
            }}
            _active={{
              bgColor: "#bf1e1d",
            }}
            borderRadius={theme.buttonRadius.radius}
          >
            Socials
          </Button>
        </HStack>

        {/* Mobile Menu Drawer */}
        <Drawer
          isOpen={isMobileMenuOpen}
          placement="right"
          onClose={onMobileMenuClose}
        >
          <DrawerOverlay />
          <DrawerContent bgColor="#0F1010">
            <DrawerCloseButton />

            <DrawerBody pt="6rem">
              <VStack spacing={6} align="start">
                <Link href="/about" onClick={onMobileMenuClose}>
                  About Us
                </Link>
                <Menu>
                  <MenuButton
                    variant="flushed"
                    padding={0}
                    fontWeight={400}
                    fontSize="1rem"
                    as={Button}
                    rightIcon={<ChevronDownIcon alignSelf="center" />}
                  >
                    Our Businesses
                  </MenuButton>
                  <MenuList gap={5} bg="rgba(20, 20, 20, 0.4)">
                    <Link href="/oilgas">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Oil & Gas</MenuItem>
                    </Link>
                    <Link href="/autoland">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Autoland</MenuItem>
                    </Link>
                    <Link href="https://pamtechautoparts.com/">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Autoparts</MenuItem>
                    </Link>
                    <Link href="/ride">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">
                        Luxury Ride
                      </MenuItem>
                    </Link>
                    <Link href="/media">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Media</MenuItem>
                    </Link>
                    <Link href="/foundation">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Foundation</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Link href="/growth" onClick={onMobileMenuClose}>
                  Our Growth
                </Link>
                <Link href="/e-solution" onClick={onMobileMenuClose}>
                  e-Solutions
                </Link>
                <Link href="/contact-us" onClick={onMobileMenuClose}>
                  Contact us
                </Link>
                <Link href="/socials" onClick={onMobileMenuClose}>
                  Socials
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      {/* Keyframes for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default Nav;
