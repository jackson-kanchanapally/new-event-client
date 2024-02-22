import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function JoinUs() {
  return (
    <Flex
      w="100vw"
      pt={["40px", "80px"]}
      mt={["5px"]}
      direction="column"
      color="black"
      mb={["30px"]}
      alignItems={["center", "center"]}
    >
      <Box w={["85%", "70%"]}>
        <Box>
          <Heading fontSize={["40px", "45px"]} textAlign={["center"]}>
            Join Us
          </Heading>
        </Box>

        <Flex
          justifyContent="center"
          ml="20px"
          direction={["column-reverse", "row"]}
        >
          <Box ml={["10px"]}>
            <Image src="joinus.png" w="420px" />
          </Box>
          <Box ml={["", "70px"]} w={["75vw", "58vw"]}>
            <Flex mb={["", "15px"]}>
              <Text
                mt="40px"
                fontSize="20px"
                mb="18px"
                textAlign={["justify", ""]}
              >
                To Build your network and learn from inspiring women
                entrepreneurs. Unleash the next generation of female business
                leaders with mentorship and guidance.
              </Text>
            </Flex>
            <Flex mb={["", "15px"]}>
              <Text fontSize="20px" mb="18px" textAlign={["justify", ""]}>
                Learn from successful women, no matter your age or stage in 
                your journey.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
