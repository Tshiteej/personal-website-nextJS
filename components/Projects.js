import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Image,
  Box,
  Divider,
  TagLabel,
  Tag,
  SimpleGrid
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const MBox = motion(Box);
const MTag = motion(Tag);
function Projects() {
  const { colorMode } = useColorMode();
  return (
    <Flex id='projects' direction='column' mb={250}>
      <Heading>Projects</Heading>
      <Divider borderColor='gray.500' />
      <SimpleGrid
        columns={[1, 2]}
        spacingX={[5, "120px"]}
        spacingY={[5, 10]}
        ml={[0, "10vw"]}
      >
        <Box
          borderWidth='1px'
          borderRadius='lg'
          overflowX='visible'
          mt={14}
          ml={6}
          h='450px'
          w='300px'
          boxShadow='dark-lg'
        >
          <Box w='300px' h='210px'>
            <Image
              w='298px'
              h='inherit'
              borderRadius='10px'
              src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2806&q=80'
              alt='image'
            />
          </Box>
          <Text mt='1' fontWeight='semibold' p={2} align='center'>
            Personal Website
          </Text>
          <MBox
            whileHover={{ x: "30px", y: "-30px", scale: 1.2 }}
            mr={[0, "-55px"]}
            borderRadius='15px'
            bgColor={colorMode == "dark" ? "gray.700" : "gray.100"}
            boxShadow='dark-xl'
          >
            <Box pt='2' pl='3' pb='3' justify='right'>
              As an attempt to learn NextJS and Chakra-UI, I came up with this
              site.
            </Box>
          </MBox>
          <Text ml={2} mt={2}>
            Stack:
          </Text>
          <Box mt='2' ml='3'>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>NextJS</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>Chakra-UI</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>ReactJS</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>HTML</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>CSS</TagLabel>
            </MTag>
          </Box>
        </Box>
        <Box
          borderWidth='1px'
          borderRadius='lg'
          overflowX='visible'
          mt={[6, "130px"]}
          h='450px'
          w='300px'
          boxShadow='dark-lg'
          justify='flex-end'
          mr={0}
        >
          <Box w='300px' h='210px'>
            <Image
              w='298px'
              h='inherit'
              borderRadius='10px'
              src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2806&q=80'
              alt='image'
            />
          </Box>
          <Text mt='1' fontWeight='semibold' p={2} align='center'>
            Spotify Clone
          </Text>
          <MBox
            whileHover={{ x: "30px", y: "-30px", scale: 1.2 }}
            ml={[0, "-55px"]}
            borderRadius='15px'
            bgColor={colorMode == "dark" ? "gray.700" : "gray.100"}
            boxShadow='dark-xl'
          >
            <Box pt='2' pl='3' pb='3' justify='right'>
              As an attempt to learn React and SCSS, created a clone of one of
              the most famous music app
            </Box>
          </MBox>
          <Text ml={2} mt={2}>
            Stack:
          </Text>
          <Box mt='2' ml='3'>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>ReactJS</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>SCSS</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>HTML</TagLabel>
            </MTag>
          </Box>
        </Box>

        <Box
          borderWidth='1px'
          borderRadius='lg'
          overflowX='visible'
          mt={14}
          ml={6}
          h='450px'
          w='300px'
          boxShadow='dark-lg'
        >
          <Box w='300px' h='210px'>
            <Image
              w='298px'
              h='inherit'
              borderRadius='10px'
              src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2806&q=80'
              alt='image'
            />
          </Box>
          <Text mt='1' fontWeight='semibold' p={2} align='center'>
            NIT Sikkim domain website
          </Text>
          <MBox
            whileHover={{ x: "30px", y: "-30px", scale: 1.2 }}
            mr={[0, "-55px"]}
            borderRadius='15px'
            bgColor={colorMode == "dark" ? "gray.700" : "gray.100"}
            boxShadow='dark-xl'
          >
            <Box pt='2' pl='3' pb='3' justify='right'>
              As a technical lead of the WDC, created the present NIT Sikkim
              site
            </Box>
          </MBox>
          <Text ml={2} mt={2}>
            Stack:
          </Text>
          <Box mt='2' ml='3'>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>PHP</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>Bootstrap</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>JavaScript</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>HTML</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>CSS</TagLabel>
            </MTag>
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default Projects;
