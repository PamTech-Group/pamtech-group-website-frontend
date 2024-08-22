import {
  Box,
  Flex,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
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
      bg="white"
      boxShadow="md"
      padding="2rem"
      borderRadius="md"
      justify="space-between"
      width="80vw">
      {/* Left Section */}
      <Flex
        flexDir="column"
        bgColor="#F1F1F1"
        padding="1.5rem"
        width="50%"
        gap="1rem"
        borderRadius="md">
        <Text fontSize="1.5rem" fontWeight="bold" color="black">
          Our Services
        </Text>
        <Text fontSize="1rem" color="gray.700" lineHeight="1.6">
          Lorem ipsum dolor sit amet consectetur. Massa ac sit adipiscing lectus
          urna arcu. Pulvinar pulvi nar risus elit turpis. Condimentum mauris in
          sed sagittis sit parturient arcu ut. Ac risus diam.
        </Text>
        {/* Social Media Icons */}
        <Flex justify="start" gap="1rem">
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook fontSize="1.5rem" />}
            bg="gray.100"
            color="black"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.5rem" />}
            bg="gray.100"
            color="black"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.5rem" />}
            bg="gray.100"
            color="black"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.5rem" />}
            bg="gray.100"
            color="black"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="YouTube"
            icon={<FaYoutube fontSize="1.5rem" />}
            bg="gray.100"
            color="black"
            rounded="5px"
            _hover={{ bg: "gray.300" }}
          />
        </Flex>
      </Flex>

      {/* Right Section */}
      <Flex bgColor="#FBFBFB" padding="1.5rem" width="50%" borderRadius="md">
        <List spacing={3} width="100%">
          <ListItem
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize="1.2rem" color="black">
              Oil and Gas
            </Text>
            <ListIcon as={BiChevronRight} color="gray.500" />
          </ListItem>

          {/* Highlighted item for Autoland */}
          <ListItem
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize="1.2rem" color="red.600" fontWeight="bold">
              Autoland
            </Text>
            <ListIcon as={BiChevronRight} color="red.600" />
          </ListItem>

          <ListItem
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize="1.2rem" color="black">
              Autoparts
            </Text>
            <ListIcon as={BiChevronRight} color="gray.500" />
          </ListItem>

          <ListItem
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize="1.2rem" color="black">
              Luxury Ride
            </Text>
            <ListIcon as={BiChevronRight} color="gray.500" />
          </ListItem>

          <ListItem
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize="1.2rem" color="black">
              Media
            </Text>
            <ListIcon as={BiChevronRight} color="gray.500" />
          </ListItem>

          <ListItem
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize="1.2rem" color="black">
              Foundation
            </Text>
            <ListIcon as={BiChevronRight} color="gray.500" />
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default Dropdown;
