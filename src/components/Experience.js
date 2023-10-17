import React from "react";
import {
    List,
    ListItem,
    ListIcon,
    Heading,
    Flex,
    Stack,
    Image,
    Box,
    Divider,
    Link,
} from "@chakra-ui/react";
import {
    FaBriefcase,
    FaBusinessTime,
    FaLocationArrow,
    FaExternalLinkAlt,
} from "react-icons/fa";
function Experience({ experience }) {
    return (
        <Flex id="experience" direction="column" mb={250}>
            <Heading>Experience</Heading>
            <Divider borderColor="gray.500" />
            {experience.map((item, idx) => (
                <Flex
                    key={item.company}
                    direction={"row"}
                    borderWidth={"1px"}
                    mt={7}
                    justify="space-between"
                    w={["inherit", "55vw"]}
                    pl={4}
                    pt={4}
                    pb={4}
                    pr={2}
                    boxShadow="2xl"
                    ml={idx % 2 == 0 ? 0 : ["0", "10vw"]}
                >
                    {idx % 2 == 0 && <Box boxSize="200px" display={["none", "block"]}>
                        <Image
                            borderRadius="20px"
                            src={item.image}
                            alt="image"
                        />
                    </Box>}
                    <Box>
                        <List spacing={5} mt={5}>
                            <Stack justify="space-evenly" direction="column">
                                <ListItem>
                                    <ListIcon as={FaBriefcase} color="teal.600" />
                                    {item.company}
                                </ListItem>
                                {item.designations.map((ele) => (
                                    <ListItem key={ele.designation}>
                                        <ListIcon as={FaBusinessTime} color="teal.600" />
                                        {ele.designation} ({ele.duration})
                                    </ListItem>
                                ))}
                                {item.linkText && <ListItem>
                                    <ListIcon as={FaExternalLinkAlt} color="teal.600" />
                                    <Link href={item.link}>{item.linkText}</Link>
                                </ListItem>}
                            </Stack>
                        </List>
                    </Box>
                    {idx % 2 == 1 && <Box boxSize="200px" display={["none", "block"]}>
                        <Image
                            borderRadius="20px"
                            src={item.image}
                            alt="image"
                        />
                    </Box>}
                </Flex>
            ))}
        </Flex>
    );
}

export default Experience;
