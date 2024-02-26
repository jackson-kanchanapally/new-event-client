import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ButtonD from "./Button";

export default function SachiEvent() {
  return (
    <Flex
      w="100vw"
      // mt={["5px"]}
      direction="column"
      color="black"
      mb={["30px"]}
      bg="white"
      h={["100vh"]}
      // pl={["20px", "270px"]}
      // alignItems={["center", "center"]}
    >
      <Image
        src="Schi.png"
        pos="absolute"
        w={["322px"]}
        pt={["40px", "50px"]}
        pl={["20px"]}
      />

      <Box w={["85%", "70%"]} pl={["20px", "270px"]} pt={["40px", "100px"]}>
        <Box>
          <Text
            // letterSpacing="0.2em"
            fontSize={["15px", "18px"]}
            color="#FFA800"
            fontFamily="oswald"
          >
            Sachi Media brings to you
          </Text>
          <Heading
            fontFamily="oswald"
            fontSize={["25px", "32px"]}
            fontWeight="400"
          >
            Ms. Vs Mrs. Event
          </Heading>
          <Text fontFamily="oswald" fontSize={["16px", "18px"]} mt={["10px"]}>
            A Grand 3-Day Event at Chennai. March 8, 9, & 10.
          </Text>
        </Box>

        <Flex direction={["column-reverse", "row"]}>
          <Box
            w={["85vw", "35vw"]}
            fontSize={["15px", "17px"]}
            color="gray.500"
          >
            <Flex mb={["0", "15px"]}>
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
            <Flex mb={["0", "15px"]}>
              <Text mb="18px" textAlign={["justify", ""]}>
                Empowering Women Entrepreneurs, One Generation at a Time!
              </Text>
            </Flex>
            <Flex mb={["0", "15px"]}>
              <Text mb="18px" textAlign={["justify", ""]}>
                Let us celebrate the spirit of womanhood. Sharpen your skills by
                joining the competitions and cheering each other on. Discover
                your power to impact.
              </Text>
            </Flex>
            <Box mt={["0", "60px"]}>
              <ButtonD />
            </Box>
          </Box>
          <Image
            src="vWom.png"
            w={["178px"]}
            h={["192px"]}
            mt={["-100px"]}
            right={["550px"]}
            pos="absolute"
          />
          <Image
            src="college.png"
            w={["470px"]}
            h={["548px"]}
            right={["100px"]}
            pos="absolute"
            mt={["-100px"]}
          />
        </Flex>
      </Box>
    </Flex>
  );
}
