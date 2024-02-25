import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";

const Comp = () => {

  const competitionData = [
    {
      time: "10am to 11am",
      competitions: [
        "Dance (Below 30)",
        "Sketching (Below 20)",
        "Rangoli (Above 20)",
      ],
    },
    {
      time: "11am to 12pm",
      competitions: [
        "Lemon and spoon (30 and above)",
        "Tennikoit (Any age group, Ms vs Mrs)",
        "Musical chair (Any age group, Ms vs Mrs)",
      ],
    },
    { time: "12pm to 1pm", competitions: ["Quiz (Any age group, Ms vs Mrs)"] },
    { time: "1pm to 2pm", competitions: ["Lunch break"] },
    {
      time: "2pm to 3pm",
      competitions: ["Anthakshari ( Any age group, Ms vs Mrs)"],
    },
    { time: "3pm to 4pm", competitions: ["Kho-kho (Any age group Mr vs Mrs)"] },
    {
      time: "4pm to 4:30pm",
      competitions: ["Blindfold ( Mr vs Mrs)", "Ropegame"],
    },
  ];

  const tableBorderColor = "black";

  return (
    <>
      <Box m="2rem" overflowX="auto">
        {/* Additional content can be placed here */}
      </Box>
      <Box m="2rem" overflowX="auto">
        <Table
          variant="simple"
          colorScheme="purple"
          borderWidth="2px"
          borderRadius="md"
          borderColor={tableBorderColor}
          size={["sm", "md", "lg"]}
          w={["90vw", "40vw"]}
          responsive
        >
          <Thead bg={tableBorderColor}>
            <Tr>
              <Th color="white" fontSize={["0.8rem", "1rem"]}>
                Timing
              </Th>
              <Th color="white" fontSize={["0.8rem", "1rem"]}>
                Competitions and Age groups
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {competitionData.map(({ time, competitions }, index) => (
              <Tr key={index}>
                <Td borderWidth="1px" borderColor={tableBorderColor}>
                  {time}
                </Td>
                <Td borderWidth="1px" borderColor={tableBorderColor}>
                  {competitions.map((competition, i) => (
                    <div
                      key={i}
                      style={{ marginBottom: "8px", fontSize: "1rem" }}
                    >
                      {competition}
                    </div>
                  ))}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Comp;
