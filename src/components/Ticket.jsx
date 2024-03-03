import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import ButtonD from "./Button";
export default function Ticket() {
  return (
    <Flex direction="column">
      <Box
        w="100vw"
        h={["82vh", "100vh"]}
        backgroundImage="home_banner.png"
        backgroundSize="cover"
        backgroundPosition="center"
        color="white"
        overflowX="hidden"
      >
        <Flex
          w={["90vw", "100vw"]}
          h="64vh"
          justifyContent="center"
          direction="column"
          ml={["5px", "240px"]}
          mt={["50px", "150px"]}
        >
          <Box fontSize={["16px"]} ml="30px" mt="150px">
            <Text color="#FFA800" fontSize={["", "36px"]} fontFamily="oswald">
              Sachi Events present
            </Text>
            <Heading
              fontSize={["6xl", "102px"]}
              color="white"
              fontWeight="500"
              fontFamily="oswald"
              lineHeight={["60px", "100px"]}
            >
              Miss VS Ms
            </Heading>
            <Heading
              fontSize={["4xl", "58px"]}
              color="white"
              fontWeight="500"
              fontFamily="oswald"
            >
              Women's Day 2024
            </Heading>
            <Box mt={["20px"]} color="#B0B0B0">
              <Text fontSize={["16px"]}>
                3 Day FREE Event For this Women's Day For all the Daughters,
              </Text>
              <Text>Mothers,Sisters,Friends, and YOU!</Text>
              <Text color="#FFA800" fontSize={["24px"]}>
                March 8,9,10
              </Text>
              <Text>Live music, Dance & Fun games Await</Text>
              <Text>Exhibition of 200+ Stalls, FREE Entry!</Text>
            </Box>
            <ButtonD />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
