import {
  Box,
  Circle,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import ButtonD from "./Button";
export default function AboutUs() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
      pb={["35px"]}
      mt={["40px","85px"]}
      alignItems="center"
      direction="column"
      // ml={["5px", "0"]}
      bg="11161E"
      h={!isLargerThan800 ? "115.5vh" : "75vh"}
      w={["100vw", "100vw"]}
      position="relative"
    >
      <Box>
        <Heading
          textAlign="center"
          fontSize={["36px"]}
          color="#FFA800"
          // letterSpacing="0.2em"
          fontFamily="oswald"
          fontWeight=""
        >
          Sachi Events
        </Heading>
        <Box
          fontSize={!isLargerThan800 ? "16px" : "22px"}
          mt={["15px"]}
          textAlign={["center"]}
        >
          <Flex
            mt={!isLargerThan800 ? "20px" : "65px"}
            ml={!isLargerThan800 ? "0" : "0"}
            justifyContent={!isLargerThan800 ? "" : "space-between"}
            alignItems={!isLargerThan800 ? "center" : ""}
            direction={!isLargerThan800 ? "column" : "row"}
            w={["65vw"]}
          >
            <Flex
              direction={["column"]}
              alignItems="center"
              w={!isLargerThan800 ? "90vw" : "26%"}
            >
              <Circle
                bg="#ffa800"
                w={["169px"]}
                h={["169px"]}
                fontSize={["32px"]}
                color="black"
                mt={["20px", "0"]}
                p="7"
                fontWeight="500"
                fontFamily="oswald"
              >
                Our Vision
              </Circle>
              <Text
                mt={!isLargerThan800 ? "10px" : "20px"}
                fontSize={!isLargerThan800 ? "15px" : "20px"}
                fontFamily="oswald"
                color="white"
                w={["215px"]}
              >
                To redefine the industry by architecting captivating events that
                inspire.
              </Text>
            </Flex>
            <Flex
              direction={["column"]}
              alignItems="center"
              w={!isLargerThan800 ? "90vw" : "26%"}
            >
              <Circle
                bg="#ffa800"
                w={["169px"]}
                h={["169px"]}
                fontSize={["32px"]}
                color="black"
                p="7"
                mt={!isLargerThan800 ? "20px" : ""}
                fontWeight="500"
                fontFamily="oswald"
              >
                Our Mission
              </Circle>
              <Text
                mt={!isLargerThan800 ? "10px" : "20px"}
                fontSize={!isLargerThan800 ? "15px" : "20px"}
                fontFamily="oswald"
                w={["215px"]}
                color="white"
              >
                To foster positive change in society through exceptional events.
              </Text>
            </Flex>
            <Flex
              direction={["column"]}
              alignItems="center"
              w={!isLargerThan800 ? "90vw" : "26%"}
            >
              <Circle
                bg="#ffa800"
                w={["169px"]}
                h={["169px"]}
                fontSize={["32px"]}
                color="black"
                p="9"
                mt={!isLargerThan800 ? "20px" : ""}
                fontWeight="500"
                fontFamily="oswald"
              >
                Our Way
              </Circle>
              <Text
                mt={!isLargerThan800 ? "10px" : "20px"}
                fontSize={!isLargerThan800 ? "15px" : "20px"}
                fontFamily="oswald"
                color="white"
                w={["215px"]}
              >
                Experiences Designed for Today's Clientele
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box pos="absolute" bottom="-26">
        <ButtonD />
      </Box>
    </Flex>
  );
}
