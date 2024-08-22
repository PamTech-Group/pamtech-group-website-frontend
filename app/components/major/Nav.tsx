import {
  Box,
  Flex,
  Button,
  HStack,
  Text,
  useDisclosure,
  Center,
  Icon,
} from "@chakra-ui/react";
import logo from "../../../public/logo.png";
import logoBlue from "../../../public/logoBlue.png"; // Blue logo
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
      bg={isScrolled ? "white" : "transparent"} // Background changes after scroll
      transition="background-color 0.3s ease-in-out"
      boxShadow={isScrolled ? "md" : "none"} // Optional: add shadow when scrolled
      padding="2rem 8rem">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
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

        <HStack
          as={"nav"}
          spacing={20}
          display={{ base: "none", md: "flex" }}
          fontWeight={400}
          color={isScrolled ? "primaryOrange" : "white"} // Change text color based on scroll
        >
          <Link className="scaler" href="/about">
            About Us
          </Link>

          <Box position="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Flex className="scaler" cursor="pointer" alignItems="center">
              <Text>Business</Text>
              <Icon fontSize="1rem" as={BiChevronDown} />
            </Flex>

            {/* Dropdown menu */}
            <Center>
              <Box
                marginLeft="4rem"
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
                pointerEvents={isOpen ? "auto" : "none"} // Prevents interaction when closed
              >
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
        <HStack spacing={4}>
          <Button
            as="a"
            href="/contact-us"
            colorScheme="transparent"
            color={isScrolled ? "black" : "white"}
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
