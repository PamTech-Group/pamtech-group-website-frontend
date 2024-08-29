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
import ButtonMain from "../components/minor/ButtonMain";
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
        padding="2rem 8rem"
        background="#00030C"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        color="#F7F7F7">
        <Nav />
        <Flex
          height="100%"
          flexDir="column"
          justifyContent="center"
          gap="2rem"
          width="50%">
          <Heading fontSize="3rem" fontWeight={500}>
            e-Solutions
          </Heading>
          <Text fontWeight={500} width="60%" textAlign="justify">
            Pamtech Group is at the forefront of innovation, consistently
            developing cutting-edge e-solutions that drive efficiency, enhance
            user experience, and transform industries.
          </Text>
          <ButtonMain text="Talk to us" />
        </Flex>
      </Box>
      <Flex
        padding="2rem 8rem"
        width="70%"
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
      <Box color=" textGrey" padding="2rem 8rem" fontWeight={500}>
        {/* Petrol Padi Section */}
        <Flex my="4rem" bg="white" borderRadius="lg" boxShadow="md" wrap="wrap">
          {/* Text Section */}
          <Box padding="2.5rem 3rem" flex="1" bg="rgba(100, 94, 94, .1)">
            <Heading fontSize="2xl" color="red.500" mb="1rem">
              Petrol Padi
            </Heading>
            <Text mb="1.5rem" fontWeight={500}>
              This innovative platform is designed to transform the way
              customers purchase fuel, offering a seamless and convenient
              experience.
            </Text>
            <OrderedList my="2rem" spacing="1rem" fontWeight={500}>
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
            padding="2.5rem 3rem"
            justifyContent="center"
            flex="1"
            textAlign="center"
            bgColor="primaryOrange">
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
              fontSize="1.2rem"
              borderRadius="lg">
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
