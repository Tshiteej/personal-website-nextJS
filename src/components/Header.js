import React from "react";
import NextLink from "next/link";

import {
  Box,
  Heading,
  Flex,
  useColorMode,
  Switch,
  Spacer,
  useColorModeValue,
  Button
} from "@chakra-ui/react";

const color = {
  light: "black",
  dark: "white"
};

const Header = props => {
  const [show, setShow] = React.useState(false);
    console.log(props, "PROPS");
  const handleToggle = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = useColorModeValue("black.500", "red.200");

  return (
    <Flex
      as='nav'
      align='center'
      justify='flex-end'
      wrap='wrap'
      padding='1.5rem'
      maxWidth='80vw'
      alignItems='center'
      ml='10vw'
      minWidth='356px'
      bg='transparent'
      color={textColor}
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading
          as='h1'
          size='lg'
          letterSpacing={"-.1rem"}
          color={color[colorMode]}
        >
          <NextLink href='/' passHref>
            Tshiteej
          </NextLink>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill={colorMode == "dark" ? "white" : "black"}
          width='12px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>
      <Spacer />
      <Box
        display={{
          base: show === true ? "flex" : "none",
          sm: show === true ? "flex" : "none",
          md: "flex"
        }}
        mr={4}
        width={{ sm: "full", md: "auto" }}
        alignItems={{ base: "right", sm: "center" }}
        direction={{ sm: "row", md: "column" }}
      >
        {
          props.menu.map((item) => {
            return (
              <NextLink href={item.route} passHref key={item.display}>
                <Button
                  as='a'
                  variant='ghost'
                  p={[1, 2, 4]}
                  _hover={{ border: "1px", borderColor: color[colorMode] }}
                  color={color[colorMode]}
                >
                  {item.display}
                </Button>
              </NextLink>
            )
          })
        }
      </Box>
      <Box
        display={{
          base: show === true ? "block" : "none",
          sm: show ? "block" : "none",
          md: "block"
        }}
        mt={{ base: 4, md: 0 }}
      >
        <Switch size='md' colorScheme='teal' onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
};

export default Header;
