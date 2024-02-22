// AboutCompetitions.js
import { Text, VStack, Box } from "@chakra-ui/react";
import React from "react";
import AgeGroup from "./AgeGroup";

// Replace 'background.jpg' with your desired image URL
const backgroundImage = "e.jpg";

export default function AboutCompetitions() {
  return (
    <>
      <Box
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        height="100vh"
        display="flex"
        justifyContent="flex-end" // Align to the right
        alignItems="center"
        filter="brightness(0.8) saturate(120%)"
        color="#1F2544"
        textAlign={{ base: "center", md: "right" }} // Center on mobile, right on desktop
        p={{ base: "2rem", md: "4rem" }} // Adjust padding on mobile
      >
        <VStack align={{ base: "center", md: "flex-end" }} w={{ base: "100%", md: "50%" }}>
          {/* Adjusted font sizes for mobile view */}
          <Text
            fontSize={{ base: "4rem", md: "12rem" }}
            mb={{ base: "-0.5rem", md: "-1.3rem" }}
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            color="#1F2544"
            textAlign={{ base: "center", md: "right" }}
            mr={{ base: 0, md: '1.8rem' }}
          >
            Exciting
          </Text>

          <Text
            fontSize={{ base: "2rem", md: "2.8rem" }}
            fontWeight="bold"
            color="#1F2544"
            textAlign={{ base: "center", md: "right" }}
            mr={{ base: 0, md: '3.5rem' }}
            whiteSpace={{base:"wrap",md:"nowrap"}} // Prevent text from breaking
          >
            Competitions on <Text as="span">Day 1 and Day 2</Text>
          </Text>

          <Text
            fontSize={{ base: "1rem", md: "1.6rem" }}
            mt={{ base: "0.5rem", md: "1rem" }}
            fontFamily="Poppins, sans-serif"
            fontWeight="500"
            color="#1F2544"
            textAlign={{ base: "center", md: "left" }} // Adjusted to 'right' for normal view
            mr={{ base: 0, md: '3.5rem' }} // Adjusted margin to match the one used above
            w={{ base: "100%", md: "700px" }} // Adjusted width for mobile
          >
            The finals are scheduled for Sunday, March 10th. The prize distribution ceremony will be held in the evening following the Event’s conclusion.
          </Text>
        </VStack>
      </Box>
      <AgeGroup />
    </>
  );
}
