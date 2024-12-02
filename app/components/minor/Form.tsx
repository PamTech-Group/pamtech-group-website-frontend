import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  useToast,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    description: "",
    why: "",
    about: "",
  });

  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Handle input and file changes
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate required fields
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    // Create FormData object
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("fullName", formData.fullName);
    formDataToSubmit.append("phoneNumber", formData.phoneNumber);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("about", formData.about);
    formDataToSubmit.append("why", formData.why);
    // formDataToSubmit.append("resume", formData.resume);

    try {
      const response = await axios.post(
        "https://formspree.io/f/mgvepvok",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type
          },
        }
      );

      // Check if the response is successful
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Your application has been submitted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          description: "",
          why: "",
          about: "",
        });
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "There was an error submitting your application.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box bg="blue.900" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="left">
          <Heading as="h2" size="xl" color="white">
            Join Us Now
          </Heading>
          <Text fontSize="md" color="white" fontWeight={300}>
            You are just a single step away from joining the best team to work
            with. Look for a perfect opportunity with us and become a part of
            the Auto-Club family.
          </Text>
          <form onSubmit={handleSubmit}>
            <Flex
              my={4}
              gap="2rem"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Input
                name="fullName"
                placeholder="Enter Your Full Name"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.500" }}
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <Input
                name="email"
                placeholder="Enter Your Email"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.500" }}
                value={formData.email}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex
              my={4}
              gap="2rem"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Input
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.500" }}
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <Input
                name="description"
                placeholder="Description"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.500" }}
                value={formData.description}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex
              my={4}
              gap="2rem"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Select
                name="about"
                placeholder="How did you hear about us?"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                value={formData.about}
                _placeholder={{ color: "whiteAlpha.200", opacity: "0.5" }}
                onChange={handleInputChange}
              >
                <option style={{ backgroundColor: "#0D2B57" }} value="Tiktok">
                  Tiktok
                </option>
                <option
                  style={{ backgroundColor: "#0D2B57" }}
                  value="word_of_mouth"
                >
                  Word of mouth
                </option>
                <option style={{ backgroundColor: "#0D2B57" }} value="facebook">
                  Facebook
                </option>
                <option style={{ backgroundColor: "#0D2B57" }} value="internet">
                  Internet
                </option>
              </Select>
              <Input
                name="why"
                placeholder="Why do you want to work with us?"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.500" }}
                value={formData.why}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex justifyContent="center">
              <Button
                mt="3rem"
                type="submit"
                width="full"
                bg="white"
                color="blue.900"
                _hover={{ bg: "whiteAlpha.900" }}
                isLoading={isLoading}
              >
                Submit
              </Button>
            </Flex>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default JobApplicationForm;
