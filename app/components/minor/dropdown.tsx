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
import Autoland from "../../autoland/page";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Dropdown = () => {
  return (
    <Flex>
      <Flex
        bgColor="#F1F1F1
">
        <Text>Our Service</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Massa ac sit adipiscing lectus
          urna arcu. Pulvinar pulvi nar risus elit turpis. Condimentum mauris in
          sed sagittis sit parturient arcu ut. Ac risus diam.
        </Text>
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
      <Flex bgColor="#FBFBFB">
        <List>
          <ListItem>
            <Text>Oil and Gas</Text>
            <ListIcon as={BiChevronRight} />
          </ListItem>
          <ListItem>
            <Text>Autoland</Text>
            <ListIcon as={BiChevronRight} />
          </ListItem>
          <ListItem>
            <Text>Autoparts</Text>
            <ListIcon as={BiChevronRight} />
          </ListItem>
          <ListItem>
            <Text> Pamtech Ride</Text>
            <ListIcon as={BiChevronRight} />
          </ListItem>
          <ListItem>
            <Text>Media</Text>
            <ListIcon as={BiChevronRight} />
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default Dropdown;
