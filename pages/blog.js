import React, { useState } from "react";
import Head from "next/head";
import Container from "../components/Container";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRight,
  InputRightElement,
  useColorModeValue,
  Box,
  Text
} from "@chakra-ui/react";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";

import { SearchIcon } from "@chakra-ui/icons";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPost = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate))
    )
    .filter(frontMatter =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <>
      <Head>
        <title>Blog | Tshiteej</title>
      </Head>
      <Container>
        <Stack
          as='main'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          //   maxWidth='700px'
          //   minWidth='100%'
          maxWidth={750}
        >
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            // maxWidth='700px'
            // minWidth='30vw'
            w='100%'
            px={4}
          >
            <Flex
              flexDirection='row'
              justifyContent='space-evenly'
              alignItems='baseline'
            >
              <Heading letterSpacing='tight' mb={4} as='h1' size='2xl'>
                Blog
              </Heading>
              <Text fontSize='sm'>({posts.length} posts)</Text>
            </Flex>
            <Text my={4}>
              I love to write around Web Development, and related technologies.
              I hope that you find the articles helpful.
            </Text>
            <InputGroup mb={4} mr={4} w='100%' mb={5} mt={2}>
              <Input
                aria-label='Search by title'
                placeholder='Search by title'
                onChange={e => setSearchValue(e.target.value)}
                borderColor={useColorModeValue("gray.700", "inherit")}
              />
              <InputRightElement>
                <SearchIcon color={useColorModeValue("gray.700", "gray.200")} />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPost.length && <Box width={750}> No Posts Found</Box>}
            {filteredBlogPost.map(frontMatter => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
            {/* {posts.map(frontMatter => (
              
            ))} */}
          </Flex>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
