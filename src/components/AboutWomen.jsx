import {
  Flex,
  Heading,
  Text,
  Box,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
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
      <Image src="vec.png" pos="absolute" w={["360px","464px"]} left="0" mt={["50%","100px"]} opacity={["35%","100%"]} />
      <Box pos={["relative"]}>
        <Box
          mt={isLargerThan800 ? "8%" : "25%"}
          w={isLargerThan800 ? "50vw" : "90vw"}
          textAlign={"center"}
        >
          <Heading
            textAlign="center"
            m="auto"
            fontFamily="oswald"
            fontSize={["32px"]}
            w={!isLargerThan800 ? "90vw" : "40vw"}
          >
            Women’s Resilience <br /> in Radiance
          </Heading>
          <Text
            mt={["20px"]}
            fontFamily="oswald"
            fontSize={!isLargerThan800 ? "16px" : "20px"}
          >
            From shaping societies,nurturing families,contributing in various
            fields,
            <br /> Womenhood is about strength,resilience, and navigating life
            with grace.
          </Text>
        </Box>
        <Box
          mt={!isLargerThan800 ? "8%" : "4%"}
          w={!isLargerThan800 ? "90vw" : "50vw"}
          textAlign={"center"}
        >
          <Heading
            textAlign="center"
            m="auto"
            w={!isLargerThan800 ? "90vw" : "40vw"}
            fontWeight="300"
            fontFamily="oswald"
          >
            Let’s celebrate the essence of
          </Heading>
          <Heading
            textAlign="center"
            m="auto"
            fontFamily="oswald"
            fontWeight="500"
            w={!isLargerThan800 ? "90vw" : "40vw"}
          >
            Womanhood.
          </Heading>
          <Text
            fontFamily="oswald"
            mt={["20px"]}
            fontSize={!isLargerThan800 ? "16px" : "20px"}
          >
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
            <br /> Let us celebrate the spirit of womanhood and make this event
            a huge success.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
