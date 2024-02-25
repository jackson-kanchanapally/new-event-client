import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Ticket from "./Ticket";
import SachiEvent from "./SachiEvent";
import JoinUs from "./JoinUs";

export default function Home() {
  return (
    <Flex direction="column" w="100w">
      <Box >
      {/* <Box bgGradient="linear(purple.600 0%, purple.400 35%, purple.300 45%, white 55%)"> */}
      <Ticket />
      <Box pt={["70px","50px"]}>
      <SachiEvent />
        <JoinUs/>
       
      </Box>
      </Box>
    </Flex>
  );
}
