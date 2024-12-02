import theme from "@/app/theme";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
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
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logoBlue from "../../../public/logoBlue.png";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "../minor/dropdown";
const NavWhite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navSpacing = useBreakpointValue({ base: 2, sm: 4, md: 6, lg: 8 });
  const logoSize = useBreakpointValue({ base: 25, sm: 30 });

  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();

  return (
    <Box
      bg="white"
      boxShadow="md"
      padding={{
        base: "0.5rem 1rem",
        sm: "0.75rem 2rem",
        md: "1rem 4rem",
        lg: "1rem 6rem",
      }}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo */}
        <Box>
          <Link href="/">
            <Image src={logoBlue} alt="Pamtech Logo" height={logoSize} />
          </Link>
        </Box>

        {/* Desktop Menu */}
        <HStack
          as={"nav"}
          spacing={navSpacing}
          display={{ base: "none", xl: "flex" }} // Show from medium screens and above
          fontWeight={theme.fontWeights.medium}
          color="primaryOrange"
        >
          <Link className="scaler" href="/about">
            About Us
          </Link>

          <Link className="scaler" href="/growth">
            Our Growth
          </Link>
          <Box position="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
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
                pointerEvents={isOpen ? "auto" : "none"}
              >
                <Dropdown />
              </Box>
            </Center>
          </Box>

          <Link className="scaler" href="/e-solution">
            e-Solution
          </Link>
          <Link className="scaler" href="/careers">
            Careers
          </Link>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }} // Display on small screens
          onClick={onMobileMenuOpen}
          variant="ghost"
          color="primaryOrange"
          fontSize={{ base: "1.2rem", sm: "1.5rem" }}
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
            color="textGrey"
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
            borderRadius={theme.buttonRadius.radius}
          >
            Contact Us
          </Button>
          <Button
            as="a"
            href="/socials"
            fontSize={{ base: "0.8rem", md: "1rem" }} // Responsive font size
            padding={theme.buttonPadding}
            bgColor="primaryOrange"
            _hover={{
              bgColor: "#961615",
            }}
            _active={{
              bgColor: "#bf1e1d",
            }}
            borderRadius={theme.buttonRadius.radius}
          >
            Socials
          </Button>
        </HStack>

        {/* Mobile Menu Drawer */}
        <Drawer
          isOpen={isMobileMenuOpen}
          placement="right"
          onClose={onMobileMenuClose}
        >
          <DrawerOverlay />
          <DrawerContent bgColor="#0F1010">
            <DrawerCloseButton />

            <DrawerBody pt="6rem">
              <VStack spacing={6} align="start">
                <Link href="/about" onClick={onMobileMenuClose}>
                  About Us
                </Link>
                <Menu>
                  <MenuButton
                    variant="flushed"
                    padding={0}
                    fontWeight={400}
                    fontSize="1rem"
                    as={Button}
                    rightIcon={<ChevronDownIcon alignSelf="center" />}
                  >
                    Our Businesses
                  </MenuButton>
                  <MenuList gap={5} bg="rgba(20, 20, 20, 0.4)">
                    <Link href="/oilgas">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Oil & Gas</MenuItem>
                    </Link>
                    <Link href="/autoland">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Autoland</MenuItem>
                    </Link>
                    <Link href="/autoparts">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Autoparts</MenuItem>
                    </Link>
                    <Link href="/ride">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">
                        Luxury Ride
                      </MenuItem>
                    </Link>
                    <Link href="/media">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Media</MenuItem>
                    </Link>
                    <Link href="/foundation">
                      <MenuItem bg="rgba(20, 20, 20, 0.9)">Foundation</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
                <Link href="/growth" onClick={onMobileMenuClose}>
                  Our Growth
                </Link>
                <Link href="/e-solution" onClick={onMobileMenuClose}>
                  e-Solutions
                </Link>
                <Link href="/careers" onClick={onMobileMenuClose}>
                  Careers
                </Link>
                <Link href="/contact-us" onClick={onMobileMenuClose}>
                  Contact us
                </Link>
                <Link href="/socials" onClick={onMobileMenuClose}>
                  Socials
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default NavWhite;
