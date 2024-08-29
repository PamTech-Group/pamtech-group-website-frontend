"use client";
import { Box, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";

const Growth = () => {
  return (
    <Box bg="#FFFFFF">
      <Box
        bgPosition="center"
        bgColor="#0F1010"
        height="100vh"
        width="100vw"
        color="#F7F7F7">
        <Box height="inherit" width="inherit" padding="2rem 8rem">
          <Nav />
          <Flex height="100%" width="100%" alignItems="center">
            <Flex
              flexDir="column"
              justifyContent="center"
              gap="2rem"
              width="50%">
              <Heading fontSize="3rem" fontWeight={500}>
                Identifying Opportunities, <br />
                creating value
              </Heading>
              <Text width="80%" fontSize="1.2rem">
                {`We are in the business of making our products viable for our
                stakeholders at various levels. By being part of the Pamtech
                Group, you're putting yourself on the path of profit.`}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <SimpleGrid
        columns={2}
        spacingX="4rem"
        spacingY="2rem"
        color="textGrey"
        padding="2rem 8rem"
        my="4rem">
        <Flex flexDirection="column">
          <Text fontWeight={500} fontSize="1.5rem">
            2018
          </Text>
          <Text fontWeight={300} fontSize="1rem">
            Lorem ipsum dolor sit amet consectetur. Malesuada pellentesque arcu
            enim tortor vulputate ac enim sed aliquam. Quis in nisl purus
            feugiat tellus eu porttitor mollis. Euismod massa amet et posuere
            amet vel. Aliquet dictum vulputate suspendisse congue
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight={500} fontSize="1.5rem">
            2019
          </Text>
          <Text fontWeight={300} fontSize="1rem">
            Lorem ipsum dolor sit amet consectetur. Malesuada pellentesque arcu
            enim tortor vulputate ac enim sed aliquam. Quis in nisl purus
            feugiat tellus eu porttitor mollis. Euismod massa amet et posuere
            amet vel. Aliquet dictum vulputate suspendisse congue
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight={500} fontSize="1.5rem">
            2020
          </Text>
          <Text fontWeight={300} fontSize="1rem">
            Lorem ipsum dolor sit amet consectetur. Malesuada pellentesque arcu
            enim tortor vulputate ac enim sed aliquam. Quis in nisl purus
            feugiat tellus eu porttitor mollis. Euismod massa amet et posuere
            amet vel. Aliquet dictum vulputate suspendisse congue
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight={500} fontSize="1.5rem">
            2021
          </Text>
          <Text fontWeight={300} fontSize="1rem">
            Lorem ipsum dolor sit amet consectetur. Malesuada pellentesque arcu
            enim tortor vulputate ac enim sed aliquam. Quis in nisl purus
            feugiat tellus eu porttitor mollis. Euismod massa amet et posuere
            amet vel. Aliquet dictum vulputate suspendisse congue
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight={500} fontSize="1.5rem">
            2022
          </Text>
          <Text fontWeight={300} fontSize="1rem">
            Lorem ipsum dolor sit amet consectetur. Malesuada pellentesque arcu
            enim tortor vulputate ac enim sed aliquam. Quis in nisl purus
            feugiat tellus eu porttitor mollis. Euismod massa amet et posuere
            amet vel. Aliquet dictum vulputate suspendisse congue
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight={500} fontSize="1.5rem">
            2023
          </Text>
          <Text fontWeight={300} fontSize="1rem">
            Lorem ipsum dolor sit amet consectetur. Malesuada pellentesque arcu
            enim tortor vulputate ac enim sed aliquam. Quis in nisl purus
            feugiat tellus eu porttitor mollis. Euismod massa amet et posuere
            amet vel. Aliquet dictum vulputate suspendisse congue
          </Text>
        </Flex>
      </SimpleGrid>
      <Box
        mb="4rem"
        height="12vh"
        bgColor="#F7F7F7"
        outline=".2px solid rgba(51, 51, 51, 0.2)"
      />
      <SimpleGrid
        columns={2}
        padding="2rem 8rem"
        spacingX="4rem"
        color="textGrey"
        fontSize="1rem">
        <Heading fontWeight={500} fontSize="2.5rem">
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
      <VStack align="left" my="4rem" padding="2rem 8rem" width="50%">
        <Text fontWeight={500} fontSize="2.5rem" color="primaryOrange">
          News Room
        </Text>
        <Text color="#171717" fontSize="1.5rem" fontWeight={500}>
          Stay Informed with Pamtech Group
        </Text>
        <Text color="textGrey" fontSize="1rem">
          As a diversified and fully integrated conglomerate, our interest in
          multiple industries indicates our determination to cater to our vision
          of empowering success through committed service to humanity. 
        </Text>
      </VStack>
      <Flex
        width="20rem"
        height="24rem" // Set a fixed height for the card
        mx="3rem"
        borderRadius="lg"
        flexDirection="column"
        justifyContent="space-between" // Distribute space evenly
        bgColor="rgba(241, 241, 248, .4)"
        outline="1px solid rgba(141, 139, 139, .4)">
        <Flex
          flexDirection="column"
          padding="1rem 1.5rem"
          gap="1rem"
          flexGrow={1} // Allow the text content to grow and shrink as needed
          overflow="hidden" // Hide overflow content
        >
          <Box mt="auto">
            {" "}
            {/* Ensures the image is at the bottom */}
            {/* <Image src={} alt={} /> */}
          </Box>
          <Text color="#171717" fontWeight={500} fontSize="1.5rem">
            {}
          </Text>
          <Text color="textGrey" noOfLines={5}>
            {" "}
            {/* Limit description to 3 lines */}
            {}
          </Text>
        </Flex>
      </Flex>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Growth;
