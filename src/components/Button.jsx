import React from "react";
import { Box, Flex } from "@chakra-ui/react";
export default function ButtonD() {
  return (
    <Flex
      bg="
      #ffa800"
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
        bg="
        #d98f00"
        w={["32px"]}
        h="100%"
        pt={["8px"]}
        pl={["4px"]}
        fontWeight={["bold"]}
        borderWidth="0px"
        borderRadius="lg"
        style={{
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        +
      </Box>
      <Box fontWeight="600" ml={["10px"]}>
        DISCOVER MORE
      </Box>
    </Flex>
  );
}
