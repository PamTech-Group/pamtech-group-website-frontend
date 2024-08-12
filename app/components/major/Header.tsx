import { Box, Flex, Link, Button, HStack } from "@chakra-ui/react";
import logo from "../../../public/logo.png";
import { Image } from "@chakra-ui/next-js";
const Header = () => {
  return (
    <Box bg="blue.900" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link href="/">
            <Image src={logo} alt="Pamtech Logo" height={50} />
          </Link>
        </Box>

        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Link href="#">About Us</Link>
          <Link href="#">Business</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">e-Solution</Link>
          <Link href="#">Contact Us</Link>
          <Button colorScheme="red">Social</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
