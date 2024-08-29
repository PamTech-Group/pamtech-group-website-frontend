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
              color="white"
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
      </Box>
      <Flex color="textGrey" flexDirection="column" padding="2rem 8rem">
        <Box>
          <Heading my="2rem">Privacy</Heading>
          <Text textAlign="justify">
            Lorem ipsum dolor sit amet consectetur. Pretium curabitur lorem
            molestie sed. Sed platea dui egestas consequat tincidunt. Eget
            dignissim morbi lacus bibendum quis pretium etiam elit. Sed pretium
            massa quisque arcu. Pretium odio ut sem odio. At habitant pretium
            pellentesque mi est neque sagittis est bibendum. Amet in mattis ut
            turpis tempor. Arcu quam iaculis phasellus enim elementum in aliquam
            risus. Ultrices cursus dignissim ac non consequat vel at tortor dui.
            Consequat consequat nec ac turpis porttitor sit. Amet neque id
            turpis tristique hendrerit. Sed malesuada faucibus dignissim
            volutpat eget iaculis elementum. Vitae cras elementum nulla
            vestibulum eros vitae rhoncus. Nec faucibus semper egestas tincidunt
            sagittis fames. Tincidunt mauris quam purus a neque in ridiculus.
            Vestibulum justo laoreet facilisis ac cursus nisi tellus. Sodales
            nulla mattis vel gravida felis feugiat viverra. Dis blandit
            pellentesque suspendisse amet amet gravida. Sagittis nt
            pellentesque. In malesuada rutrum at mattis orci ut urna tempus
            placerat. Vitae donec scelerisque vel sed sociis sed. Tristique
            egestas commodo ornare dictum nullam egestas. Sagittis fermentum sit
            nunc semper fermentum pellentesque faucibus consectetur. Convallis
            habitant ultricies mauris sit amet a arcu arcu. Ut molestie ut fames
            tristique nullam libero montes. Elit feugiat amet mattis id amet.
            Vitae purus nunc rutrum justo quis.
          </Text>
        </Box>
        <Box>
          <Heading my="2rem">Policy</Heading>
          <Text textAlign="justify">
            Lorem ipsum dolor sit amet consectetur. Pretium curabitur lorem
            molestie sed. Sed platea dui egestas consequat tincidunt. Eget
            dignissim morbi lacus bibendum quis pretium etiam elit. Sed pretium
            massa quisque arcu. Pretium odio ut sem odio. At habitant pretium
            pellentesque mi est neque sagittis est bibendum. Amet in mattis ut
            turpis tempor. Arcu quam iaculis phasellus enim elementum in aliquam
            risus. Ultrices cursus dignissim ac non consequat vel at tortor dui.
            Consequat consequat nec ac turpis porttitor sit. Amet neque id
            turpis tristique hendrerit. Sed malesuada faucibus dignissim
            volutpat eget iaculis elementum. Vitae cras elementum nulla
            vestibulum eros vitae rhoncus. Nec faucibus semper egestas tincidunt
            sagittis fames. Tincidunt mauris quam purus a neque in ridiculus.
            Vestibulum justo laoreet
          </Text>
        </Box>
      </Flex>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Privacy;