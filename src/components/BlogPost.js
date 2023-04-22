import React from "react";
import Link from "next/link";

import { useColorMode, Heading, Text, Flex, Box, VStack } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";


const BlogPost = ({ title, publishedDate, summary, slug }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400"
  };

  return (
    <VStack
      width={"100%"}
      spacing='10px'
      my={5}
      _hover={{
        borderRight: "10px solid gray"
      }}
    >
      <Link href={`blog/${slug}`} passHref
        style={{
          width:"inherit"
        }}
      >
        <Text
          color='gray.500'
          textAlign={["left", "right"]}
          mb={[0, 2]}
          display={"flex"}
          fontSize="xs"
        >
          {format(parseISO(publishedDate), "MMM dd, yyyy")}
        </Text>
        <Heading size='md' as='h3' mb={2} fontWeight='medium'
          display={"flex"}
        >
          {title}
        </Heading>
        <Text color={secondaryTextColor[colorMode]}
          display={["none", "flex"]}
        >{summary}</Text>
      </Link>
    </VStack>
  );
}

export default BlogPost;

// const BlogPost = ({ title, publishedDate, summary, slug }) => {
//   const { colorMode } = useColorMode();
//   const secondaryTextColor = {
//     light: "gray.700",
//     dark: "gray.400"
//   };

//   return (
//     <Link href={`blog/${slug}`} passHref>
//       {/* <Link 
//       // w='100%' 
//       _hover={{ textDecoration: "none" }}> */}
//         <Box mb={10} display='block' 
//         // width='100%'
//         >
//           <Flex
//             // width='100%'
//             align='flex-start'
//             justifyContent='space-between'
//             flexDirection={["column", "row"]}
//             className="box"
//           >
//             <Flex
//               flexDirection='column'
//               align='flex-start'
//               justifyContent='start'
//               // width='100%'
//             >
//               <Heading size='md' as='h3' mb={1} fontWeight='medium'>
//                 {title}
//               </Heading>
//             </Flex>
//             <Text
//               color='gray.500'
//               // minWidth='105px'
//               textAlign={["left", "right"]}
//               mb={[4, 0]}
//             >
//               {format(parseISO(publishedDate), "MMM dd, yyyy")}
//             </Text>
//           </Flex>
//           <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
//         </Box>
//       {/* </Link> */}
//     </Link>
//   );
// };