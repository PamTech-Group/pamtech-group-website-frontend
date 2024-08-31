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
  useBreakpointValue,
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
import ButtonMain from "../components/minor/ButtonMain";
const Solution = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 2rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });
  const headingFontSize = useBreakpointValue({ base: "2rem", md: "2.5rem", lg: "3rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });
  const buttonFontSize = useBreakpointValue({ base: "0.8rem", md: "1rem", lg: "1.2rem" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();

  return (
    <Box bgColor="#FFFFFF">
      <Box
      padding={contentPadding}
        background="#00030C"
        bgSize="cover"
        bgPosition="center"
        minHeight={{ base: "auto", md: "100vh" }}
        color="#F7F7F7">
        <Nav />
        <Flex
          height={{ base: "auto", md: "calc(100vh - 80px)" }}
          flexDir="column"
          justifyContent="center"
          gap="2rem"
          width={{ base: "100%", md: "70%", lg: "50%" }}
          paddingY={{ base: "4rem", md: "0" }}>
          <Heading fontSize={headingFontSize} fontWeight={500}>
            e-Solutions
          </Heading>
          <Text fontWeight={500} width={{ base: "100%", md: "80%" }} textAlign="justify" fontSize={textFontSize}>
            Pamtech Group is at the forefront of innovation, consistently
            developing cutting-edge e-solutions that drive efficiency, enhance
            user experience, and transform industries.
          </Text>
          <ButtonMain linkHref="https://wa.me/+2347007268324"   text="Talk to us" />
        </Flex>
      </Box>

      <Box color=" textGrey" padding={contentPadding} fontWeight={500}>
        {/* Petrol Padi Section */}
        <Flex my="4rem" bg="white" borderRadius="lg" boxShadow="md" flexDirection={{ base: "column", md: "row" }} wrap='wrap'>
          {/* Text Section */}
          <Box padding="2.5rem 3rem" flex="1" bg="rgba(100, 94, 94, .1)">
            <Heading fontSize="2xl" color="primaryOrange" mb="1rem">
              Petrol Padi
            </Heading>
            <Text mb="1.5rem" fontWeight={500} fontSize={textFontSize}>
              This innovative platform is designed to transform the way
              customers purchase fuel, offering a seamless and convenient
              experience.
            </Text>
            <OrderedList my="2rem" spacing="1rem" fontWeight={500} fontSize={textFontSize}>
              <ListItem>
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
                Fuel Price Comparison: Compare prices across different fuel
                stations.
              </ListItem>

              <ListItem>
                Real-time Updates: Get updates on fuel availability and prices.
              </ListItem>

              <ListItem>
                Safety: Avoid handling cash and reduce risk of fuel theft.
              </ListItem>

              <ListItem>
                Station information: Access information about fuel stations,
                including hours, amenities, and reviews.
              </ListItem>
            </OrderedList>

            {/* App Store and Google Play Buttons */}
            <Flex gap="1rem" flexDirection={{ base: "column", sm: "row" }}>
              <Button
                bgColor="#0e0e0e"
                colorScheme="gray"
                leftIcon={<BiLogoPlayStore fontSize="1.5rem" />}
                variant="solid" fontSize={buttonFontSize}>
                Google Play
              </Button>
              <Button
                leftIcon={<GrApple fontSize="1.5rem" />}
                bgColor="#0e0e0e"
                variant="solid" fontSize={buttonFontSize}>
                App Store{" "}
              </Button>
            </Flex>
          </Box>

          {/* Phone Mockup Image */}
          <Flex
            padding="2.5rem 3rem"
            justifyContent="center"
            flex="1"
            textAlign="center"
            bgColor="primaryOrange">
            <Image src={esolution} alt="Phone Mockup" style={{ maxWidth: '100%', height: 'auto' }}/>
          </Flex>
        </Flex>

        {/* Autoland Section */}
        <Flex
          my="4rem"
          padding={contentPadding}          bg="rgba(100, 94, 94, .1)"
          borderRadius="lg"
          boxShadow="md"
          gap="4rem"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }} wrap='wrap'>
          {/* Text Section */}
          <Box flex="1">
            <Heading fontSize="2xl" color="primaryOrange" mb="1rem">
              Autoland
            </Heading>
            <Text mb="1.5rem" fontSize={textFontSize}>
              Autoland is changing the game in vehicle purchasing, providing a
              streamlined and user-friendly experience for customers.
            </Text>

            {/* Coming Soon Button */}
            <Button
              width="fit-content"
              padding="1.5rem"
              bgColor="primaryOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              borderRadius="lg"  
              fontSize={buttonFontSize}>
              Comming Soon...
            </Button>
          </Box>

          {/* Placeholder for phone mockup image or extra content */}
          <Flex flex="1">
            <OrderedList color="textGrey" spacing="1rem" fontSize={textFontSize}>
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
          padding={contentPadding}
          bg="rgba(100, 94, 94, .1)"
          borderRadius="lg"
          boxShadow="md"
          gap="4rem"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          wrap="wrap">
          {/* Text Section */}
          <Box flex="1">
            <Heading fontSize="2xl" color="primaryOrange" mb="1rem">
              Autoparts
            </Heading>
            <Text mb="1.5rem" fontSize={textFontSize}>
              Experience a new way to shop for auto parts with Pamtech
              Autoparts, designed to make finding and buying parts easy,
              convenient, and enjoyable
            </Text>

            {/* Coming Soon Button */}
            <Button
              width="fit-content"
              padding="1.5rem"
              bgColor="primaryOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              fontSize={buttonFontSize}              borderRadius={theme.buttonRadius.radius}>
              Comming Soon...
            </Button>
          </Box>

          {/* Placeholder for phone mockup image or extra content */}
          <Flex flex="1">
            <OrderedList color="textGrey" spacing="1rem" fontSize={textFontSize}>
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
