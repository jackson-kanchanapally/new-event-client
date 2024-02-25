import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import ButtonD from "./Button";
export default function Ticket() {
  return (
    <Flex direction="column">
      <Box
        w="100vw"
        h={["100vh", "100vh"]}
        // backgroundImage="url('bg3-1.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        color="white"
      >
        <Flex
          w="100vw"
          h="64vh"
          justifyContent="center"
          direction="column"
          ml={["10px", "240px"]}
          mt={["", "70px"]}
        >
          <Box ml="30px" mt="150px">
            <Text color="yellow.500" fontSize={["", "15px"]} letterSpacing="0.2em">
              SACHI EVENTS PRESENT
            </Text>
            <Heading fontSize={["6xl", "75px"]} color="white" fontWeight="">
              MISS VS MRS
            </Heading>
            <Heading fontSize={["4xl", "50px"]} color="white" fontWeight="thin">
              WOMEN'S DAY 2024
            </Heading>
            <Box mt={["40px"]} color="gray.300">
              <Text>
                3 Day FREE Event For this Women's Day For all the Daughters,
              </Text>
              <Text>Mothers,Sisters,Friends, and YOU!</Text>
              <Text color="yellow.500" fontSize={["22px"]}>
                March 8,9,10
              </Text>
              <Text>Live music, Dance & Fun games Await</Text>
              <Text>Exhibition of 200+ Stalls, FREE Entry!</Text>
            </Box>
          <ButtonD/>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
