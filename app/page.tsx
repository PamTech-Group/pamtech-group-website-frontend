"use client";
import { Box } from "@chakra-ui/react";
import Header from "./components/major/Header";
import Hero from "./components/major/Hero";
import Services from "./components/major/Services";
import About from "./components/major/About";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <Services />
    </Box>
  );
}
