"use client";
import {
  Box,

  Text,
  Link,
  Heading,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";
import NavWhite from "../components/major/NavWhite";
import phoneImage from "../../public/phone.png"
// This type represents the structure of a blog post
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: any;
  date: string;
};

// Dummy data (replace this with actual data from your backend)
const dummyBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Energy",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Pretium curabitur lorem molestie sed. Sed platea dui egestas consequat tincidunt.",
    imageUrl: phoneImage,
    date: "2023-05-01",
  },
  {
    id: "2",
    title: "Sustainable Practices in Oil and Gas",
    excerpt: "Eget dignissim morbi lacus bibendum quis pretium etiam elit. Sed pretium massa quisque arcu. Pretium odio ut sem odio.",
    imageUrl:  phoneImage,
    date: "2023-05-15",
  },
  {
    id: "3",
    title: "Sustainable Practices in Oil and Gas",
    excerpt: "Eget dignissim morbi lacus bibendum quis pretium etiam elit. Sed pretium massa quisque arcu. Pretium odio ut sem odio.",
    imageUrl:  phoneImage,
    date: "2023-05-15",
  },
  // Add more dummy blog posts as needed
];

const Blog = () => {
  const contentPadding = useBreakpointValue({ base: "1rem", md: "2rem", lg: "4rem" });
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const textFontSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box bg="#ffffff">
      <NavWhite />
      <Box color="textGrey" padding={contentPadding}>
        <Heading as="h1" fontSize={headingFontSize} mb="8" textAlign="center">
          Our Blog
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
          {dummyBlogPosts.map((post) => (
            <Box key={post.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image 
                src={post.imageUrl} 
                alt={post.title} 
                width={400} 
                height={250} 
                layout="responsive"
                objectFit="cover"
              />
              <Box p="6">
                <Text fontSize="sm" color="gray.500" mb="2">
                  {new Date(post.date).toLocaleDateString()}
                </Text>
                <Heading as="h2" size="lg" mb="2">
                  {post.title}
                </Heading>
                <Text fontSize={textFontSize} mb="4">
                  {post.excerpt}
                </Text>
                <Link color="blue.500" fontWeight="bold" href={`/blog/${post.id}`}>
                  Read more...
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Blog;