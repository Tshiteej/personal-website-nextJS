import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Divider
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function Intro() {
  return (
    <Flex id='about' direction='column' mb={250}>
      <Heading>About</Heading>
      <Divider borderColor='gray.500' />
      <Box w='70vw' lineHeight='8' mt={20}>
        Hello Everyone! <br />
        My name is Tshiteej Bhardwaj. I love creating things from scratch. I
        started my journey in tech by playing "Roadrash" 😜. Jokes apart, I
        started my journey with C++ by building small banking systems as a
        hobby. Today, I build things for the web , mostly using JavaScript.{" "}
        <br />
        Currently I am working as a Senior Software Engineer at YellowMessenger.
        <br />
        <List spacing={5} mt={5}>
          <Text>Most of my weapons in the arsenal includes:</Text>
          <Stack justify='space-evenly' direction={["column", "row"]}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='teal.600' />
              JavaScript
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='teal.600' />
              NodeJS
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='teal.600' />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='teal.600' />
              MongoDB
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='teal.600' />
              Python
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='teal.600' />
              MySQL
            </ListItem>
          </Stack>
        </List>
      </Box>
    </Flex>
  );
}

export default Intro;
