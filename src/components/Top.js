import { Heading, Text, Flex, Box } from "@chakra-ui/react";

import React from "react";
function Top() {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      maxWidth='70vw'
      height={["80vh", "80vh", "100vh"]}
      //   mt={-20}
    >
      <Box>
        <Heading as='h3' size='lg' ml={-3}>
          Hello there, I&quot;m
        </Heading>
        <Heading as='h1' size='3xl' mt={6}>
          Tshiteej Bhardwaj
        </Heading>
        <Text mt={8} width={["70vw", "30vw", "50vw"]}>
          I am a Backend Engineer based out of India who loves to build things on
          the Internet, Real Life, and everything in between.
        </Text>
        <Text mt={2}>I also love to discuss tech, comics and anime.</Text>
      </Box>
    </Flex>
  );
}

export default Top;
