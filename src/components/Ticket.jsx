import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import Carosel from "./Carosel";
import { Link } from "react-router-dom";
export default function Ticket() {
  return (
    <Flex direction="column">
      <Box
        w="100vw"
        h={["60vh", "80vh"]}
        backgroundImage="url('bg3-1.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        color="black"
      >
        <Flex
          alignItems="center"
          w="100vw"
          h="64vh"
          justifyContent="center"
          direction="column"
          mt={["", "70px"]}
        >
          <Text color="black" fontSize={["", "28px"]} >
            Friday, March 8th
          </Text>
          <Heading
            fontSize={["6xl", "6xl"]}
            mb="5"
            textAlign="center"
            px={["40px", ""]}
            color="black" 
           
          >
            Women's Day 2024
          </Heading>
          <Link to="/register">
            <Button
             
              h="45px"
              w={["135px"]}
              bg="black"
              py="2px"
              color="white"
              _hover={{
                bg: "white",
                color: "black",
              }}
            >
              Register Now
            </Button>
          </Link>
        </Flex>
        <Box mt={["-100px", "-30px"]}>
          <Carosel />
        </Box>
      </Box>
    </Flex>
  );
}
