// app/providers.tsx
"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { useEffect } from "react";
import Aos from "aos";

export function Providers({ children }: { children: React.ReactNode }) {

  
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
