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
  UnorderedList,
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
import esolution from "../../public/phoneSolution.webp";
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
  const headingFontSize = useBreakpointValue({
    base: "2rem",
    md: "2.5rem",
    lg: "3rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.1rem",
    lg: "1.2rem",
  });
  const buttonFontSize = useBreakpointValue({
    base: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
  });
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
        color="#F7F7F7"
      >
        <Nav />
        <Flex
          height={{ base: "100vh", md: "calc(100vh - 80px)", xl:'100vh' }}
          flexDir="column"
          justifyContent="center"
          alignItems={{
            base: "center",
            md: "initial",
          }}
          gap="2rem"
          width={{ base: "100%", md: "70%" }}
          paddingY={{ base: "4rem", md: "0" }}
          pl={{
            base: "unset",
            myxl: "3.5rem",
          }}
        >
          <Heading fontSize={headingFontSize} fontWeight={500}>
            e-Solutions
          </Heading>
          <Text
            fontWeight={500}
            width={{ base: "100%" }}
            textAlign={{
              base: "center",
              md: "left",
            }}
            fontSize={textFontSize}
          >
            Pamtech Group is at the forefront of innovation, consistently
            developing cutting-edge e-solutions that drive efficiency, enhance
            user experience, and transform industries.
          </Text>
          <ButtonMain
            linkHref="https://wa.me/+2347007268324"
            text="Talk to us"
          />
        </Flex>
      </Box>

      <Box color=" textGrey" padding={contentPadding} fontWeight={500}>
        {/* Petrol Padi Section */}
        <Flex
          my={{
            base: "1rem",
            md: "2rem",
            myxl: "4rem",
          }}
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          flexDirection={{ base: "column", xl: "row" }}
          wrap="wrap"
          justifyContent={{}}
     
        >
          {/* Text Section */}
          <Box
            padding={{
              base: "1rem",
              md: '2rem',
              myxl: "2.5rem 3rem",
            }}
            bg="rgba(100, 94, 94, .1)"
            width={{
              base: "100%",
              xl: "50%",
            }}
          >
            <Heading fontSize="2xl" color="primaryOrange" mb="1rem" data-aos="zoom-in-up" >
              Petrol Padi
            </Heading>
            <Text mb="1.5rem" fontWeight={500} fontSize={textFontSize} data-aos="zoom-in-up" >
              Petrol Padi is a mobile app that simplifies fuel access in
              Nigeria. It offers real-time fuel prices and enables seamless
              ordering and delivery, making it convenient for both oil marketers
              and suppliers.
            </Text>
            <UnorderedList
              my="2rem"
              spacing="1rem"
              fontWeight={400}
              fontSize={textFontSize}
              data-aos="zoom-in-right" 
            >
              <ListItem>
                Petrol Padi is a mobile app that lets you easily check fuel
                prices and order petroleum products from anywhere in Nigeria.
              </ListItem>
              <ListItem>
                Petrol Padi provides real-time fuel prices at various depots,
                ensuring you always know the current cost.
              </ListItem>
              <ListItem>
                Petrol Padi lets you browse depots and products, placing orders
                directly from the app.
              </ListItem>

              <ListItem>
                Petrol Padi allows you to track your fuel delivery status
                seamlessly.
              </ListItem>

              <ListItem>
                Petrol Padi partners with trusted truck owners to ensure safe
                and timely fuel delivery.
              </ListItem>

              <ListItem>
                Petrol Padi simplifies fuel buying for businesses and filling
                stations alike.
              </ListItem>

              <ListItem>
                Petrol Padi provides customer support to ensure a smooth and
                hassle-free experience.
              </ListItem>
              <ListItem>
                Petrol Padi is revolutionizing fuel buying in Nigeria, making it
                easier, faster, and more reliable.
              </ListItem>
            </UnorderedList>

            {/* App Store and Google Play Buttons */}
            <Flex gap="1rem" flexDirection={{ base: "column", sm: "row" }}data-aos="zoom-in-up" >
              <Button
              as="a"
                  href="https://play.google.com/store/apps/details?id=com.petroconnect.petro_connect"
                bgColor="#0e0e0e"
               _hover={{bgColor: 'primaryOrange'}}
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
                _hover={{bgColor: 'primaryOrange'}}
                variant="solid"
                fontSize={buttonFontSize}
              >
                App Store{" "}
              </Button>
            </Flex>
          </Box>

          {/* Phone Mockup Image */}
          <Flex
            padding="2.5rem 3rem"
            justifyContent="center"
            alignItems="center"
            flex={1}
            width="100%"
            textAlign="center"
            bgColor="primaryOrange"
            data-aos="zoom-in-left" 
          >
            <Image
              src={esolution}
              alt="Phone Mockup"
              style={{ backgroundSize: "cover", height: "50%" }}
            />
          </Flex>
        </Flex>

        {/* Autoland Section */}
        <Flex
           my={{
            base: "1rem",
            md: "2rem",
            myxl: "4rem",
          }}
          padding="2rem"
          bg="rgba(100, 94, 94, .1)"
          borderRadius="lg"
          boxShadow="md"
          gap="4rem"
          alignItems="center"
          flexDirection={{ base: "column", xl: "row" }}
          wrap="wrap"
         
        >
          {/* Text Section */}
          <Box flex="1"   data-aos="zoom-in-right">
            <Heading fontSize="2xl" color="primaryOrange" mb="1rem">
              Autoland
            </Heading>
            <Text mb="1.5rem" fontSize={textFontSize} fontWeight={400}>
              Autoland is changing the game in vehicle purchasing, providing a
              streamlined and user-friendly experience for customers.
            </Text>

            {/* Coming Soon Button */}
            <Box
              width="fit-content"
              padding="1rem"
              bgColor="primaryOrange"
              color="white"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              borderRadius="lg"
              fontSize={buttonFontSize}
            >
              Coming Soon...
            </Box>
          </Box>

          {/* Placeholder for phone mockup image or extra content */}
          <Flex flex="1"   data-aos="zoom-in-left">
            <UnorderedList
              color="textGrey"
              spacing="1rem"
              fontSize={textFontSize}
              fontWeight={400}
            >
              {" "}
              <ListItem>
                <strong>Seamless Repair Booking:</strong> Schedule car repairs
                with trusted mechanics right from your phone—no calls or long
                waits required.{" "}
              </ListItem>
              <ListItem>
                <strong>
                  Service Reminders:</strong> Never miss a service again with automated
                  reminders that keep your vehicle in top condition.
                
              </ListItem>
              <ListItem>
                <strong>
                  Car Care Tips: </strong> Stay informed with expert tips on vehicle
                  maintenance, helping you extend the life of your car and drive
                  safely.
               
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
           my={{
            base: "1rem",
            md: "2rem",
            myxl: "4rem",
          }}
          padding="2rem"
          bg="rgba(100, 94, 94, .1)"
          borderRadius="lg"
          boxShadow="md"
          gap="4rem"
          alignItems="center"
          flexDirection={{ base: "column", xl: "row" }}
          wrap="wrap"
        
        >
          {/* Text Section */}
          <Box flex="1"   data-aos="zoom-in-right">
            <Heading fontSize="2xl" color="primaryOrange" mb="1rem">
              Autoparts
            </Heading>
            <Text mb="1.5rem" fontSize={textFontSize} fontWeight={400}>
              Experience a new way to shop for auto parts with Pamtech
              Autoparts, designed to make finding and buying parts easy,
              convenient, and enjoyable
            </Text>

            {/* Coming Soon Button */}
            <Box
              width="fit-content"
              padding="1rem"
              color="white"
              bgColor="primaryOrange"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              fontSize={buttonFontSize}
              borderRadius={theme.buttonRadius.radius}
            >
              Coming Soon...
            </Box>
          </Box>

          {/* Placeholder for phone mockup image or extra content */}
          <Flex flex="1"   data-aos="zoom-in-left">
            <UnorderedList
              color="textGrey"
              spacing="1rem"
              fontSize={textFontSize}
              fontWeight={400}
            >
              {" "}
              <ListItem>
                {" "}
            <strong>Convenience:</strong> Shop for auto parts from the comfort of your own home, 24/7, and have them delivered to your doorstep.              </ListItem>
              <ListItem>
              <strong>Wide Selection:</strong> Access a vast inventory of auto parts from various manufacturers and suppliers, all in one place.
              </ListItem>
            
          
              <ListItem>
                {/*  eslint-disable-next-line react/no-unescaped-entities */}
                <strong>Easy Search:</strong> Quickly find the right parts for your vehicle using the app's intuitive search function, filtering by make, model, year, and more.
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Box>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Solution;
