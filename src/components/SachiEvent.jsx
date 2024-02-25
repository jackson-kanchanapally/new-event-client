import { Box, Flex, Heading,Text } from "@chakra-ui/react";
import React from "react";
import ButtonD from "./Button";

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
      pl={["20px", "270px"]}
      // alignItems={["center", "center"]}
    >
      <Box w={["85%", "70%"]}>
        <Box>
          <Text
            letterSpacing="0.2em"
            fontSize={["15px", "18px"]}
            color="
#ffd9a3"
          >
            SACHI MEDIA BRINGS TO YOU
          </Text>
          <Heading fontSize={["25px", "28px"]} fontWeight="0.5rem">
            MS. Vs MRS. EVENT
          </Heading>
          <Text fontSize={["16px", "18px"]} mt={["10px"]}>
            A Grand 3-Day Event at Chennai. March 8, 9, & 10.
          </Text>
        </Box>

        <Flex direction={["column-reverse", "row"]}>
          <Box
            w={["85vw", "40vw"]}
            fontSize={["15px", "17px"]}
            color="gray.500"
          >
            <Flex mb={["", "15px"]}>
              <Text
                mt="40px"
                // fontSize="20px"
                mb="18px"
                textAlign={["justify", ""]}
              >
                Women, being our cute daughters, sweet sisters, loving wives,
                and adorable mothers, are the source of immense strength.
              </Text>
            </Flex>
            <Flex mb={["", "15px"]}>
              <Text mb="18px" textAlign={["justify", ""]}>
                Empowering Women Entrepreneurs, One Generation at a Time!
              </Text>
            </Flex>
            <Flex mb={["", "15px"]}>
              <Text mb="18px" textAlign={["justify", ""]}>
                Let us celebrate the spirit of womanhood. Sharpen your skills by
                joining the competitions and cheering each other on. Discover
                your power to impact.
              </Text>
            </Flex>
            <Box mt={["", "60px"]}>
              <ButtonD />
            </Box>
          </Box>
          <Box ml={["10px"]}>{/* <Image src="mrMs.png" w="420px" /> */}</Box>
        </Flex>
      </Box>
    </Flex>
  );
}
