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
  List,
  ListItem,
  OrderedList,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Nav from "../components/major/Nav";
import { BiChevronDown, BiChevronRight, BiLogoPlayStore } from "react-icons/bi";
import theme from "../theme";
import Link from "next/link";
import Image from "next/image";
import logoBlue from "../../public/logoBlue.png";
import esolution from "../../public/esolution.webp";
import Dropdown from "../components/minor/dropdown";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GrApple } from "react-icons/gr";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";
const Solution = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();

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
      <Flex
        padding="2rem 8rem"
        width="50%"
        flexDirection="column"
        gap="2rem"
        color="textGrey">
        <Text fontWeight={500} fontSize="2.5rem">
          e-Solutions
        </Text>
        <Text fontWeight={300} fontSize="1.2rem">
          At Pamtech, we are motivated by a deep desire to make impactful
          contributions to the development of our host communities and society
          as a whole.
        </Text>
        <Button
          width="fit-content"
          padding={theme.buttonPadding}
          bgColor="primaryOrange"
          _hover={{
            bgColor: "#961615",
          }}
          _active={{
            bgColor: "#bf1e1d",
          }}
          fontWeight={300}
          fontSize="1.2rem"
          borderRadius={theme.buttonRadius.radius}
          rightIcon={
            <BiChevronRight fontSize="1.5rem" className="arrow-icon" />
          }>
          Talk to us
        </Button>
      </Flex>
      <Box color=" textGrey">
        {/* Petrol Padi Section */}
        <Flex
          my="4rem"
          padding="2rem 8rem"
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          gap="4rem"
          wrap="wrap">
          {/* Text Section */}
          <Box flex="1" bg="rgba(100, 94, 94, .3)">
            <Heading fontSize="2xl" color="red.500" mb="1rem">
              Petrol Padi
            </Heading>
            <Text mb="1.5rem">
              This innovative platform is designed to transform the way
              customers purchase fuel, offering a seamless and convenient
              experience.
            </Text>
            <Text>
              1. Convenience: Buy fuel from the comfort of your own home, 24/7.
              <br />
              2. Time-saving: No more waiting in lines or queues at fuel
              stations.
              <br />
              3. Easy Payment: Secure and hassle-free payment options.
              <br />
              4. Fuel Price Comparison: Compare prices across different fuel
              stations.
              <br />
              7. Real-time Updates: Get updates on fuel availability and prices.
              <br />
              9. Safety: Avoid handling cash and reduce risk of fuel theft.
              <br />
              10. Station information: Access information about fuel stations,
              including hours, amenities, and reviews.
            </Text>

            {/* App Store and Google Play Buttons */}
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
          </Box>

          {/* Phone Mockup Image */}
          <Flex
            justifyContent="center"
            flex="1"
            textAlign="center"
            bgColor="#C72A3D">
            <Image src={esolution} alt="Phone Mockup" />
          </Flex>
        </Flex>

        {/* Autoland Section */}
        <Flex
          my="4rem"
          padding="2rem 8rem"
          bg="rgba(100, 94, 94, .1)"
          borderRadius="lg"
          boxShadow="md"
          gap="4rem"
          alignItems="center"
          wrap="wrap">
          {/* Text Section */}
          <Box flex="1">
            <Heading fontSize="2xl" color="red.500" mb="1rem">
              Autoland
            </Heading>
            <Text mb="1.5rem">
              This innovative platform is designed to transform the way
              customers purchase fuel, offering a seamless and convenient
              experience.
            </Text>

            {/* Coming Soon Button */}
            <Button
              width="fit-content"
              padding={theme.buttonPadding}
              bgColor="primaryOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              fontWeight={300}
              fontSize="1.2rem"
              borderRadius={theme.buttonRadius.radius}>
              Comming Soon...
            </Button>
          </Box>

          {/* Placeholder for phone mockup image or extra content */}
          <Flex flex="1">
            <OrderedList color="textGrey" spacing="1rem">
              {" "}
              <ListItem>
                {" "}
                Convenience: Buy fuel from the comfort of your own home, 24/7.
              </ListItem>
              <ListItem>
                Time-saving: No more waiting in lines or queues at fuel
                stations.
              </ListItem>
              <ListItem>
                Easy Payment: Secure and hassle-free payment options.
              </ListItem>
              <ListItem>
                . Fuel Price Comparison: Compare prices across different fuel
                stations.
              </ListItem>
              <ListItem>
                Real-time Updates: Get updates on fuel availability and prices.{" "}
              </ListItem>
            </OrderedList>
          </Flex>
        </Flex>
        <Flex
          my="4rem"
          padding="2rem 8rem"
          bg="rgba(100, 94, 94, .1)"
          borderRadius="lg"
          boxShadow="md"
          gap="4rem"
          alignItems="center"
          wrap="wrap">
          {/* Text Section */}
          <Box flex="1">
            <Heading fontSize="2xl" color="red.500" mb="1rem">
              Autoparts
            </Heading>
            <Text mb="1.5rem">
              This innovative platform is designed to transform the way
              customers purchase fuel, offering a seamless and convenient
              experience.
            </Text>

            {/* Coming Soon Button */}
            <Button
              width="fit-content"
              padding={theme.buttonPadding}
              bgColor="primaryOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              fontWeight={300}
              fontSize="1.2rem"
              borderRadius={theme.buttonRadius.radius}>
              Comming Soon...
            </Button>
          </Box>

          {/* Placeholder for phone mockup image or extra content */}
          <Flex flex="1">
            <OrderedList color="textGrey" spacing="1rem">
              {" "}
              <ListItem>
                {" "}
                Convenience: Buy fuel from the comfort of your own home, 24/7.
              </ListItem>
              <ListItem>
                Time-saving: No more waiting in lines or queues at fuel
                stations.
              </ListItem>
              <ListItem>
                Easy Payment: Secure and hassle-free payment options.
              </ListItem>
              <ListItem>
                . Fuel Price Comparison: Compare prices across different fuel
                stations.
              </ListItem>
              <ListItem>
                Real-time Updates: Get updates on fuel availability and prices.{" "}
              </ListItem>
            </OrderedList>
          </Flex>
        </Flex>
      </Box>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Solution;
