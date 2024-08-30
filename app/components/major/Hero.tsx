import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import bg from "../../../public/hero1.webp";
import bg2 from "../../../public/hero2.png";
import bg3 from "../../../public/hero3.webp";
import bg4 from "../../../public/hero4.webp";
import bg5 from "../../../public/hero5.webp";
import bg6 from "../../../public/hero6.webp";

import "../../globals.css";
import theme from "@/app/theme";
import { BiChevronRight } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StaticImageData } from "next/image";
import Nav from "./Nav";
import ButtonMain from "../minor/ButtonMain";

// Array of carousel data
const carouselData = [
  {
    bg: bg,
    heading: "Committed Service to Humanity",
    text: "With a strong commitment to serving humanity, Pamtech Group has built a diverse portfolio in the oil and gas, media, and automotive industries.",
  },
  {
    bg: bg2,
    heading: "Oil & Gas",
    text: "With our unadulterated and petroleum products, you will experience zero downtime and low maintenance costs for your equipment and facilities.",
  },
  {
    bg: bg3,
    heading: "Autoland",
    text: "Pamtech Autoland is your one-stop solution for quality auto repairs and maintenance.",
  },
  {
    bg: bg4,
    heading: "Autoparts",
    text: "Get all the genuine OEM parts at the right price and without stress.",
  },
  {
    bg: bg5,
    heading: "Media",
    text: "From content marketing to talent management and media consulting, we help brands connect with their audience and grow their presence online.",
  },
  {
    bg: bg6,
    heading: "Luxury Ride",
    text: "Experience luxury and comfort with Pamtech Luxury Ride. We offer a fleet of premium vehicles for your personal or corporate needs, ensuring a stylish ride every time.",
  },
];
interface SlideContentProps {
  bg: StaticImageData; // Type for the imported images
  heading: string;
  text: string;
}

// Reusable component for the slide content
const SlideContent: React.FC<SlideContentProps> = ({ bg, heading, text }) => {
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
  const contentWidth = useBreakpointValue({
    base: "90%",
    md: "70%",
    lg: "50%",
  });
  const padding = useBreakpointValue({
    base: "1rem",
    md: "2rem 4rem",
    lg: "2rem 8rem",
  });

  return (
    <>
      <Box
        padding={padding}
        backgroundImage={`url(${bg.src})`}
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        color="#F7F7F7"
      >
        <Flex
          mt={{ base: "5rem", md: "3rem" }}
          height="100%"
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
            xl: "60%",
            myxl: "50%",
          }}
        >
          <Heading fontSize={headingFontSize} fontWeight={500}>
            {heading}
          </Heading>
          <Text
            textAlign={{
              base: "center",
              lg: "left",
            }}
            width={{ base: "100%", }}
            fontSize={textFontSize}
          >
            {text}
          </Text>
          <Box
            textAlign={{
              base: "center",
              lg: "left",
            }}
          >
            <ButtonMain text="Read More" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
const Hero = () => {
  return (
    <Box>
      <Nav />
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={4500}
      >
        {carouselData.map((slide, index) => (
          <SlideContent
            key={index}
            bg={slide.bg}
            heading={slide.heading}
            text={slide.text}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
