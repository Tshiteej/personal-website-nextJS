import Head from "next/head";
import { useColorMode, Stack } from "@chakra-ui/react";

export default function Index() {
  const { colorMode } = useColorMode();
  return (
    <>
      <h1>Kahan pahuch gaili!!</h1>
    </>
  );
}

export async function getStaticProps() {
//   await generateRssFeed();
  return { props: {  } };
}