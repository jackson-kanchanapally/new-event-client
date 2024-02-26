import { Flex, Heading, Text, Box,useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function AboutWomen() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
      direction="column"
      bg="white"
      h="120vh"
     
      color="black"
      alignItems="center"
    >
      <Box mt={isLargerThan800?"8%":"16%"} w={isLargerThan800?"50vw":"90vw"} textAlign={"center"} >
        <Heading textAlign="center" m="auto" w={!isLargerThan800?"90vw":"40vw"}>
          WOMEN'S RESILIENCE IN RADIANCE
        </Heading>
        <Text mt={["20px"]} fontSize={!isLargerThan800?"16px":"20px"} >
          From shaping societies,nurturing families,contributing in various
          fields,
          <br /> Womenhood is about strength,resilience, and navigating life
          with grace.
        </Text>
      </Box>
      <Box mt={!isLargerThan800?"8%":"4%"} w={!isLargerThan800?"90vw":"50vw"} textAlign={"center"} >
        <Heading textAlign="center" m="auto" w={!isLargerThan800?"90vw":"40vw"} fontWeight="500">
          LET'S CELEBRATE THE ESSESNCE OF
        </Heading>
        <Heading textAlign="center" m="auto" w={!isLargerThan800?"90vw":"40vw"}>
          WOMENHOOD.
        </Heading>
        <Text mt={["20px"]} fontSize={!isLargerThan800?"16px":"20px"}>
          This Women's Day honours women's strength, resilience, and
          achievements.
          <br /> Women, being our cute daughters, sweet sisters, loving wives,
          <br /> and adorable mothers, are the source of immense strength.
          <br />
          <br />
          Acknowledging all the Women Sachi Media brings to you <br />
          'Ms. Vs Mrs. Event' at Chennai on March 8, 9, and 10.
          <br />
          <br /> A Grand 3 Day event with a sense of magic, love, and support
          for all the magnificent women. Make your valuable presence and make
          this Women's Day event memorable.
          <br />
          <br /> Let us celebrate the spirit of womanhood and make this event a
          huge success.
        </Text>
      </Box>
    </Flex>
  );
}
