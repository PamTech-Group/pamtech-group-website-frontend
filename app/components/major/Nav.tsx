import { Box, Flex, Link, Button, HStack } from "@chakra-ui/react";
import logo from "../../../public/logo.png";
import { Image } from "@chakra-ui/next-js";
const Header = () => {
  return (
    <Box padding="2rem 8rem">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link href="/">
            <Image src={logo} alt="Pamtech Logo" height={50} />
          </Link>
        </Box>

        <HStack as={"nav"} spacing={20} display={{ base: "none", md: "flex" }}>
          <Link href="#">About Us</Link>
          <Link href="#">Business</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">e-Solution</Link>
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
          <Button padding="1rem 2rem" bgColor="primaryOrange" borderRadius={0}>
            Social
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
