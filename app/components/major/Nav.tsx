import { Box, Flex, Button, HStack } from "@chakra-ui/react";
import logo from "../../../public/logo.png";
import logoBlue from "../../../public/logoBlue.png"; // Blue logo
import { Image } from "@chakra-ui/next-js";
import Link from "next/link";
import theme from "@/app/theme";
import { useState, useEffect } from "react";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
            {/* Conditional rendering of logos */}
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
          color={isScrolled ? "black" : "white"} // Change text color based on scroll
        >
          <Link className="scaler" href="#">
            About Us
          </Link>
          <Link className="scaler" href="#">
            Business
          </Link>
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
