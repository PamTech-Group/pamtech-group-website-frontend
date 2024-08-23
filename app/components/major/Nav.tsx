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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../../public/logo.png";
import logoBlue from "../../../public/logoBlue.png";
import { Image } from "@chakra-ui/next-js";
import theme from "@/app/theme";
import { useState, useEffect } from "react";
import Dropdown from "../minor/dropdown";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > window.innerHeight); // When past the hero section
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
        base: "1rem 2rem", // Small screens (mobiles)
        sm: "1rem 4rem", // Small PCs and tablets
        md: "1rem 6rem", // Medium screen (laptops)
        lg: "1rem 8rem", // Larger screens
      }}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo */}
        <Box>
          <Link href="/">
            <Image
              src={isScrolled ? logoBlue : logo}
              alt="Pamtech Logo"
              height={50}
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
          spacing={{
            base: 4, // Smaller gaps on small screens
            sm: 6, // Slightly larger gap for small tablets
            md: 8, // Normal gap for medium devices
            lg: 12, // Large gap for larger screens
          }}
          display={{ base: "none", md: "flex" }} // Show from medium screens and above
          fontWeight={400}
          color={isScrolled ? "primaryOrange" : "white"}>
          <Link className="scaler" href="/about">
            About Us
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
                pointerEvents={isOpen ? "auto" : "none"}>
                <Dropdown />
              </Box>
            </Center>
          </Box>

          <Link className="scaler" href="#">
            Investor Relations
          </Link>
          <Link className="scaler" href="#">
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
          color={isScrolled ? "black" : "white"}
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
            color={isScrolled ? "black" : "white"}
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
            Social
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
