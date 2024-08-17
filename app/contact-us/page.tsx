"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

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
    <Flex
      bgColor="#F7F7F7"
      color="#333333"
      gap="2rem"
      height="100%"
      width="100%">
      <Flex
        flexDirection="column"
        bgColor="#F1F1F1"
        minHeight="100%"
        padding="4rem 2rem"
        border="1px solid #33333326"
        width="40%">
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
            Plot CR/8 Port Harcourt Road, Near Hospital Junction, Owerri, Imo
            State
          </Text>
        </Flex>
        <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

        <Flex flexDirection="column" gap=".4rem">
          <Text>PH Office</Text>
          <Text>
            Plot CR/8 Port Harcourt Road, Near Hospital Junction, Owerri, Imo
            State
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
              fontWeight: 200,
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
              fontWeight: 200,
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
              fontWeight: 200,
            }}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="my message"
            variant="outline"
          />
        </FormControl>
        <Box textAlign="center" width="70%">
          <Button width="fit-content" bgColor="primaryOrange">
            Submit
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactPage;
