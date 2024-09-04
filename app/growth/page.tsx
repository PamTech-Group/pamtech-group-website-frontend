"use client";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";
import theme from "../theme";
import Image from "next/image";

import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const yearContent = {
  "2016":
    "The Pamtech Oil and Gas started with intense apprenticeship and training. With just a team of three and two drivers, Pamtech Group began the journey of being the foremost downstream oil marketing and distribution company in Imo State, Nigeria. ",
  "2021":
    "As part of our growth strategy, Pamtech Autoland, a state-of-the-art facility for car maintenance and repairs was established in Owerri, Imo State to address the challenges of car owners in accessing reliable maintenance and repair services.",
  "2022":
    "The Pamtech Autoparts Plaza, a reliable source for genuine motor spare parts was built to solve the problems of trust in the automobile spare parts industry by providing car owners with OEM standard parts.",
  "2023": `With the desire to live up to our mantra - “committed service to humanity”, we ventured into the social media and luxury ride space, providing educative and entertaining content as well as luxury ride services to our community through the establishment of the Pamtech Media and Pamtech Luxury Ride.`,
};
const BlogCard = ({ image, date, title }: any) => (
  <Link href="/blog" passHref data-aos="zoom-in-down">
    <Card
      bgColor="#fde8e7"
      as="a"
      width={{ base: "90%", sm: "80%", md: "24rem" }}
      height="100%"
      mx="auto"
      mb="4rem"
      borderRadius="xl"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
    >
      <CardBody height='100%'>
        <Flex justify="center" height='60%'>
          <Image src={image} alt="Blog post image" width={300} height={200} objectFit="cover" />
        </Flex>
        <Flex flexDirection='column' justifyContent='center' height='35%'>

        <Text color="#171717" fontWeight={500} fontSize="1.2rem" mt={4}>
          {date}
        </Text>
        <Text color="textGrey" fontSize="1rem" mt={2} noOfLines={3}>
          {title}
        </Text>
        </Flex>
      </CardBody>
      <CardFooter height='5%'>
        <Flex alignItems="center" color="primaryOrange">
          <Text fontWeight={500} mr={2}>Read More</Text>
          <ArrowForwardIcon />
        </Flex>
      </CardFooter>
    </Card>
  </Link>
);
const Growth = () => {
  const contentPadding = useBreakpointValue({
    base: "2rem 1rem",
    sm: "2rem 2rem",
    md: "2rem 4rem",
    lg: "2rem 6rem",
    xl: "2rem 8rem",
  });
  const headingFontSize = useBreakpointValue({
    base: "2rem",
    md: "2.5rem",
    lg: "3rem",
  });
  const textFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.1rem",
    lg: "1.2rem",
  });
  const yearFontSize = useBreakpointValue({
    base: "1.2rem",
    md: "1.3rem",
    lg: "1.5rem",
  });

  return (
    <Box bg="#FFFFFF">
      <Box
        bgPosition="center"
        bgColor="#0F1010"
        height={{
          base: "65vh",

          myxl: "70vh",
        }}
        width="100%"
        color="#F7F7F7"
      >
        <Box height="100%" width="100%" padding={contentPadding}>
          <Nav />
          <Flex
            height={{ base: "100%" }}
            width="100%"
            alignItems="center"
            paddingY={{ base: "4rem", md: "0" }}
            pl={{
              base: "unset",
              myxl: "3.5rem",
            }}
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              textAlign={{
                base: "center",
                lg: "left",
              }}
              gap="2rem"
              width={{
                base: "100%",
                md: "90%",
                xl: "75%",
                myxl: "60%",
              }}
            >
              <Heading fontSize={headingFontSize} fontWeight={500} data-aos="zoom-in-right">
                Identifying Opportunities, <br />
                creating value
              </Heading>
              <Text fontSize={textFontSize}>
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
        my={{
          base: "2rem",
          myxl: "4rem",
        }}
      >
        {Object.entries(yearContent).map(([year, text]) => (
          <Flex
            key={year}
            flexDirection="column"
            marginBottom={{ base: "2rem", md: "0" }}
            data-aos="zoom-in-up"
          >
            <Text fontWeight={500} fontSize={yearFontSize} marginBottom="1rem">
              {year}
            </Text>
            <Text fontWeight={300} fontSize={textFontSize}>
              {text}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
      <Box
        mb={{
          base: "2rem",
          myxl: "4rem",
        }}
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
        fontSize={textFontSize}
      >
        <Heading
          fontWeight={500}
          fontSize={headingFontSize}
          marginBottom={{ base: "2rem", md: "0" }}
          data-aos="zoom-in-right"
        >
          Why you should partner with pamtech group
        </Heading>
        <Flex flexDirection="column" gap="1.5rem" data-aos="zoom-in-left">
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
      <VStack
        align="left"
        my={{
          base: "2rem",
          myxl: "4rem",
        }}
        padding={contentPadding}
        width={{ base: "100%", lg: "70%" }}
        data-aos="zoom-in-right" >
        <Text fontWeight={500} fontSize={headingFontSize} color="primaryOrange" >
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
      <Flex
        my={{
          base: "2rem",
          myxl: "4rem",
        }}
        gap="2rem"
        padding={contentPadding}
        wrap="wrap"
        justifyContent="center"
      >
      
      <BlogCard image={'https://res.cloudinary.com/dye76dtzn/image/upload/v1724322976/blog_images/lpkv2mewrchsdbtpfhes.jpg'} date="August 31st, 2023" title="Pamtech CEO Chidomere Accepted Into Forbes Business Council" />
        <BlogCard image={'https://res.cloudinary.com/dye76dtzn/image/upload/v1725462401/blog_images/l0vyrlnqcdlaakqxuu5a.png'} date="May 31st, 2024" title="Pamtech Autoland is Coming to Port Harcourt Soon: A New Destination for Auto Enthusiasts" />
        <BlogCard image={'https://res.cloudinary.com/dye76dtzn/image/upload/v1725461904/blog_images/klbcnxi5fbswneuntcck.png'} date="December 20th, 2022" title="Pamtech Group Unveils Game-Changing Auto-Parts E-Commerce Platform" />
        <BlogCard image={'https://res.cloudinary.com/dye76dtzn/image/upload/v1725461614/blog_images/npctb8qm5bez19f0b5yi.png'} date="August 31st, 2023" title="Petrol Padi App Featured on Tech Cabal: A Game-Changer in Fuel Retail" />
        <BlogCard image={'https://res.cloudinary.com/dye76dtzn/image/upload/v1724968903/blog_images/tfhiolwj35k4tlo0gn2x.png'} date="May 31st, 2024" title="Pamtech Oil & Gas Unveils Petrol Padi: The Future of Fuel Retail is Here" />
        <BlogCard image={'https://res.cloudinary.com/dye76dtzn/image/upload/v1724325955/blog_images/rzyb1cddnuurtdphzsnr.jpg'} date="December 20th, 2022" title="Pamtech CEO Chidomere Ndubuisi Awarded, & Inspires At Owerri Business Week 2023" />
        <BlogCard image={'https://res.cloudinary.com/dye76dtzn/image/upload/v1724324942/blog_images/twadcvmickahuknz0jtr.jpg'} date="August 31st, 2023" title="Pamtech CEO Chidomere Ndubuisi Bags International Business Leader Award" />
       

      </Flex>

      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Growth;
