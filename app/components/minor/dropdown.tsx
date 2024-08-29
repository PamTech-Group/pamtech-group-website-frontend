import {
  Box,
  Flex,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Dropdown = () => {
  return (
    <Flex
      bg="#FFFFFF"
      boxShadow="md"
      padding="2rem"
      borderRadius="md"
      justify="space-between"
      width="80svw">
      {/* Left Section */}
      <Flex
        flexDir="column"
        bgColor="#F1F1F1"
        padding="1.5rem"
        width="50%"
        gap="1rem"
        borderRadius="md">
        <Text fontSize="2rem" fontWeight="bold" color="#171717">
          Our Businesses
        </Text>
        <Text fontSize="1.2rem" color="textGrey" lineHeight="1.6">
          As a diversified and fully integrated conglomerate, our interest in
          multiple industries indicates our determination to cater to our vision
          of empowering success through committed service to humanity.
        </Text>
        {/* Social Media Icons */}
        <Flex justify="start" gap="1rem">
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook fontSize="1.5rem" />}
            bg="gray.100"
            color="#171717"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.5rem" />}
            bg="gray.100"
            color="#171717"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.5rem" />}
            bg="gray.100"
            color="#171717"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.5rem" />}
            bg="gray.100"
            color="#171717"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="YouTube"
            icon={<FaYoutube fontSize="1.5rem" />}
            bg="gray.100"
            color="#171717"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
        </Flex>
      </Flex>

      {/* Right Section */}
      <Flex bgColor="#FBFBFB" padding="2rem" width="50%" borderRadius="md">
        <List spacing={5} width="100%">
          {[
            { name: "Oil and Gas", href: "/oilgas" },
            { name: "Autoland", href: "/autoland" },
            { name: "Autoparts", href: "/autoparts" },
            { name: "Luxury Ride", href: "/ride" },
            { name: "Media", href: "/media" },
            { name: "Foundation", href: "/foundation" },
          ].map((item, index) => (
            <ListItem
              key={index}
              display="flex"
              width="100%"
              alignItems="center"
              cursor="pointer"
              transition="all 0.3s ease" // Smooth transition for hover effects
              _hover={{
                transform: "translateX(10px)", // Shift text and icon to the right
                color: "primaryOrange", // Change text color on hover
              }}>
              <Link className="business-nav" href={item.href}>
                <Flex
                  justify="space-between"
                  align="center"
                  width="100%"
                  transition="all 0.3s ease">
                  <Text
                    fontSize="1.2rem"
                    color="#171717"
                    fontWeight={500}
                    transition="color 0.3s ease" // Transition text color smoothly
                    _hover={{
                      color: "primaryOrange", // Hover color for text
                    }}>
                    {item.name}
                  </Text>
                  <ListIcon
                    as={BiChevronRight}
                    color="#171717"
                    fontSize="1.5rem"
                    transition="color 0.3s ease, transform 0.3s ease" // Smooth icon transition
                    _hover={{
                      color: "primaryOrange", // Hover color for the icon
                      transform: "translateX(10px)", // Move icon to the right
                    }}
                  />
                </Flex>
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};

export default Dropdown;
