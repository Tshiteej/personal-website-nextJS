import React from "react";
import { useColorMode, Text, Flex, Box, Divider } from "@chakra-ui/react";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow
} from "react-icons/fa";
function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      id='footer'
      direction={["column", "row"]}
      mb={0}
      mt='12vh'
      w='100%'
      h={["200px", "50px"]}
      bgColor={["inherit", colorMode == "light" ? "gray.500" : "gray.700"]}
      align='center'
      justify='center'
    >
      <Box align='center' justify='center' display={["flex", "none"]}>
        <Divider borderColor='gray.500' />
        <Box
          my={4}
          mx={4}
          as='a'
          rel='noreferrer'
          href='https://github.com/Tshiteej'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaGithub />
        </Box>
        <Box
          my={4}
          mx={4}
          as='a'
          rel='noreferrer'
          href='https://stackoverflow.com/users/13223807/tshiteej'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaStackOverflow />
        </Box>
        <Box
          my={4}
          mx={4}
          as='a'
          rel='noreferrer'
          href='https://twitter.com/tbhardwaj97'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaTwitter />
        </Box>
        <Box
          my={4}
          mx={4}
          as='a'
          rel='noreferrer'
          href='https://www.instagram.com/tshiteej/'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaInstagram />
        </Box>
        <Box
          my={4}
          mx={4}
          as='a'
          rel='noreferrer'
          href='https://www.linkedin.com/in/tshiteej/'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaLinkedinIn />
        </Box>
      </Box>
      <Box align='center' justify='center'>
        <Text align='center' justify='center'>
          Made with ❤️ and ☕ by Tshiteej
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;
