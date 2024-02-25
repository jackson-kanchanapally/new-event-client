import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
export default function ButtonD() {
  return (
    <Flex
      bg="yellow.500"
      h={["60px"]}
      w={["180px"]}
      mt="30px"
      fontSize="15px"
      color="black"
      alignItems="center"
      rounded="5px"
    >
      <Box
        fontSize={["25px"]}
        bg="yellow.600"
        w={["32px"]}
        h="100%"
        pt={["8px"]}
        pl={["4px"]}
        fontWeight={["bold"]}
        borderWidth="0px"
        borderRadius="lg"
        style={{
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        +
      </Box>
      <Box fontWeight="semibold" ml={["10px"]}>
        DISCOVER MORE
      </Box>
    </Flex>
  );
}
