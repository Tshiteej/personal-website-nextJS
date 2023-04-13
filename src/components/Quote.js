import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  WrapItem,
  Wrap,
  Box
} from "@chakra-ui/react";
import useSWR from "swr";
import { FaQuoteRight } from "react-icons/fa";

export async function getData() {
  const res = await fetch("http://quotes.stormconsultancy.co.uk/random.json");
  const data = await res.json();
  console.log(data, "DATA");
  return {
    data
  };
}

function Quote() {
  const { data, error } = useSWR(
    "http://quotes.stormconsultancy.co.uk/random.json"
  );

  if (error) {
    console.log("ERROR calling API");
    return <></>;
  }
  if (!data || data.id == 20 || data.id == 31 || data.id == 29) {
    console.log("No Data in API");
    return <></>;
  }
  return (
    // <Flex
    //   flexDirection='column'
    //   justifyContent='center'
    //   alignItems='center'
    //   maxWidth='70vw'
    // >
    <Wrap display={["none", "flex", "flex"]} w={800}>
      <WrapItem>
        <Text>{data.quote}</Text>
      </WrapItem>
      <br />
      <WrapItem>
        <Text mt={2}>~ {data.author}</Text>
        {/* <FaQuoteRight /> */}
      </WrapItem>
    </Wrap>
    // </Flex>
  );
}

export default Quote;
