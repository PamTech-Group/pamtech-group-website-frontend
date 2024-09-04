// app/providers.tsx
"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export function Providers({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
