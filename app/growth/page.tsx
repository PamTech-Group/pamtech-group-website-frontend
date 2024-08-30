"use client";
import { Box, Card, CardBody, CardFooter, Flex, Heading, SimpleGrid, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";
import theme from "../theme";
import Image from "next/image";
import phoneImage from "../../public/phone.png"
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Growth = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 2rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });
  const headingFontSize = useBreakpointValue({ base: "2rem", md: "2.5rem", lg: "3rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });
  const yearFontSize = useBreakpointValue({ base: "1.2rem", md: "1.3rem", lg: "1.5rem" });

  return (
    <Box bg="#FFFFFF">
      <Box
        bgPosition="center"
        bgColor="#0F1010"
        minHeight={{ base: "auto", md: "100vh" }}
        width="100%"
        color="#F7F7F7">
        <Box height="100%" width="100%" padding={contentPadding}>
          <Nav />
          <Flex height={{ base: "auto", md: "calc(100vh - 80px)" }} width="100%" alignItems="center" paddingY={{ base: "4rem", md: "0" }}>
            <Flex
              flexDir="column"
              justifyContent="center"
              gap="2rem"
              width={{ base: "100%", md: "70%", lg: "50%" }}>
              <Heading fontSize={headingFontSize} fontWeight={500}>
                Identifying Opportunities, <br />
                creating value
              </Heading>
              <Text width={{ base: "100%", md: "80%" }} fontSize={textFontSize}>
                {`We are in the business of making our products viable for our
                stakeholders at various levels. By being part of the Pamtech
                Group, you're putting yourself on the path of profit.`}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="4rem"
        spacingY="2rem"
        color="textGrey"
        padding={contentPadding}
        my="4rem">
       
        {["2016", "2017", "2018", "2019"].map((year) => (
          <Flex key={year} flexDirection="column" marginBottom={{ base: "2rem", md: "0" }}>
            <Text fontWeight={500} fontSize={yearFontSize} marginBottom="1rem">
              {year}
            </Text>
            <Text fontWeight={300} fontSize={textFontSize}>
              Lorem ipsum dolor sit amet consectetur. Malesuada pellentesque arcu
              enim tortor vulputate ac enim sed aliquam. Quis in nisl purus
              feugiat tellus eu porttitor mollis. Euismod massa amet et posuere
              amet vel. Aliquet dictum vulputate suspendisse congue
            </Text>
          </Flex>
        ))}
       
      </SimpleGrid>
      <Box
        mb="4rem"
        height="12vh"
        bgColor="#F7F7F7"
        outline=".2px solid rgba(51, 51, 51, 0.2)"
      />
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        padding={contentPadding}
        spacingX="4rem"
        spacingY="2rem"
        color="textGrey"
        fontSize={textFontSize}>
        <Heading fontWeight={500} fontSize={headingFontSize} marginBottom={{ base: "2rem", md: "0" }}>
          Why you should partner with pamtech group
        </Heading>
        <Flex flexDirection="column" gap="1.5rem">
          <Text>
            Partnering with Pamtech Group means aligning with a leader in
            technological innovation and strategic solutions. Our expertise
            spans diverse sectors including energy, automobile, media, and
            lifestyle, reflecting our ability to adapt and excel across multiple
            industries. We leverage cutting-edge technology and a profound
            understanding of market dynamics to drive success, making us an
            ideal partner for businesses seeking growth and transformation.
          </Text>
          <Text>
            At Pamtech Group, we pride ourselves on our commitment to excellence
            and customer satisfaction. Our approach combines rigorous strategic
            planning with a customer-centric mindset, ensuring that every
            partnership is built on trust and mutual benefit. By collaborating
            with us, you gain access to a wealth of resources and a dedicated
            team committed to delivering exceptional results and exceeding
            expectations.
          </Text>
          <Text>
            Furthermore, our comprehensive service offerings and innovative
            solutions are designed to meet the unique needs of our partners. We
            run a diversified business with high growth potential in share
            registration and allocation. We have consistently paid interest to
            our investors and a reliable ally in achieving your business cum
            financial goals while unlocking new opportunities for success.
          </Text>
        </Flex>
      </SimpleGrid>
      <VStack align="left" my="4rem" padding={contentPadding} width={{ base: "100%",  lg: "70%", xl:'50%' }}>
        <Text fontWeight={500} fontSize={headingFontSize} color="primaryOrange">
          News Room
        </Text>
        <Text color="#171717" fontSize={yearFontSize} fontWeight={500}>
          Stay Informed with Pamtech Group
        </Text>
        <Text color="textGrey" fontSize={textFontSize}>
          As a diversified and fully integrated conglomerate, our interest in
          multiple industries indicates our determination to cater to our vision
          of empowering success through committed service to humanity. 
        </Text>
      </VStack>
      <Flex my="4rem" gap='2rem' padding={contentPadding} wrap='wrap'>
      <Link href="/blog" passHref>
        <Card
        bgColor='#fde8e7'
          as="a"
          width={{ base: "90%", sm: "80%", md: "24rem" }}
          height="auto"
          mx="auto"
          mb="4rem"
          borderRadius='xl'
          boxShadow="md"
          transition="all 0.3s"
          _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
        >
          <CardBody >
            <Image src={phoneImage} alt='Blog post image' width={300} height={200} objectFit="cover" />
            <Text color="#171717" fontWeight={500} fontSize={yearFontSize} mt={4}>
              August 31st, 2024
            </Text>
            <Text color="textGrey" fontSize={textFontSize} mt={2} noOfLines={3}>
              Pamtech Oil & Gas is set to revolutionize the fuel retail industry with the launch of Petrol Padi, a cutting-edge fuel e-commerce app.
            </Text>
          </CardBody>
          <CardFooter>
            <Flex alignItems="center" color="primaryOrange">
              <Text fontWeight={500} mr={2}>Read More</Text>
              <ArrowForwardIcon />
            </Flex>
          </CardFooter>
        </Card>
      </Link>
      <Link href="/blog" passHref>
        <Card
        bgColor='#fde8e7'
          as="a"
          width={{ base: "90%", sm: "80%", md: "24rem" }}
          height="auto"
          mx="auto"
          mb="4rem"
          borderRadius='xl'
          boxShadow="md"
          transition="all 0.3s"
          _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
        >
          <CardBody >
            <Image src={phoneImage} alt='Blog post image' width={300} height={200} objectFit="cover" />
            <Text color="#171717" fontWeight={500} fontSize={yearFontSize} mt={4}>
              August 31st, 2024
            </Text>
            <Text color="textGrey" fontSize={textFontSize} mt={2} noOfLines={3}>
              Pamtech Oil & Gas is set to revolutionize the fuel retail industry with the launch of Petrol Padi, a cutting-edge fuel e-commerce app.
            </Text>
          </CardBody>
          <CardFooter>
            <Flex alignItems="center" color="primaryOrange">
              <Text fontWeight={500} mr={2}>Read More</Text>
              <ArrowForwardIcon />
            </Flex>
          </CardFooter>
        </Card>
      </Link> 
      <Link href="/blog" passHref>
        <Card
        bgColor='#fde8e7'
          as="a"
          width={{ base: "90%", sm: "80%", md: "24rem" }}
          height="auto"
          mx="auto"
          mb="4rem"
          borderRadius='xl'
          boxShadow="md"
          transition="all 0.3s"
          _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
        >
          <CardBody >
            <Image src={phoneImage} alt='Blog post image' width={300} height={200} objectFit="cover" />
            <Text color="#171717" fontWeight={500} fontSize={yearFontSize} mt={4}>
              August 31st, 2024
            </Text>
            <Text color="textGrey" fontSize={textFontSize} mt={2} noOfLines={3}>
              Pamtech Oil & Gas is set to revolutionize the fuel retail industry with the launch of Petrol Padi, a cutting-edge fuel e-commerce app.
            </Text>
          </CardBody>
          <CardFooter>
            <Flex alignItems="center" color="primaryOrange">
              <Text fontWeight={500} mr={2}>Read More</Text>
              <ArrowForwardIcon />
            </Flex>
          </CardFooter>
        </Card>
      </Link>
      </Flex>
     
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Growth;