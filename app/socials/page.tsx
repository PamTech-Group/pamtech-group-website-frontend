"use client";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Nav from "../components/major/Nav";
import Image from "next/image";
import socialsHero from "../../public/socialsBg.webp";
import gallery1 from "../../public/gallery1.webp";
import gallery2 from "../../public/gallery2.webp";
import gallery3 from "../../public/gallery3.webp";
import gallery5 from "../../public/gallery5.webp";
import gallery6 from "../../public/gallery6.webp";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";
import {
  FaFacebookSquare,

  FaLinkedin,
  FaTiktok,
 
  FaYoutube,
} from "react-icons/fa";
import {
  FaInstagram,
  
  FaWhatsapp,

  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const images = [gallery1, gallery2, gallery3, gallery5, gallery6];
const Socials = () => {
  const contentPadding = useBreakpointValue({
    base: "1rem",
    sm: "2rem",
    md: "4rem",
    lg: "6rem",
    xl: "8rem",
  });
  const headingFontSize = useBreakpointValue({ base: "2rem", md: "2.5rem", lg: "3rem" });
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });
  const socialIconSize = useBreakpointValue({ base: "1.2rem", md: "1.5rem" });
  const socialTextSize = useBreakpointValue({ base: "0.9rem", md: "1rem", lg: "1.2rem" });
  return (
    <Box bgColor="#FFFFFF" overflow="hidden">
    <Box
    bgPosition="center"
    bgColor="#0F1010"
    minHeight={{ base: "auto", md: "100vh" }}
    width="100%"
    color="#F7F7F7">
    <Box height="100%" width="100%" padding={`2rem ${contentPadding}`}>
      <Nav />
      <Flex
      mt={{
        base:'3.5rem',
        md: '0rem'
      }}
        height={{ base: "auto", md: "calc(100vh - 80px)" }}
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "2rem", md: "0" }}>
        <Flex
          flexDir="column"
          justifyContent="center"
          gap="2rem"
          width={{ base: "100%", lg: "50%" }}>
          <Heading fontSize={headingFontSize} fontWeight={500}>
            Innovating Tomorrow,
            <br /> Today
          </Heading>
          <Text width={{ base: "100%", md: "80%" }} fontSize={textFontSize}>
          {`Experience never-boring content, excellent services, and a
            workplace culture that's as inspiring as it is
            supportive—welcome to Pamtech Group.`}  
          </Text>
        </Flex>
        <Flex>
          <Image
            src={socialsHero}
            alt="people of pamtech"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Flex>
      </Flex>
    </Box>
  </Box>
  <Box padding={`2rem ${contentPadding}`}>
  {/* Gallery Heading */}
  <Heading size="lg" marginBottom="2rem">
    Gallery
  </Heading>

  {/* Gallery Grid */}
  <Grid
    h="auto"
    templateRows={{ base: "repeat(5, 1fr)", md: "repeat(2, 1fr)" }}
    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
    gap={4}>
    {/* Large image that spans 2 rows and 2 columns on larger screens */}
    <GridItem rowSpan={{ base: 1, md: 2 }} colSpan={{ base: 1, md: 2 }}>
      <Image
        src={gallery1}
        alt="Gallery Image 1"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </GridItem>

    {/* Small images */}
    {[gallery2, gallery3, gallery5, gallery6].map((img, index) => (
      <GridItem key={index} colSpan={1}>
        <Image
          src={img}
          alt={`Gallery Image ${index + 2}`}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </GridItem>
    ))}
  </Grid>
</Box>
<VStack align="left" my="4rem" padding={`2rem ${contentPadding}`} width={{ base: "100%", md: "70%", lg: "50%" }}>
  <Text color="#171717" fontSize={headingFontSize} fontWeight={500}>
    Explore our social media platforms
  </Text>
  <Text color="textGrey" fontSize={textFontSize}>
    Lorem ipsum dolor sit amet consectetur. Eget est velit senectus nunc
    nulla malesuada dignissim. Adipiscing a lectus urna rhoncus lectus in
    molestie quam. Gravida iaculi
  </Text>
  </VStack>
      <Flex
        my="4rem"
        flexDirection={{
          base: 'column',
          md: 'row'
        }}
        padding={`2rem ${contentPadding}`}
        justifyContent={{ base: "center", md: "space-between" }}
        flexWrap="wrap"
        gap="2rem">
         {[
          { icon: FaWhatsapp, text: "Whatsapp", color: "#25D366", link: "https://wa.me/+2347007268324" },
          { icon: FaFacebookSquare, text: "Facebook", color: "#1877F2", link: "https://www.facebook.com/pamtechgroup/" },
          { icon: FaYoutube, text: "Youtube", color: "#FF0000", link: "https://www.youtube.com/channel/UCjJ-fWJYIhpViYWr97-yWNw" },
          { icon: FaTiktok, text: "Tiktok", color: "#171717", link: "https://www.tiktok.com/@pamtechgroup" },
          { icon: FaInstagram, text: "Instagram", color: "#C13584", link: "https://www.instagram.com/pamtechgroup" },
          { icon: FaXTwitter, text: "X", color: "#171717", link: "https://x.com/thepamtechgroup" },
          { icon: FaLinkedin, text: "Linkedin", color: "#0762C8", link: "https://www.linkedin.com/company/pamtechgroup/" },
        ].map((social, index) => (
          <Link href={social.link} key={index} passHref target="_blank" rel="noopener noreferrer">
            <Flex
              alignItems="center"
              justifyContent="center"
              fontWeight={400}
              fontSize={socialTextSize}
              borderRadius="2xl"
              height="4rem"
              minWidth={{ base: "6rem" }}
              padding="1rem 2rem"
              bgColor={social.color}
              gap="1rem"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s">
              <social.icon fontSize={socialIconSize} />
              <Text>{social.text}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Socials;
