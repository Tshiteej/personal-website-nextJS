import Head from "next/head";
import { useColorMode, Stack } from "@chakra-ui/react";

import Container from "../components/Container";
import Top from "../components/Top";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Blogs from "../components/Blogs";
// import Projects from "../components/Projects";
import Footer from "../components/Footer";
// import Connect from "../components/Connect";
import React, { useState, useEffect } from "react";
import { getAllFilesFrontMatter } from "../lib/mdx";
import axios from "axios";
export default function Index({ menu, experience, posts }) {
  const { colorMode } = useColorMode();
  const [domLoaded, setDomLoaded] = useState(true);
console.log({posts})
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && <>
      <Container menu={menu}>
        <Head>
          <title>Home | Tshiteej Bhardwaj</title>
        </Head>
        <Stack
          as='main'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          maxWidth='80vw'
          px={2}
        >
          <Top />
          <Intro />
          <Experience experience={experience}/>
          <Blogs posts={posts}/>
          {/* <Projects /> */}
          {/* <Connect /> */}
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getAllFilesFrontMatter("blog");
  let content = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/configs/content.json`)
  const { menu, experience } = content.data
  return { 
    props: { 
      menu: menu || [], 
      experience: experience || [], 
      posts: posts.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)).slice(0,3) 
    } 
  };
}