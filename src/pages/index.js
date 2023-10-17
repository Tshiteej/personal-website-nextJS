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
import axios from "axios";
export default function Index({ menu, experience }) {
  const { colorMode } = useColorMode();
  const [domLoaded, setDomLoaded] = useState(true);

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
          <Blogs />
          {/* <Projects /> */}
          {/* <Connect /> */}
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let content = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/configs/content.json`)
  const { menu, experience } = content.data
  return { props: { menu: menu || [], experience: experience || [] } };
}