import theme from "@/app/theme";
import { Button, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

interface ButtonMainProps {
  text: string;
}

const ButtonMain: React.FC<ButtonMainProps> = ({ text }) => {
  const textFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem" });

  return (
    <Button
      mt="4rem"
      width="fit-content"
      padding={theme.buttonPadding}
      bgColor="primaryOrange"
      _hover={{
        bgColor: "#961615",
      }}
      _active={{
        bgColor: "#bf1e1d",
      }}
      borderRadius={theme.buttonRadius.radius}
      rightIcon={<BiChevronRight fontSize="1.5rem" className="arrow-icon" />} fontSize={textFontSize}>
      {text}
    </Button>
  );
};

export default ButtonMain;
