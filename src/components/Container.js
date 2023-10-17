import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";

import Header from "./Header";
import SideSocial from "./SideSocial";

const Container = ({ menu, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "black",
    dark: "white"
  };

  return (
    <>
      <Header menu={menu || []}/>
      <SideSocial alignItems='flex-end' position='fixed' />

      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
