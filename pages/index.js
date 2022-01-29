import Head from "next/head";
import { useColorMode, Stack } from "@chakra-ui/react";

import Container from "../components/Container";
import Top from "../components/Top";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
// import Quote from "../components/Quote";
import Blogs from "../components/Blogs";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Connect from "../components/Connect";

export default function Index() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Container>
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
          {/* <Quote /> */}
          <Intro />
          <Experience />
          <Blogs />
          <Projects />
          <Connect />
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
