"use client";
import { Box } from "@chakra-ui/react";
import Hero from "./components/major/Hero";
import Services from "./components/major/Services";
import About from "./components/major/About";

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <Services />
    </Box>
  );
}
