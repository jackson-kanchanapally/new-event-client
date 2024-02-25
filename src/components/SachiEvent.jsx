import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function SachiEvent() {
  return (
    <Flex
      w="100vw"
      pt={["40px", "80px"]}
      mt={["5px"]}
      direction="column"
      color="black"
      mb={["30px"]}
      bg="white"
      h={["100vh"]}
      alignItems={["center", "center"]}
    >
      <Box w={["85%", "70%"]}>
        <Box>
          <Text letterSpacing="0.2em" fontSize="18px" color="yellow.500">
            SACHI MEDIA BRINGS TO YOU
          </Text>
          <Heading fontSize={["40px", "45px"]} fontWeight="0.5rem">
            Ms. Vs Mrs. Event
          </Heading>
          <Text fontSize="20px">
            A Grand 3-Day Event at Chennai. March 8, 9, & 10.
          </Text>
        </Box>

        <Flex
          justifyContent="center"
          ml="20px"
          direction={["column-reverse", "row"]}
        >
          <Box ml={["", "70px"]} w={["75vw", "58vw"]}>
            <Flex mb={["", "15px"]}>
              <Text
                mt="40px"
                fontSize="20px"
                mb="18px"
                textAlign={["justify", ""]}
              >
                Women, being our cute daughters, sweet sisters, loving wives,
                and adorable mothers, are the source of immense strength.
              </Text>
            </Flex>
            <Flex mb={["", "15px"]}>
              <Text fontSize="20px" mb="18px" textAlign={["justify", ""]}>
                Empowering Women Entrepreneurs, One Generation at a Time!
              </Text>
            </Flex>
            <Flex mb={["", "15px"]}>
              <Text fontSize="20px" mb="18px" textAlign={["justify", ""]}>
                Let us celebrate the spirit of womanhood. Sharpen your skills by
                joining the competitions and cheering each other on. Discover
                your power to impact.
              </Text>
            </Flex>
          </Box>
          <Box ml={["10px"]}>
            <Image src="mrMs.png" w="420px" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
