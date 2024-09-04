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
  Stack,
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
    title: "Pamtech Autoland is Coming to Port Harcourt Soon",
    excerpt:
      "amtech Autoland is Coming to Port Harcourt Soon: A New Destination for Auto Enthusiasts",
    imageUrl:
      "https://res.cloudinary.com/dye76dtzn/image/upload/v1725462401/blog_images/l0vyrlnqcdlaakqxuu5a.png",
    date: "2024-08-22",
    paragraphs: [
      "Pamtech Autoland is set to expand its footprint with the upcoming launch of its newest location in Port Harcourt. This exciting development marks a significant milestone for Pamtech Autoland as it continues to bring its comprehensive auto services and products closer to customers across Nigeria. Known for its commitment to quality and customer satisfaction, Pamtech Autoland’s new facility promises to be a game-changer for automotive enthusiasts and everyday drivers alike in the region.",
      "The new Port Harcourt location will serve as a one-stop destination for all automotive needs, offering an extensive range of services from routine maintenance to advanced repairs. The state-of-the-art facility is designed to cater to both individual vehicle owners and fleet operators, with a dedicated team of experts ready to provide top-notch service. In addition to repair and maintenance, the location will feature a retail section stocked with a wide variety of auto parts and accessories, ensuring that customers have access to everything they need under one roof.",
      "Pamtech Autoland's expansion into Port Harcourt reflects its strategic vision of enhancing accessibility and convenience for its customers. The new location is expected to play a crucial role in addressing the growing demand for high-quality automotive services in the region. By providing local access to its renowned services and products, Pamtech Autoland is not only strengthening its presence in Nigeria but also contributing to the overall growth of the automotive sector in Port Harcourt.",
      "As the opening date approaches, anticipation is building among local auto enthusiasts and businesses. Pamtech Autoland’s commitment to excellence and customer-centric approach is poised to make a lasting impact on the Port Harcourt automotive market. With its new location, Pamtech Autoland is set to become an integral part of the community, offering unparalleled service and convenience to drivers across the region.",
    ],
  },
  {
    id: "66c720427e820316498b316a",
    title: "Pamtech Group Unveils Game-Changing Auto-Parts E-Commerce Platform",
    excerpt:
      "Pamtech Group Unveils Game-Changing Auto-Parts E-Commerce Platform for her customers",
    imageUrl:
      "https://res.cloudinary.com/dye76dtzn/image/upload/v1725461904/blog_images/klbcnxi5fbswneuntcck.png",
    date: "2024-08-22",
    paragraphs: [
      "Pamtech Group is proud to announce the launch of its latest innovation, the Pamtech Autoparts app, designed to revolutionize the auto-parts shopping experience. This state-of-the-art e-commerce platform is set to become a one-stop-shop for all automotive needs, providing consumers and businesses with easy access to a vast inventory of top-quality auto parts. The app is engineered to streamline the often cumbersome process of sourcing and purchasing auto parts, offering a user-centric interface that simplifies the search and purchase process.",
      "In his awe-inspiring keynote address, Engr. Chidomere Ndubuisi drew an ingenious analogy between the human body and the elements that compose a thriving business. He expounded on how the “3 Gifts” – Body, Soul, and Spirit – mirror the essential components of a flourishing enterprise.\nEngr. Chidomere Ndubuisi likened the departments of a company to the human body, highlighting their vital role in establishing a strong foundation. Just as the body’s various systems collaborate to sustain life, departments work in harmony to ensure the smooth operation of a business.",
      "One of the standout features of the Pamtech Autoparts app is its advanced search functionality, which allows users to find the exact parts they need with just a few clicks. By integrating detailed product descriptions, compatibility checks, and high-resolution images, the platform ensures that customers can make informed decisions quickly. Additionally, the app supports real-time inventory updates and price comparisons, helping users secure the best deals available in the market without the hassle of visiting multiple stores.",
      "The Pamtech Autoparts app also emphasizes convenience through its seamless integration of payment and delivery options. With a variety of secure payment methods and flexible delivery choices, including same-day and next-day options, the app caters to both urgent and routine auto parts needs. Businesses can also benefit from bulk purchasing options and specialized accounts, making it easier for them to manage large orders and track shipments effectively.",
      "Pamtech Group’s latest venture is more than just a technological upgrade; it represents a significant shift in how auto parts are bought and sold. By focusing on user experience, efficiency, and comprehensive service, the Pamtech Autoparts app sets a new standard in the e-commerce landscape for automotive parts. As it rolls out to a wider audience, it promises to reshape the industry, making auto parts procurement faster, smarter, and more accessible than ever before.",
    ],
  },
  {
    id: "66c720427e820316498b316a",
    title: "Petrol Padi App Featured on Tech Cabal",
    excerpt:
      "Petrol Padi App Featured on Tech Cabal: A Game-Changer in Fuel Retail",
    imageUrl:
      "https://res.cloudinary.com/dye76dtzn/image/upload/v1725461614/blog_images/npctb8qm5bez19f0b5yi.png",
    date: "2024-08-22",
    paragraphs: [
      "Pamtech Group is proud to announce the launch of its latest innovation, the Pamtech Autoparts app, designed to revolutionize the auto-parts shopping experience. This state-of-the-art e-commerce platform is set to become a one-stop-shop for all automotive needs, providing consumers and businesses with easy access to a vast inventory of top-quality auto parts. The app is engineered to streamline the often cumbersome process of sourcing and purchasing auto parts, offering a user-centric interface that simplifies the search and purchase process.",
      "One of the standout features of the Pamtech Autoparts app is its advanced search functionality, which allows users to find the exact parts they need with just a few clicks. By integrating detailed product descriptions, compatibility checks, and high-resolution images, the platform ensures that customers can make informed decisions quickly. Additionally, the app supports real-time inventory updates and price comparisons, helping users secure the best deals available in the market without the hassle of visiting multiple stores.",
      "The Pamtech Autoparts app also emphasizes convenience through its seamless integration of payment and delivery options. With a variety of secure payment methods and flexible delivery choices, including same-day and next-day options, the app caters to both urgent and routine auto parts needs. Businesses can also benefit from bulk purchasing options and specialized accounts, making it easier for them to manage large orders and track shipments effectively.",
      "Pamtech Group’s latest venture is more than just a technological upgrade; it represents a significant shift in how auto parts are bought and sold. By focusing on user experience, efficiency, and comprehensive service, the Pamtech Autoparts app sets a new standard in the e-commerce landscape for automotive parts. As it rolls out to a wider audience, it promises to reshape the industry, making auto parts procurement faster, smarter, and more accessible than ever before.",
    ],
  },
  {
    id: "66c720427e820316498b316a",
    title: "Pamtech Oil & Gas Unveils Petrol Padi",
    excerpt:
      "Pamtech Oil & Gas Unveils Petrol Padi: The Future of Fuel Retail is Here.",
    imageUrl:
      "https://res.cloudinary.com/dye76dtzn/image/upload/v1724968903/blog_images/tfhiolwj35k4tlo0gn2x.png",
    date: "2024-08-22",
    paragraphs: [
      "In a move poised to transform the fuel retail landscape, Pamtech Oil & Gas has announced the launch of Petrol Padi, a groundbreaking fuel e-commerce app designed to make refueling simpler, faster, and more efficient than ever before. With the rise of digital solutions across industries, Petrol Padi is set to lead the charge in modernizing how consumers interact with fuel services. Here’s everything you need to know about this innovative platform.",
      "What is Petrol Padi?  Petrol Padi is an advanced fuel e-commerce app developed by Pamtech Oil & Gas to streamline the process of buying and managing fuel. Available on both Android and iOS, the app integrates cutting-edge technology to provide a seamless user experience for both individuals and businesses. By leveraging the power of digital innovation, Petrol Padi aims to make fuel retail as effortless as a few taps on your smartphone.",
      `Key Features of Petrol Padi
User-Friendly Interface: Petrol Padi boasts an intuitive design that simplifies navigation. Users can easily find nearby fuel stations, compare prices, and choose the best option that suits their needs.
`,
      "Seamless Transactions: With Petrol Padi, transactions are quick and secure. Users can pay for fuel directly through the app, avoiding long queues and making the process more efficient.",
      `Fuel Delivery Services: One of the standout features of Petrol Padi is its fuel delivery service. Users can schedule deliveries to their location, ensuring they never run out of fuel even in the most inconvenient situations.

Real-Time Updates: The app provides real-time information on fuel prices and availability, allowing users to make informed decisions and save money.

Loyalty Programs and Discounts: Petrol Padi offers various loyalty programs and discounts to reward frequent users. These programs are designed to provide additional value and savings on fuel purchases.

Comprehensive Station Information: The app includes detailed information about fuel stations, including services offered, operating hours, and customer reviews, helping users make better choices.

Why Petrol Padi is a Game-Changer
In an era where convenience and efficiency are paramount, Petrol Padi is setting a new standard for the fuel retail industry. Traditional fuel purchasing methods often involve time-consuming processes and inconveniences, but Petrol Padi addresses these issues head-on.

By digitizing fuel transactions and integrating advanced features, Petrol Padi not only enhances user experience but also promotes transparency and competitiveness within the fuel market. Consumers can now enjoy a hassle-free fuel experience that aligns with their fast-paced lifestyles.

The Vision Behind Petrol Padi
Pamtech Oil & Gas has always been at the forefront of innovation in the energy sector. With Petrol Padi, the company continues its commitment to improving customer experiences and leveraging technology to meet evolving market demands. The launch of this app is a testament to Pamtech's vision of a more connected and efficient fuel retail environment.

How to Get Started
Getting started with Petrol Padi is simple. Download the app from the Google Play Store or Apple App Store, register your account, and start exploring the myriad of features designed to make fuel management a breeze. Whether you’re looking to refuel your vehicle, schedule a delivery, or simply find the best fuel prices, Petrol Padi is your one-stop solution.

Conclusion
Pamtech Oil & Gas’s Petrol Padi is set to revolutionize the fuel retail industry with its innovative approach and user-centric features. By bringing the convenience of e-commerce to fuel purchasing, Petrol Padi is not just enhancing the way we buy fuel but also paving the way for a more efficient and connected future. Embrace the future of fuel retail with Petrol Padi—where technology meets convenience.
`,
    ],
  },
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
          <Stack spacing={8} width="100%">
            {" "}
            {/* Stack for vertical alignment */}
            {blogPosts.map((post) => (
              <Box
                key={post.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
                transition="all 0.3s"
              >
                <Box position="relative" height="300px">
                  {" "}
                  {/* Adjusted height for images */}
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    priority // Optional: Load images faster
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
          </Stack>
        </VStack>
      </Container>
      <Sustainability />
      <Footer />
    </Box>
  );
};

export default Blog;
