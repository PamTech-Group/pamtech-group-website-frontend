"use client";
import { Image } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import logoBlue from "../../public/logoBlue.webp";
import theme from "../theme";
import Footer from "../components/major/Footer";
import Link from "next/link";
import Sustainability from "../components/minor/Sustainability";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "../components/minor/dropdown";
import { HamburgerIcon } from "@chakra-ui/icons";
const ContactPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();

  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // State to handle form errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  // Handle input change
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value === "",
    });
  };

  // Handle form submission

  return (
    <Box bgColor="#FFFFFF">
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
      <Box padding="2rem 8rem" color="textGrey">
        <VStack align="left" my="4rem" width="50%">
          <Text fontWeight={500} fontSize="1.5rem" color="primaryOrange">
            Contact Us{" "}
          </Text>
          <Text fontSize="2rem" fontWeight={500}>
            How can we help you?
          </Text>
          <Text fontSize="1.2rem">
            We understand that every business is unique, which is why we take
            the time to get to know you and your specific needs
          </Text>
        </VStack>
        <Flex
          bgColor="#F7F7F7"
          color="#333333"
          gap="2rem"
          height="100%"
          width="100%"
          justifyContent="space-between">
          <Flex
            flexDirection="column"
            bgColor="#F1F1F1"
            minHeight="100%"
            padding="4rem 2rem"
            boxShadow="sm"
            width="40%"
            fontSize="1rem">
            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Contact</Text>
              <Link href="#">+2348115004000</Link>
              <Link href="#">info@pamtech.com</Link>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Head Office</Text>
              <Text fontWeight={300}>
                Plot CR17 Housing Area T, Port Harcourt Rd, behind Apams, New
                Owerri, Owerri, Imo State, Nigeria.
              </Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Pamtech Oil & Gas</Text>
              <Text>
                Plot 2 Winners Ring Road, Opp. NDDC, Off PH Road, Owerri, Imo
                State.
              </Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Pamtech Autoland</Text>
              <Text fontWeight={300}>
                Plot CR/8 Port Harcourt Road, Close to Hospital Junction,
                Owerri, Owerri, Imo State, Nigeria.
              </Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />
          </Flex>
          <Flex
            flexDirection="column"
            width="60%"
            height="100%"
            padding="4rem 2rem"
            gap="2rem"
            borderRadius="md">
            <FormControl width="70%">
              <FormLabel
                fontWeight={500}
                fontSize="1rem"
                htmlFor="name"
                color="#333333">
                Name
              </FormLabel>
              <Input
                id="name"
                name="name"
                padding="1.5rem 1rem"
                borderRadius="md"
                borderColor="#33333326"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                variant="outline"
              />
            </FormControl>
            <FormControl width="70%">
              <FormLabel fontWeight={500} fontSize="1rem" htmlFor="email">
                Email
              </FormLabel>
              <Input
                id="email"
                name="email"
                borderColor="#33333326"
                padding="1.5rem 1rem"
                borderRadius="md"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="myemail@gmail.com"
                variant="outline"
              />
            </FormControl>
            <FormControl width="70%">
              <FormLabel fontWeight={500} fontSize="1rem" htmlFor="phone">
                Phone Number
              </FormLabel>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                borderColor="#33333326"
                padding="1.5rem 1rem"
                borderRadius="md"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+23480080010"
                variant="outline"
              />
            </FormControl>
            <FormControl width="70%">
              <FormLabel fontWeight={500} fontSize="1rem" htmlFor="message">
                Message
              </FormLabel>
              <Textarea
                height="10rem"
                id="message"
                name="message"
                borderColor="#33333326"
                padding="1.5rem 1rem"
                borderRadius="md"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="my message"
                variant="outline"
              />
            </FormControl>
            <Box textAlign="center" width="70%">
              <Button
                padding="1rem 1.5rem"
                width="fit-content"
                bgColor="primaryOrange">
                Submit
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default ContactPage;
