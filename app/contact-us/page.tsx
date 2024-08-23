"use client";
import { Image } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../../public/logoBlue.png";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import bg3 from "../../public/bg3.png";
import Footer from "../components/major/Footer";
import Link from "next/link";
import Sustainability from "../components/minor/Sustainability";
const ContactPage = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // State to handle form errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  // Handle input change
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value === "",
    });
  };

  // Handle form submission

  return (
    <Box bgColor="#040A22">
      <Box padding="2rem 8rem" bgColor="#F7F7F7" color="textGrey">
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
            <Link className="scaler" href="/about">
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
              color="#33333380"
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
      <Box padding="2rem 8rem">
        <VStack align="left" my="4rem">
          <Text fontWeight={500} fontSize="2rem" color="primaryOrange">
            Contact Us{" "}
          </Text>
          <Text color="#F7F7F7" fontSize="2.5rem" fontWeight={500}>
            How can we help you?
          </Text>
          <Text color="#F7F7F7" fontSize="1.2rem">
            Lorem ipsum dolor sit amet consectetur. Fringilla sagittis justo{" "}
            <br />
            nulla a. Morbi sed consectetur porta vitae ullamcorper. Odio at.
          </Text>
        </VStack>
        <Flex
          bgColor="#F7F7F7"
          color="#333333"
          gap="2rem"
          height="100%"
          width="100%"
          justifyContent="space-between">
          <Flex
            flexDirection="column"
            bgColor="#F1F1F1"
            minHeight="100%"
            padding="4rem 2rem"
            border="1px solid #33333326"
            width="40%"
            fontSize="1rem">
            <Flex flexDirection="column" gap=".4rem">
              <Text>Contact</Text>
              <Link href="#">+2348115004000</Link>
              <Text>Email</Text>
              <Link href="#">info@pamtech.com</Link>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text>Head Office</Text>
              <Text>New Owerri Bla Bla</Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text>Oil and Gas</Text>
              <Text>Bla bla bla</Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text>Autoparts/Ride/Media Office</Text>
              <Text>
                Plot CR/8 Port Harcourt Road, Near Hospital Junction, Owerri,
                Imo State
              </Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text>PH Office</Text>
              <Text>
                Plot CR/8 Port Harcourt Road, Near Hospital Junction, Owerri,
                Imo State
              </Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />
          </Flex>
          <Flex
            flexDirection="column"
            width="50%"
            height="100%"
            padding="4rem 2rem"
            gap="2rem">
            <FormControl width="70%">
              <FormLabel htmlFor="name" color="#333333">
                Name
              </FormLabel>
              <Input
                id="name"
                name="name"
                padding="2rem 1rem"
                borderColor="#33333326"
                borderRadius="unset"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                variant="outline"
              />
            </FormControl>
            <FormControl width="70%">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                padding="2rem 1rem"
                borderColor="#33333326"
                borderRadius="unset"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="myemail@gmail.com"
                variant="outline"
              />
            </FormControl>
            <FormControl width="70%">
              <FormLabel htmlFor="name">Phone Number</FormLabel>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                padding="2rem 1rem"
                borderColor="#33333326"
                borderRadius="unset"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+23480080010"
                variant="outline"
              />
            </FormControl>
            <FormControl width="70%">
              <FormLabel htmlFor="name">Message</FormLabel>
              <Textarea
                height="10rem"
                id="message"
                name="message"
                borderColor="#33333326"
                borderRadius="unset"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="my message"
                variant="outline"
              />
            </FormControl>
            <Box textAlign="center" width="70%">
              <Button
                padding="1rem 1.5rem"
                width="fit-content"
                bgColor="primaryOrange">
                Submit
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default ContactPage;
