import React from "react";
import Head from "next/head";

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Avatar,
  Stack,
  Badge
} from "@chakra-ui/react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  FacebookIcon
} from "react-share";

import { parseISO, format } from "date-fns";

import { useRouter } from "next/router";

import Container from "../components/Container";
import Footer from "../components/Footer";

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400"
  };
  const router = useRouter();
  const slug = router.asPath.replace("/blog/", "");
  // console.log(frontMatter.tags.split(","), typeof frontMatter.tags);

  const shareUrl = "https://www.tshiteej.com" + router.asPath;
  const title = frontMatter.title;
  const caption = frontMatter.summary;
  const hashTags = frontMatter.tags.split(",").map(ele => {
    return ele.trim().replace(/\s/,"_");
  });
  const related = "tshiteej";
  const source = "https://www.tshiteej.com/";
  return (
    <>
      <Container>
        <Head>
          <title>{frontMatter.title} | Tshiteej</title>
          <link rel='canonical' href={shareUrl} />
          <meta property='og:url' content={shareUrl} />
          <meta property='og:title' content={frontMatter.title} />
          <meta property='og:description' content={frontMatter.summary} />
          <meta name='twitter:card' content='summary' />
          <meta property='og:image' content='https://www.tshiteej.com/tb.png' />
          <meta name='og:keywords' content={frontMatter.tags} />
          <meta name='og:author' content='Tshiteej Bhardwaj' />
        </Head>
        <Stack
          as='article'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          maxWidth='700'
          w='100%'
          px={2}
        >
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
            w='100%'
          >
            <Heading letterSpacing='tight' mb={6} as='h1' size='2xl'>
              {frontMatter.title}
            </Heading>
            <Flex
              justify='space-between'
              align={["initial", "center"]}
              direction={["column", "row"]}
              mt={2}
              w='100%'
              mb={4}
            >
              <Flex align='center'>
                <Avatar
                  size='md'
                  // name={frontMatter.author}
                  src='https://avatars.githubusercontent.com/u/18628396?v=4'
                  mr={2}
                />
                <Text fontSize='sm' color={textColor[colorMode]}>
                  {frontMatter.author}
                  <br />

                  {format(parseISO(frontMatter.publishedDate), "MMM dd, yyyy")}
                  {" | "}
                  {frontMatter.readingTime.text}
                </Text>
              </Flex>
              <Flex direction='row' my={3}>
                <Box mx={1}>
                  <LinkedinShareButton
                    url={shareUrl}
                    summary={caption}
                    source={source}
                    className='socialshare'
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </Box>
                <Box mx={1}>
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    via={related}
                    hashtags={hashTags}
                    related={[related]}
                    className='socialshare'
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </Box>
                <Box mx={1}>
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=' | '
                    className='socialshare'
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </Box>
                <Box mx={1}>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    hashtag={hashTags}
                    className='socialshare'
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          {children}
          <Stack direction='row'>
            {hashTags.map(i => {
              return (
                <Badge variant='subtle' py={2} px={3} key={i}>
                  {i}
                </Badge>
              );
            })}
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
