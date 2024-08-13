import { Box, Flex, Button, HStack } from "@chakra-ui/react";
import logo from "../../../public/logo.png";
import { Image } from "@chakra-ui/next-js";
import Link from "next/link";
const Header = () => {
  return (
    <Box>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link href="/">
            <Image src={logo} alt="Pamtech Logo" height={50} />
          </Link>
        </Box>

        <HStack as={"nav"} spacing={20} display={{ base: "none", md: "flex" }}>
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
        <HStack>
          <Button
            as="a"
            href="#"
            colorScheme="transparent"
            color="text"
            outline="1px solid #E52321"
            padding="1rem 2rem"
            borderRadius={0}>
            Contact Us
          </Button>
          <Button
            padding="1rem 2rem"
            bgColor="primaryOrange"
            _hover={{
              bgColor: "#961615",
            }}
            _active={{
              bgColor: "#bf1e1d",
            }}
            borderRadius={0}>
            Social
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
