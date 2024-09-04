"use client";
import { Image } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

import Footer from "../components/major/Footer";
import Sustainability from "../components/minor/Sustainability";
import NavWhite from "../components/major/NavWhite";

const ContactPage = () => {
  const toast = useToast();
  const contentPadding = useBreakpointValue({
    base: "1rem",
    sm: "2rem",
    md: "4rem",
    lg: "6rem",
    xl: "8rem",
  });
  const headingFontSize = useBreakpointValue({
    base: "1.8rem",
    md: "2rem",
    lg: "2.5rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.1rem",
    lg: "1.2rem",
  });
  const formWidth = useBreakpointValue({ base: "100%", md: "85%", lg: "80%" });

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data to be sent
    const data = {
      firstName: formData.name.split(" ")[0],
      lastName: formData.name.split(" ")[1] || "", // Assuming last name is the second part of the name
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      subject: "General Inquiry",
      message: formData.message,
    };

    try {
      const response = await axios.post(
        "https://pamtech-group-website-backend.onrender.com/api/users/contact",
        data
      );
      if (response.status == 200) {
        toast({
          title: "Sent Successfully.",
          description: "Thank  you for reaching out to us",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error.",
        description: "An error ocurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Box bgColor="#FFFFFF">
      <NavWhite />
      <Box padding={contentPadding} color="textGrey">
        <VStack
          align="left"
          mb={{
            base: "2rem",
            myxl: "4rem",
          }}
          width={{ base: "100%", md: "70%" }}
        >
          <Text fontWeight={500} fontSize="1.5rem" color="primaryOrange">
            Contact Us
          </Text>
          <Text fontSize={headingFontSize} fontWeight={500}>
            How can we help you?
          </Text>
          <Text fontSize={textFontSize}>
            We understand that every business is unique, which is why we take
            the time to get to know you and your specific needs
          </Text>
        </VStack>
        <Flex
          bgColor="#F7F7F7"
          color="#333333"
          gap="2rem"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-between"
        >
          <Flex
            flexDirection="column"
            bgColor="#F1F1F1"
            padding="4rem 2rem"
            boxShadow="sm"
            width={{ base: "100%", lg: "40%" }}
            fontSize={textFontSize}
          >
            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Contact</Text>
              <Text>+2348115004000</Text>
              <Text>info@pamtech.com</Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Head Office</Text>
              <Text fontWeight={300}>
                Plot CR17 Housing Area T, Port Harcourt Rd, behind Apams, New
                Owerri, Owerri, Imo State, Nigeria.
              </Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Pamtech Oil & Gas</Text>
              <Text>
                Plot 2 Winners Ring Road, Opp. NDDC, Off PH Road, Owerri, Imo
                State.
              </Text>
            </Flex>
            <Box bgColor="#33333340" my="1.5rem" height="1px" opacity=".6" />

            <Flex flexDirection="column" gap=".4rem">
              <Text fontWeight={500}>Pamtech Autoland</Text>
              <Text fontWeight={300}>
                Plot CR/8 Port Harcourt Road, Close to Hospital Junction,
                Owerri, Owerri, Imo State, Nigeria.
              </Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            width={{ base: "100%", lg: "60%" }}
            padding="4rem 2rem"
            gap="2rem"
            borderRadius="md"
          >
            <FormControl width={formWidth}>
              <FormLabel
                fontWeight={500}
                fontSize={textFontSize}
                htmlFor="name"
                color="#333333"
              >
                Name
              </FormLabel>
              <Input
                id="name"
                name="name"
                padding="1.5rem 1rem"
                borderRadius="md"
                borderColor="#33333326"
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
            <FormControl width={formWidth}>
              <FormLabel
                fontWeight={500}
                fontSize={textFontSize}
                htmlFor="email"
              >
                Email
              </FormLabel>
              <Input
                id="email"
                name="email"
                borderColor="#33333326"
                padding="1.5rem 1rem"
                borderRadius="md"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                variant="outline"
              />
            </FormControl>
            <FormControl width={formWidth}>
              <FormLabel
                fontWeight={500}
                fontSize={textFontSize}
                htmlFor="phoneNumber"
              >
                Phone Number
              </FormLabel>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                borderColor="#33333326"
                padding="1.5rem 1rem"
                borderRadius="md"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                variant="outline"
              />
            </FormControl>
            <FormControl width={formWidth}>
              <FormLabel
                fontWeight={500}
                fontSize={textFontSize}
                htmlFor="message"
              >
                Message
              </FormLabel>
              <Textarea
                id="message"
                name="message"
                borderColor="#33333326"
                padding="1.5rem 1rem"
                borderRadius="md"
                bgColor="#F1F1F1"
                focusBorderColor="#33333326"
                _placeholder={{
                  color: "#33333340",
                  fontWeight: 300,
                }}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                variant="outline"
                rows={5}
              />
            </FormControl>
            <Button
              fontSize="1rem"
              type="submit"
              bgColor="primaryOrange"
              color="white"
              width="fit-content"
              _hover={{
                bgColor: "#961615",
              }}
              _active={{
                bgColor: "#bf1e1d",
              }}
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default ContactPage;
