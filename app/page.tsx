"use client";
import { Box } from "@chakra-ui/react";
import Hero from "./components/major/Hero";
import Services from "./components/major/Services";
import About from "./components/major/About";
import Footer from "./components/major/Footer";

export default function Home() {
  return (
    <Box bgColor="#F1F1FF">
      <Hero />
      <About />
      <Services />
      <Footer />
    </Box>
  );
}
