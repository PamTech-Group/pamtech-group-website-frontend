import theme from "@/app/theme";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import bg3 from "../../../public/bg3.png";
const Sustainability = () => {
  return (
    <Flex
      mt="4rem"
      padding="4rem 8rem"
      gap="2rem"
      bgImage={`url(${bg3.src})`}
      bgSize="cover"
      bgPosition="center"
      color="#F7F7F7">
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Flex width="50%" flexDirection="column" gap="2rem">
          <Text fontWeight={300}>Sustainability</Text>
          <Text fontWeight={500} fontSize="2.5rem">
            Building Prosperity and Self-Sufficiency
          </Text>
          <Text fontWeight={300} fontSize="1.2rem">
            Lorem ipsum dolor sit amet consectetur. Blandit arcu pellentesque
            adipiscing adipiscing feugiat nunc varius sed tincidunt.
          </Text>
          <Button
            width="fit-content"
            padding={theme.buttonPadding}
            bgColor="primaryOrange"
            _hover={{ bgColor: "#961615" }}
            _active={{ bgColor: "#bf1e1d" }}
            borderRadius={theme.buttonRadius.radius}
            rightIcon={
              <BiChevronRight fontSize="1.5rem" className="arrow-icon" />
            }>
            Read More
          </Button>
        </Flex>
        <Box height="150px" width="0.5px" mx="3rem" bgColor="#F7F7F7" />
        <Flex width="50%" flexDirection="column" gap="2rem">
          <Text>7 Sustainability Pillars</Text>
          <SimpleGrid columns={4} rowGap="5" columnGap={8}>
            {[...Array(7)].map((_, i) => (
              <Box
                key={i}
                width="50px"
                height="45px"
                outline="1px solid #F7F7F7"
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sustainability;
