import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import phone from "../../../public/phone.png";
import { Image } from "@chakra-ui/next-js";
const Footer = () => {
  return (
    <Box>
      <Box bgColor="#e0344c">
        <SimpleGrid columns={2}>
          <Box>
            <Flex direction="column" height="100%" justifyContent="center">
              <Text>Download Now</Text>
              <Text> Start Tracking Your Business Expenses TOday</Text>
              <Text>
                Download the app now and take control of your fuel purchasing
                decisions
              </Text>
              <Flex gap="1rem">
                <Button
                  bgColor="#0e0e0e"
                  leftIcon={<BiLogoPlayStore />}
                  variant="solid">
                  Google Play
                </Button>
                <Button
                  leftIcon={<FaAppStore />}
                  bgColor="#0e0e0e"
                  variant="solid">
                  App Store{" "}
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Flex>
            <Image height={600} src={phone} alt="phone image" />
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
