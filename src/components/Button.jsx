import React from "react";
import { Box, Circle, Flex } from "@chakra-ui/react";
export default function ButtonD() {
  return (
    <Flex
      h={["50px", "60px"]}
      w={["180px", "230px"]}
      mt="30px"
      bg="
    #ffa800"
      borderWidth="0px"
      borderRadius="lg"
      style={{
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px",
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <Circle
        fontSize={["25px"]}
        bg="#D98F00"
        w={["50px", "60px"]}
        h={["50px", "60px"]}
        textAlign="center"
        rounded="100%"
        fontWeight={["bold"]}
        color="black"
        pb={["4px"]}
      >
        +
      </Circle>
      <Flex
        bg="
      #ffa800"
        fontSize="15px"
        color="black"
        alignItems="center"
        rounded="5px"
      >
        <Box
          ml={["18px", "25px"]}
          fontFamily="oswald"
          fontSize={["16px", "18px"]}
        >
          DISCOVER MORE
        </Box>
      </Flex>
    </Flex>
  );
}
