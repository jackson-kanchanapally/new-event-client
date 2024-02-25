import { Box, Circle, Flex, Heading,  Text } from "@chakra-ui/react";
import React from "react";
import ButtonD from "./Button";
export default function AboutUs() {
  return (
    <Flex
      pb={["35px"]}
      mt={["85px"]}
      // justifyContent="center"
      alignItems="center"
      direction="column"
      ml={["15px", "0"]}
      h={["110vh","100vh"]}
      w={["90vw", "100vw"]}
    >
      <Box>
        <Heading
          textAlign="center"
          fontSize={["19px"]}
          color="yellow.500"
          letterSpacing="0.2em"
          fontWeight=""
        >
          SACHI EVENTS
        </Heading>
        <Box fontSize={["16px","22px"]} mt={["15px"]} textAlign={["center"]}>
          <Text color="white">
            Turn your dream events into a reality with Sachi.
          </Text>
          <Text color="white">
            Whether you envision an indoor or outdoor celebration,
          </Text>
          <Text color="white">
            We bring your vision to life, allowing you to relax and savour the
            occasion.
          </Text>
          <Flex
            mt={["20px", "65px"]}
            ml={["15%", "0"]}
            justifyContent={["", "space-between"]}
            alignItems={["center", ""]}
            direction={["column", "row"]}
            w={["65vw"]}
          >
            <Flex direction={["column"]} alignItems="center" w={["90vw","26%"]}>
              <Circle
                bg="#ffa800"
                w={["170px"]}
                h={["170px"]}
                fontSize={["28px"]}
                color="black"
                mt={["20px",""]}
                p="7"
                fontWeight="500"
              >
                OUR VISION
              </Circle>
              <Text mt={["10px", "20px"]} fontSize={["15px","20px"]}>
                To redefine the industry by architecting captivating events that
                inspire.
              </Text>
            </Flex>
            <Flex direction={["column"]} alignItems="center" w={["90vw","26%"]}>
              <Circle
               bg="#ffa800"
               w={["170px"]}
               h={["170px"]}
               fontSize={["28px"]}
               color="black"
               p="7"
               mt={["20px",""]}
               fontWeight="500"
              >
                OUR MISSION
              </Circle>
              <Text mt={["10px", "20px"]} fontSize={["15px","20px"]}>
                To foster positive change in society through exceptional events.
              </Text>
            </Flex>
            <Flex direction={["column"]} alignItems="center" w={["90vw","26%"]}>
              <Circle
                bg="#ffa800"
                w={["170px"]}
                h={["170px"]}
                fontSize={["28px"]}
                color="black"
                p="7"
                mt={["20px",""]}
                fontWeight="500"
              >
                OUR WAY
              </Circle>
              <Text mt={["10px", "20px"]} fontSize={["15px","20px"]}>
                Experiences Designed for Today's Clientele
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box mt={["54px","170px"]}>
        <ButtonD />
      </Box>
    </Flex>
  );
}
