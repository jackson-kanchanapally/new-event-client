import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
export default function AboutUs() {
  return (
    <Flex
      pb={["35px"]}
      pt={["35px"]}
      bgGradient='linear(to-b, purple.400, purple.200, purple.50)'
      justifyContent="center"
     
    >
      <Box
        w={["", "55vw"]}
        ml={["40px", "15px"]}
        mr={["40px", "40px"]}
        color="black"
      >
        <Heading textAlign="center" fontSize="40px">
          About Sachi Events
        </Heading>
        <Box w={["", "60vw"]} mt={["40px"]} textAlign={["justify", ""]}>
          <Text fontSize="20px">
            Turn your dream events into a reality with Sachi. Whether you
            envision an indoor or outdoor celebration, we bring your vision to
            life, allowing you to relax and savour the occasion.
          </Text>
          <Box mt={["20px", "35px"]} ml={["", "30px"]}>
            <Flex mb={["30px"]}>
              <Flex
                w={["100px", "70px"]}
                h={["55px", "70px"]}
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                bg="white"
                boxShadow="lg"
                mt={["10px", ""]}
              >
                <Image src="vision.png" alt="Vision" w={["50px", "60px"]} />
              </Flex>
              <Box ml={["26px", "20px"]} mt={["", "18px"]}>
                <Text fontWeight="bold" fontSize="18px">
                  Our Vission :
                </Text>
                <Text fontSize="18px">
                  To redefine the industry by architecting captivating events
                  that inspire.
                </Text>
              </Box>
            </Flex>
            <Flex mb={["30px"]}>
              <Flex
                w={["100px", "70px"]}
                h={["60px", "70px"]}
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                bg="white"
                boxShadow="lg"
                mt={["10px", ""]}
              >
                <Image src="mission.png" alt="Mission" w={["50px", "60px"]} />
              </Flex>
              <Box ml={["20px"]} mt={["", "18px"]}>
                <Text fontWeight="bold" fontSize="18px">
                  Our Mission :
                </Text>
                <Text fontSize="18px">
                  To foster positive change in society through exceptional
                  events.
                </Text>
              </Box>
            </Flex>
            <Flex mb={["30px"]}>
              <Flex
                w={["65px", "70px"]}
                h={["65px", "70px"]}
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                bg="white"
                boxShadow="lg"
              >
                <Image src="way.png" alt="Our Way" w={["50px", "60px"]} />
              </Flex>
              <Box ml={["20px"]} mt={["", "10px"]}>
                <Text fontWeight="bold" fontSize="18px">
                  Our Way :
                </Text>
                <Text fontSize="18px">
                  Experiences Designed for Today's Clientele
                </Text>
              </Box>
            </Flex>
          </Box>
          <Text fontSize={["20px"]}>
            For us, events are not just moments but opportunities for
            transformation. We believe in the power of gatherings to inspire,
            educate, and connect people. Join us in creating significant
            memories.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
