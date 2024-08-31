"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  Link,
  Heading,
  SimpleGrid,
  useBreakpointValue,
  Container,
  VStack,
  Collapse,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Sustainability from "../components/minor/Sustainability";
import Footer from "../components/major/Footer";
import NavWhite from "../components/major/NavWhite";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  paragraphs: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: "66c720427e820316498b316a",
    title:
      "Pamtech CEO Chidomere Ndubuisi Awarded, & Inspires At Owerri Business Week 2023",
    excerpt:
      "The Owerri Business Week, convened by the Bedrock Initiative culminated in a spectacular event as it awarded Engr. Chidomere Ndubuisi, the visionary CEO of Pamtech Group, for his outstanding contributions to the world of business and his compelling insights on fostering lasting success.",
    imageUrl:
      "https://res.cloudinary.com/dye76dtzn/image/upload/v1724325955/blog_images/rzyb1cddnuurtdphzsnr.jpg",
    date: "2024-08-22",
    paragraphs: [
      "The Owerri Business Week, convened by the Bedrock Initiative culminated in a spectacular event as it awarded Engr. Chidomere Ndubuisi, the visionary CEO of Pamtech Group, for his outstanding contributions to the world of business and his compelling insights on fostering lasting success.\n\nThe event, held at the prestigious Swiss Beland International Hotel, Owerri showcased Engr. Ndubuisi’s remarkable journey and his profound talk on “Building a Lasting Business with 3 Gifts”.\n\nThe award ceremony was a fitting recognition of Engr. Ndubuisi’s remarkable leadership, innovative mindset, and dedication to building a thriving enterprise. His stewardship of Pamtech Group has not only transformed it into a global powerhouse but also set new benchmarks for sustainable business practices.",
      "In his awe-inspiring keynote address, Engr. Chidomere Ndubuisi drew an ingenious analogy between the human body and the elements that compose a thriving business. He expounded on how the “3 Gifts” – Body, Soul, and Spirit – mirror the essential components of a flourishing enterprise.\nEngr. Chidomere Ndubuisi likened the departments of a company to the human body, highlighting their vital role in establishing a strong foundation. Just as the body’s various systems collaborate to sustain life, departments work in harmony to ensure the smooth operation of a business.",
      "His emphasis on efficient coordination of the structures and systems of the body resonated with the audience, underscoring the significance of interdepartmental synergy.\nEngr. Chidomere Ndubuisi masterfully compared the soul of a business to the concept of customer service. Just as the soul drives human emotions and interactions, exceptional customer service forms the emotional core of a successful enterprise. He urged businesses to prioritize customer satisfaction, emphasizing the value of building genuine connections and understanding clients’ needs.\nThe pinnacle of Engr. Chidomere Ndubuisi’s address was the notion of organizational culture as the spirit of a business. Drawing parallels with the human spirit, he showcased how a strong organizational culture shapes a company’s values, ethics, and long-term vision. Engr. Ndubuisi advocated for fostering an environment that nurtures innovation, collaboration, and team members’ growth, as these factors collectively drive the company’s spirit toward greatness.",
      "In his speech, Engr. Ndubuisi expressed his gratitude for the honour and shared his unwavering commitment to further advancing the business landscape. He credited his success to his dedicated team at Pamtech Group, underscoring that their shared commitment to the “3 Gifts” philosophy had been instrumental in the company’s remarkable journey.\nThe Owerri Business Week has once again provided a platform for visionaries like Engr. Chidomere Ndubuisi to inspire and lead the way. As attendees left the event with renewed determination, it was evident that his insights would continue to shape the future of business and innovation.\n\nAlso in attendance were esteemed speakers and industry leaders, the likes of the Labour Party Presidential Candidate and erstwhile Governor of Anambra State, Mr Peter Obi, Ugochukwu Omeogu, Obinna Ukachukwu, Sen. Athan Achonu and a host of other prominent figures in the State.\n\nThe Owerri Business Week 2023 may have come to a close, but the legacy of Engr. Ndubuisi’s teachings on building a lasting business with the “3 Gifts” will undoubtedly endure, guiding entrepreneurs and business leaders on the path to sustainable success",
    ],
  },
  {
    id: "66c71c4e7e820316498b3167",
    title:
      "Pamtech CEO Chidomere Ndubuisi Bags International Business Leader Award",
    excerpt:
      "In a momentous recognition of visionary leadership and exceptional business acumen, Engr. Chidomere Ndubuisi, the CEO of Pamtech Group, was bestowed with the prestigious International Business Leader Award by Jamie Pajoel International (JPI).",
    imageUrl:
      "https://res.cloudinary.com/dye76dtzn/image/upload/v1724324942/blog_images/twadcvmickahuknz0jtr.jpg",
    date: "2024-08-22",
    paragraphs: [
      "In a momentous recognition of visionary leadership and exceptional business acumen, Engr. Chidomere Ndubuisi, the CEO of Pamtech Group, was bestowed with the prestigious International Business Leader Award by Jamie Pajoel International (JPI).\nThe award ceremony took place during the 2023 Edition of the JPI Annual Leadership Conference held in the heart of Rwanda’s capital, Kigali.\nThe International Business Leader Award, presented by Jamie Pajoel, Founder and President of JPI, is a testament to Engr. Ndubuisi’s exemplary contributions to the global business landscape.",
      "With a track record of innovative strategies and ethical leadership, Ndubuisi’s stewardship of Pamtech Group has propelled the company to unprecedented heights.\nThe JPI Annual Leadership Conference, known for bringing together thought leaders, industry experts, and innovators from around the world, served as the ideal platform for Engr. Chidomere Ndubuisi to share his insights on the theme, “Thriving in a Competitive Business Environment.” \nA captivated audience listened intently as he elucidated the 6A Strategy in an ever-evolving marketplace. \nHis speech touched upon arena, assets, advantage, access, activities and anointing as key concepts he has employed in growing the Pamtech Group from a business of three team members to over 200 in about seven years.",
      "He illustrated the arena as the battleground where businesses compete for customers and revenue, the assets as the valuable team members of the business, the advantage is the value proposition of a business over her competitors, the access is the means of engagement between businesses and their customers, the activities as the operations and processes of the business and the anointing as the divine force behind the growth of every business.\n\nAdding an exceptional touch of leadership, Engr. Chidomere Ndubuisi displayed his commitment to the growth of his team members by sponsoring three of them to attend the JPI Annual Leadership Conference. ",
      "This gesture showcased his dedication to fostering a culture of learning and empowerment within Pamtech Group.\nThe Kigali event served as a melting pot of ideas, with attendees from various industries gaining invaluable insights from Engr. Chidomere Ndubuisi. \n\nHis practical approach to achieving excellence, combined with a strong emphasis on ethical practices and sustainable growth, resonated deeply with both seasoned professionals and emerging leaders present at the conference.\nThe JPI Annual Leadership Conference 2023 also provided an opportunity for attendees to engage in networking sessions, workshops, and panel discussions led by influential figures in the business world. \n\nThe collaborative atmosphere facilitated the exchange of knowledge, best practices, and emerging trends, contributing to the conference’s overarching goal of fostering leadership excellence.\n\nAs Engr. Chidomere Ndubuisi continues to steer Pamtech Group towards new horizons, his receipt of the International Business Leader Award and his impactful speech at the JPI Annual Leadership Conference stand as a testament to his commitment to innovation, leadership, and progress.\nWith renewed energy and insights gained from this global gathering, both Engr. Chidomere Ndubuisi and his team are poised to make significant contributions to the business landscape in the years ahead.\n\nIn an era defined by dynamic market shifts and technological breakthroughs, Engr. Chidomere Ndubuisi’s experience and wisdom serve as a guiding light for aspiring business leaders, reminding them that our assets shape our activities, our advantages influence our access and our anointing dictates our arena’s understanding.",
    ],
  },
  {
    id: "66c7149f7e820316498b3164",
    title: "Pamtech CEO Chidomere Accepted Into Forbes Business Council",
    excerpt:
      "CEO and MD of Pamtech Group, Engr. Chidomere Ndubuisi has been accepted into the Forbes Business Council, the foremost growth and networking organization for successful business owners and leaders worldwide.",
    imageUrl:
      "https://res.cloudinary.com/dye76dtzn/image/upload/v1724322976/blog_images/lpkv2mewrchsdbtpfhes.jpg",
    date: "2024-08-22",
    paragraphs: [
      "CEO and MD of Pamtech Group, Engr. Chidomere Ndubuisi has been accepted into the Forbes Business Council, the foremost growth and networking organization for successful business owners and leaders worldwide.\nNdubuisi was vetted and selected by a review committee based on the depth and diversity of his experience. Criteria for acceptance include a track record of successfully impacting business growth metrics, as well as personal and professional achievements and honours.",
      "“We are honoured to welcome Engr. Chidomere into the community,” said Scott Gerber, founder of Forbes Councils, the collective that includes Forbes Business Council.\n“Our mission with Forbes Councils is to bring together proven leaders from every industry, creating a curated, social capital-driven network that helps every member grow professionally and make an even greater impact on the business world,” he said.",
      "As an accepted member of the Council,  Chidomere has access to a variety of exclusive opportunities designed to help him reach peak professional influence. He will connect and collaborate with other respected local leaders in a private forum and at members-only events.\nHe will also be invited to work with a professional editorial team to share his expert insights in original business articles on Forbes.com, and to contribute to published Q&A panels alongside other experts.",
      "Finally, Chidomere will benefit from exclusive access to vetted business service partners, membership-branded marketing collateral, and the high-touch support of the Forbes Councils member concierge team.\n“Our business is founded on the principles of service to humanity and we have been able to creatively express that in the downstream energy and automotive industries. As a member of Forbes Business Council, we hope to magnify our influence, reach and impact by leveraging on the network and resources the Business Council avails us to serve the people who need us faster and better,”  Ndubuisi said. ",
    ],
  },
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<string | null>(null); // Track which post is expanded
  const contentPadding = useBreakpointValue({
    base: "1rem",
    md: "2rem",
    lg: "4rem",
  });
  const headingFontSize = useBreakpointValue({
    base: "2xl",
    md: "3xl",
    lg: "4xl",
  });
  const textFontSize = useBreakpointValue({ base: "md", md: "lg" });

  // Toggle expanded state for a blog post
  const toggleExpand = (id: string) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <Box bg="#ffffff">
      <NavWhite />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12}>
          <Heading
            as="h1"
            fontSize={headingFontSize}
            textAlign="center"
            color="gray.800"
          >
            Our Blog
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing="8"
            width="100%"
          >
            {blogPosts.map((post) => (
              <Box
                key={post.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
                transition="all 0.3s"
              >
                <Box position="relative" height="200px">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <Box p="6" color="textGrey">
                  <Text fontSize="sm" color="gray.500" mb="2">
                    {new Date(post.date).toLocaleDateString()}
                  </Text>
                  <Heading as="h2" size="lg" mb="2" noOfLines={2}>
                    {post.title}
                  </Heading>
                  <Text fontSize={textFontSize} mb="4" noOfLines={3}>
                    {post.excerpt}
                  </Text>

                  {/* Read More Section */}
                  <Collapse in={expandedPost === post.id} animateOpacity>
                    {post.paragraphs.map((paragraph, index) => (
                      <Text key={index} mb={4}>
                        {paragraph}
                      </Text>
                    ))}
                  </Collapse>

                  <Button
                    variant="link"
                    color="blue.500"
                    fontWeight="bold"
                    onClick={() => toggleExpand(post.id)}
                  >
                    {expandedPost === post.id ? "Show less" : "Read more"}
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Blog;
