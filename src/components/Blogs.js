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
import moment from "moment"
const MBox = motion(Box);
function Blogs({ posts }) {
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
                {
                    posts.map((item) => (
                        <MBox
                            key={item.slug}
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
                                        src='/blogs.jpeg'
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
                                    <LinkOverlay href={`/blog/${item.slug}`}>
                                        {item.title}
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
                                        Published on : {moment(item.publishedDate).format("DD MMM YYYY")}
                                    </Box>

                                    <Box 
                                    fontSize={16}
                                    mt={3}
                                    >
                                        {item.summary}
                                    </Box>
                                </Box>
                            </LinkBox>
                        </MBox>
                    ))
                }
            </Flex>
        </Flex>
    );
}

export default Blogs;
