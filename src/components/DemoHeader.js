import React from "react";

import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";

import DarkModeSwitch from "../components/DarkModeSwitch";
import NextLink from "next/link";
import styled from "@emotion/styled";
const bgColor = {
  light: "white",
  dark: "#171717"
};
const navHoverBg = {
  light: "gray.600",
  dark: "gray.300"
};
const color = {
  light: "black",
  dark: "white"
};

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height 0.5s, line-height 0.5s;
`;
function Header() {
  const { colorMode } = useColorMode();

  return (
    <StickyNav
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      maxWidth='800px'
      minWidth='356px'
      width='100%'
      bg={bgColor[colorMode]}
      as='nav'
      px={[2, 6, 6]}
      py={2}
      mt={8}
      mb={[0, 0, 8]}
      mx='auto'
    >
      <Box>
        <NextLink href='/' passHref>
          <Button
            as='a'
            variant='ghost'
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href='/blog' passHref>
          <Button
            as='a'
            variant='ghost'
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            Blog
          </Button>
        </NextLink>
      </Box>
      <DarkModeSwitch />
    </StickyNav>
  );
}

export default Header;
