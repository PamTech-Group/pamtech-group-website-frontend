import { Box, Flex, Button, HStack } from "@chakra-ui/react";
import logo from "../../../public/logo.png";
import { Image } from "@chakra-ui/next-js";
import Link from "next/link";
import theme from "@/app/theme";
const Nav = () => {
  return (
    <Box>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link href="/">
            <Image src={logo} alt="Pamtech Logo" height={50} />
          </Link>
        </Box>

        <HStack
          as={"nav"}
          spacing={20}
          display={{ base: "none", md: "flex" }}
          fontWeight={400}>
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
            color="text"
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
    </Box>
  );
};

export default Nav;
