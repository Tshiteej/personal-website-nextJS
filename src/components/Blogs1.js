import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Image,
  Box,
  Divider,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const MBox = motion(Box);
function Blogs({posts}) {
  console.log
  const { colorMode } = useColorMode();
  return (
    <Flex id='blogs' direction='column' mb={250}>
      <Heading>Recent Articles</Heading>
      <Divider borderColor='gray.500' />
      <Flex
        justify='space-evenly'
        direction={["column", "row"]}
        w='70vw'
        mt={20}
      >
        <MBox
          whileHover={{ scale: 1.2, y: "-30px" }}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          mt={6}
          h='400px'
          w='300px'
          boxShadow='dark-lg'
        >
          <LinkBox>
            <Box w='300px' h='200px'>
              <Image
                w='300px'
                h='200px'
                src='https://miro.medium.com/max/1400/1*oaFozQztiv9WMMcwX9m9HQ.jpeg'
                alt='image'
              />
            </Box>
            <Text mt='1' fontWeight='semibold' p={2} align='center'>
              <LinkOverlay href='blog/how-regex-in-python-isnt-as-bad-as-you-think'>
                How regex in python isn’t as bad as you think?
              </LinkOverlay>
            </Text>
            <Box px='4' pb='6'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform=''
              >
                Published on : 15-APR-20
              </Box>

              <Box pt='2' justify='right'>
                Ever thought of solving a problem with regex and ended up with 2
                problems. No more!
              </Box>
            </Box>
          </LinkBox>
        </MBox>

        <MBox
          whileHover={{ scale: 1.2, y: "-30px" }}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          mt={20}
          h='400px'
          w='300px'
          boxShadow='dark-lg'
        >
          <LinkBox>
            <Box w='300px' h='200px'>
              <Image
                w='300px'
                h='200px'
                src='https://miro.medium.com/max/1400/1*NO6d1BsPWWmZHeAXWxjGEA.png'
                alt='image'
              />
            </Box>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              p={2}
              align='center'
            >
              <LinkOverlay href='blog/test-automation-using-python-and-selenium'>
                Test Automation Using Python and Selenium
              </LinkOverlay>
            </Box>
            <Box px='6' pb='6'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform=''
                ml='2'
              >
                Published on : 26-APR-2020
              </Box>

              <Box>
                Ever though of solving a problem with regex and ended up with 2
                problems now. No more!
              </Box>
            </Box>
          </LinkBox>
        </MBox>

        {/* <MBox
          whileHover={{ scale: 1.2, y: "-30px" }}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          mt={6}
          h='400px'
          w='300px'
          boxShadow='dark-lg'
        >
          <Box w='300px' h='200px'>
            <Image
              w='300px'
              h='200px'
              src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2806&q=80'
              alt='image'
            />
          </Box>
          <Text mt='1' fontWeight='semibold' p={2} align='center'>
            How regex in python isn’t as bad as you think?
          </Text>
          <Box px='4' pb='6'>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform=''
            >
              Published on : 05-APR-21
            </Box>
            <Box pt='2' justify='right'>
              Ever thought of solving a problem with regex and ended up with 2
              problems. No more!
            </Box>
          </Box>
        </MBox> */}
      </Flex>
    </Flex>
  );
}

export default Blogs;
