import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  VStack,
  Divider,
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
  Td,
  
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import Comp from "./Comp";





export default function AgeGroup() {
  const imageSize = { base: "100px", md: "120px" };

  return (
  <>
    <Flex direction="column" alignItems="center" m="2rem" >
      <Heading
        fontSize={{ base: "2rem", md: "2.6rem" }}
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
      >
        Age Group
      </Heading>
      <Text m="8px" ml="0px" fontSize="1.3rem">
        This event welcomes women of all ages, divided into three groups:
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        mt="1rem"
        flexWrap="wrap"
        gap="1.4rem"
        w={["90vw", "50vw"]}
        m="auto"
        
      >
        {/* ekkada e three cards middle la space reduce cheyi athe */}
        {/* Card 1 */}
        <Box p="1rem" mx={["20px",""]} ml={["-2px",""]} bg="white" borderRadius="12px" mt="18px"boxShadow="md" >
        <VStack  align="center" mb={{ base: "1rem", md: "0" }} >
          <Image
            src="card1.png"
            alt="Age Group 1"
            boxSize={imageSize}
            p="1rem"
            objectFit="contain"
            borderRadius="full"
            boxShadow="md"
           
          />
          <Text mt="4px" fontSize="1rem" fontWeight="600">
            {" "}
            Teen Dreamers{" "}
          </Text>
          <Text>(Under 20)</Text>
         
        </VStack>
        </Box>

        {/* Card 2 */}
        <Box p="1rem"  mx={["20px",""]} ml={["-2px",""]} bg="white"borderRadius="12px" mt="18px"boxShadow="md">
        <VStack align="center" mb={{ base: "1rem", md: "0" }}>
          <Image
            src="card2.png"
            alt="Age Group 2"
            boxSize={imageSize}
            p="1rem"
            objectFit="contain"
            borderRadius="full"
            boxShadow="md"
          />
          <Text mt="4px" fontSize="1rem" fontWeight="600">
            {" "}
            Rising Stars{" "}
          </Text>
          <Text>(20-30)</Text>
        </VStack>
        </Box>

        {/* Card 3 */}
        <Box  p="1rem"  mx={["20px",""]} ml={["-2px",""]} bg="white" borderRadius="12px" mt="18px" boxShadow="md">
        <VStack align="center">
          <Image
            src="card3.png"
            alt="Age Group 3"
            boxSize={imageSize}
            p="1rem"
            objectFit="contain"
            borderRadius="full"
            boxShadow="md"
          />
          <Text mt="4px" fontSize="1rem" fontWeight="600">
            {" "}
            Seasoned{" "}
          </Text>
          <Text>Leaders (30+)</Text>
        </VStack>
        </Box>
      </Flex>

      <Text m="1rem" ml="0px" fontSize="1.3rem">
        No matter your age, there’s always something new to discover.
      </Text>
    

      <VStack mt="1.5rem" pt={["20px"]}>
        <Heading
          fontSize={{ base: "2rem", md: "2.6rem" }}
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
        >
          Event Timings
        </Heading>
        <Text m="8px" ml="0px" fontSize="1.3rem">
          This event welcomes women of all ages, divided into three groups:
        </Text>
      </VStack>

      <VStack mt="1.5rem" >
        <Heading
          fontSize={{ base: "2rem", md: "2.6rem" }}
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
        >
          Timings of Event
        </Heading>
        {/* blow timeings ni kuda table la rasyi */}
        <TableContainer>
          <Table variant="simple" w={["30vw"]}>
            <Thead>
              <Tr>
                <Th>Timings</Th>
                <Th>Event</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>10:00am - 01:00pm</Td>
                <Td>Competitions</Td>
              </Tr>
              <Tr>
                <Td>01:00pm - 02:00pm</Td>
                <Td>Lunch Break</Td>
              </Tr>
              <Tr>
                <Td>02:00pm - 04:30pm</Td>
                <Td>Competitions</Td>
              </Tr>
              <Tr>
                <Td>04:30pm - 05:00pm</Td>
                <Td>Break</Td>
              </Tr>
              <Tr>
                <Td>05:00pm - 07:00pm</Td>
                <Td>Interactive Session</Td>
              </Tr>
              <Tr>
                <Td>07:00pm - 09:00pm</Td>
                <Td>Live Performances</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
      <Divider />
<Comp/>
    </Flex>
  

    </>
  );
}
