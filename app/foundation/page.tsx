"use client";
import theme from "../theme";
import { BiChevronRight } from "react-icons/bi";
import foundationBg from "../../public/foundationBg.webp";
import foundation1 from "../../public/foundation1.webp";
import foundation2 from "../../public/foundation2.webp";
import foundation3 from "../../public/foundation3.webp";
import bg3 from "../../public/bg3.png";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/major/Footer";
import Nav from "../components/major/Nav";
import Sustainability from "../components/minor/Sustainability";
import ButtonMain from "../components/minor/ButtonMain";

const Foundation = () => {
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

  return (
    <>
      <Box bgColor="#FFFFFF">
        <Box
          padding={contentPadding}
          backgroundImage={`url(${foundationBg.src})`}
          bgSize="cover"
          bgPosition="center"
          minHeight={{ base: "100vh", md: "80vh", myxl: "100vh" }}
          color="#F7F7F7"
        >
          <Nav />
          <Flex
            height={{ base: "100vh", md: "80vh", myxl: "100vh" }}
            flexDir="column"
            justifyContent="center"
            gap="2rem"
            width={{ base: "100%", md: "70%", lg: "70%" }}
            paddingY={{ base: "4rem", md: "0" }}
            pl={{
              base: "unset",
              myxl: "3.5rem",
            }}
            data-aos="zoom-in"
          >
            <Heading fontSize={headingFontSize} fontWeight={500}>
              Pamtech Foundation
            </Heading>
            <Text
              fontWeight={500}
              width={{ base: "100%", md: "80%" }}
              textAlign="left"
              fontSize={textFontSize}
            >
              The Pamtech Foundation is guided by a core vision: Giving hope and
              sharing love to humanity. 
            </Text>
            <ButtonMain linkHref="#foundation" text="Read More" />
          </Flex>
        </Box>
        <Box
           my={{
            base: "1rem",
            md: "1.5rem",
          }}
        >
          <Heading
               my={{
                base: "1rem",
                md: "1.5rem",
              }}
            textAlign="center"
            fontSize={headingFontSize}
            fontWeight={500}
            color="#2C2B2B"
          >
            Brand Showcase
          </Heading>
          <Flex
            gap=".5rem"
            placeItems="center"
            justifyContent="center"
            flexWrap="wrap"
            padding={contentPadding}
          >
            <Box>
              <Image
                src={foundation1}
                alt="foundation1"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                  marginTop: "1.3rem",
                }}
                data-aos="zoom-in"
              />
            </Box>
            <Box>
              <Image
                src={foundation2}
                alt="ride1"
                style={{ maxWidth: "100%", height: "auto" }}
                data-aos="zoom-in"
              />
            </Box>
            <Box>
              <Image
                src={foundation3}
                alt="ride1"
                style={{ maxWidth: "100%", height: "auto" }}
                data-aos="zoom-in"
              />
            </Box>
          </Flex>
        </Box>
        <VStack
          id="foundation"
          align="left"
          my={{
            base: "1rem",
            md: "1.5rem",
          }}
          padding={contentPadding}
          width={{ base: "100%", md: "80%" }}
          data-aos="zoom-in-right"
        >
          <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
            Foundation
          </Text>
          <Flex flexDirection="column" gap="1.5rem" textAlign="left">
            <Text color="textGrey" fontSize={textFontSize}>
              The Pamtech Foundation is guided by a core vision: Giving hope and
              sharing love to humanity. We strive to positively influence our
              community by improving the welfare of underprivileged widows,
              children, and youths by providing access to education, healthcare,
              and economic empowerment opportunities. 
            </Text>
            <Text color="textGrey" fontSize={textFontSize}>
              Established in 2016, the Foundation is the Corporate Social
              Responsibility (CSR) arm of the Pamtech Group, strategically
              focusing on providing educational scholarships and grants for
              youths, empowering small-scale business owners and so much more.
              With our engagements such as the DAD4Adolescents program, the
              Business Made in Imo Community, and the Widows Economic
              Empowerment, the foundation remains resolute to give hope and
              share love to humanity. 
            </Text>
          </Flex>
        </VStack>
        <Sustainability />
        <Footer />
      </Box>
    </>
  );
};

export default Foundation;
