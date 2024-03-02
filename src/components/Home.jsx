import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Ticket from "./Ticket";
import SachiEvent from "./SachiEvent";
import AboutUs from "./AboutUs";
import AboutWomen from "./AboutWomen";

export default function Home() {
  return (
    <Flex direction="column" w="100w">
      <Box>
        <Ticket />
        <Box>
          <SachiEvent />
          {/* <JoinUs/> */}
          <AboutUs />
          <AboutWomen />
        </Box>
      </Box>
    </Flex>
  );
}
