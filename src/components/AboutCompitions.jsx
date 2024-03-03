import {
  Box,
  Circle,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useMediaQuery,
  Stack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import ButtonD from "./Button";

export default function AboutUs() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
      pb={["35px"]}
      bg="#1B1F27"
      alignItems="center"
      direction="column"
      ml={["15px", "0"]}
      justifyContent="center"
      h={!isLargerThan800 ? "135.5vh" : "1090px"}
      w={["90vw", "100vw"]}
    >
      <Box>
        <Flex alignItems="center" justifyContent="center">
          <HStack>
            <VStack>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt="5.8rem"
              >
                <Text
                  color="white"
                  fontFamily="Oswald"
                  fontSize="29.99px"
                  fontWeight="600"
                >
                  Title Sponsor
                </Text>
                <Text color="white" fontFamily="Oswald" fontSize="29.99px">
                  Deliverables
                </Text>
              </Box>
              <Stack direction="column" align="center">
                <Circle w="284.6px" h="284.6px" bg="#FFA800"></Circle>
                <Box
                  h={600.54}
                  w="284.6px"
                  bg="#FFA800"
                  position="relative"
                  top="-142.3px"
                  borderRadius="0 0 20px 20px"
                  textAlign="center"
                  fontSize="16px"
                  fontFamily="Oswald"
                  display="flex"
                  flexDirection="column"
                  justifyContent="cwent"
                  alignItems="center"
                >
                  <Box mt="-60px">
                    <UnorderedList
                      textAlign="left"
                      color="black"
                      px="5px"
                      fontWeight="440"
                      styleType="none"
                      fontSize="15.5px"
                      textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                    >
                      <ListItem>
                        &bull; The title of the event will be <br />
                        (Title Sponsor's) Ms & Mrs.
                      </ListItem>
                      <ListItem>
                        &bull; Checked backdrop for Press Meet
                      </ListItem>
                      <ListItem>
                        &bull; One Speaker will address and promote your company
                        during the press meet
                      </ListItem>
                      <ListItem>
                        &bull; Promotions at radio from 22nd February to 10th
                        March as a Title Sponsor
                      </ListItem>
                      <ListItem>
                        &bull; Ten Banners are placed in and <br /> around the
                        stadium
                      </ListItem>
                      <ListItem>
                        &bull; Will address at the lighting of lamp while
                        inaugurating the event with dignitaries
                      </ListItem>
                      <ListItem>
                        &bull; Jingles will be played at each and every
                        competition and at every break
                      </ListItem>
                      <ListItem>
                        &bull; One speaker at an interactive session to address
                        about the growth and success
                        <br /> of your company
                      </ListItem>
                      <ListItem>
                        &bull; Quick Rapid-Fire questions to the participants
                        about the upcoming projects of your company to promote
                        post the event
                      </ListItem>

                      <ListItem>
                        &bull; As a Title Sponsor your Logo will be highlighted
                        on top in website
                      </ListItem>
                      <ListItem>
                        &bull; Your Logo will be displayed on the LED located at
                        the centre of the stage
                      </ListItem>
                      <ListItem>&bull; Stall will be allocated</ListItem>
                      <ListItem>
                        &bull; Interview on Radio FM before the Event
                      </ListItem>
                      <ListItem>
                        &bull; Checked backdrop for selfie spot
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </Stack>
            </VStack>

            <VStack>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  color="white"
                  fontFamily="Oswald"
                  fontSize="29.99px"
                  fontWeight="600"
                >
                  Co-Sponsor
                </Text>
                <Text color="white" fontFamily="Oswald" fontSize="29.99px">
                  Deliverables
                </Text>
              </Box>
              <Stack direction="column" align="center">
                <Circle w="284.6px" h="284.6px" bg="#FFA800"></Circle>
                <Box
                  h={500.54}
                  w="284.6px"
                  bg="#FFA800"
                  position="relative"
                  top="-142.3px"
                  borderRadius="0 0 20px 20px"
                  textAlign="center"
                  fontSize="16px"
                  fontFamily="Oswald"
                  display="flex"
                  flexDirection="column"
                  justifyContent="cwent"
                  alignItems="center"
                >
                  <Box mt="-60px">
                    <UnorderedList
                      textAlign="left"
                      color="black"
                      px="0px"
                      fontWeight="440"
                      styleType="none"
                      fontSize="15.5px"
                      mr="25px"
                      textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                    >
                      <ListItem>
                        &bull; Logo integrated for all the promotions
                      </ListItem>
                      <ListItem>
                        &bull; Promotions at Radio from <br />
                        25th Feb to 10th March as Co-Sponsor
                      </ListItem>
                      <ListItem>
                        &bull; Five Banners are placed in and around <br />
                        the stadium
                      </ListItem>
                      <ListItem>
                        &bull; For a few competitions and at
                        <br /> every break, Jingles will be played
                      </ListItem>
                      <ListItem>
                        &bull; During an interactive session,
                        <br /> One Speaker will address about the growth
                        <br /> of the company and its achievements
                      </ListItem>
                      <ListItem>
                        &bull; As a co-sponsor, your logo will
                        <br /> be displayed on the website
                      </ListItem>
                      <ListItem>
                        &bull; Your Logo will be displayed on
                        <br /> the LED located at the centre of the stage
                      </ListItem>
                      <ListItem>&bull; Stall will be allocated</ListItem>
                      <ListItem>
                        &bull; Checked backdrop for Selfie Spot
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </Stack>
            </VStack>

            <VStack>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  color="white"
                  fontFamily="Oswald"
                  fontSize="29.99px"
                  fontWeight="600"
                >
                  Powered By
                </Text>
                <Text color="white" fontFamily="Oswald" fontSize="29.99px">
                  Deliverables
                </Text>
              </Box>
              <Stack direction="column" align="center">
                <Circle w="284.6px" h="284.6px" bg="#FFA800"></Circle>
                <Box
                  h={500.54}
                  w="284.6px"
                  bg="#FFA800"
                  position="relative"
                  top="-142.3px"
                  borderRadius="0 0 20px 20px"
                  textAlign="center"
                  fontSize="16px"
                  fontFamily="Oswald"
                  display="flex"
                  flexDirection="column"
                  justifyContent="cwent"
                  alignItems="center"
                >
                  <Box mt="-60px">
                    <UnorderedList
                      textAlign="left"
                      color="black"
                      px="5px"
                      fontWeight="440"
                      styleType="none"
                      fontSize="15.5px"
                      mr="25px"
                      textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                    >
                      <ListItem>
                        &bull; Logo integrated for all the promotions
                      </ListItem>
                      <ListItem>
                        &bull; Promotions at Radio from 25th Feb to 10th March
                        as Powered By
                      </ListItem>
                      <ListItem>
                        &bull; Three Banners are placed in and around the
                        stadium
                      </ListItem>
                      <ListItem>
                        &bull; Jingle's will be placed for any two Competitions
                        and at every breaks
                      </ListItem>
                      <ListItem>
                        &bull; One speaker at an interactive session to address
                        about the growth and success of your company
                      </ListItem>
                      <ListItem>
                        &bull; Your Logo will be displayed on the LED located at
                        the centre of the stage
                      </ListItem>
                      <ListItem>&bull; Stall will be allocated</ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </Stack>
            </VStack>

            <VStack>
              <Box
                mt="5.6rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  color="white"
                  fontFamily="Oswald"
                  fontSize="29.99px"
                  fontWeight="600"
                >
                  In-Association
                </Text>
                <Text color="white" fontFamily="Oswald" fontSize="29.99px">
                  Deliverables
                </Text>
              </Box>
              <Stack direction="column" align="center">
                <Circle w="284.6px" h="284.6px" bg="#FFA800"></Circle>
                <Box
                  h={500.54}
                  w="284.6px"
                  bg="#FFA800"
                  position="relative"
                  top="-142.3px"
                  borderRadius="0 0 20px 20px"
                  textAlign="center"
                  fontSize="16px"
                  fontFamily="Oswald"
                  display="flex"
                  flexDirection="column"
                  justifyContent="cwent"
                  alignItems="center"
                >
                  <Box mt="-60px">
                    <UnorderedList
                      textAlign="left"
                      color="black"
                      px="5px"
                      fontWeight="440"
                      styleType="none"
                      fontSize="15.5px"
                      mr="25px"
                      textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                    >
                      <ListItem>
                        &bull; Logo integrated for all the promotions
                      </ListItem>
                      <ListItem>
                        &bull; Promotions at Radio FM from 25th Mar to 10th
                        March as an Associated Sponsor
                      </ListItem>
                      <ListItem>&bull; 2 Banner's in the stadium</ListItem>
                      <ListItem>
                        &bull; Jingle's will be played in between the events for
                        2 Times
                      </ListItem>
                      <ListItem>
                        &bull; Your Logo will be displayed on the website as an
                        Associated Sponsor
                      </ListItem>
                      <ListItem>
                        &bull; Your Logo will be displayed on the LED located at
                        the centre of the stage
                      </ListItem>
                      <ListItem>&bull; Stall will be allocated</ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </Stack>
              <ButtonD />
            </VStack>
          </HStack>
        </Flex>
      </Box>
      <Divider borderWidth="4px" color="white" mt="3rem" />
    </Flex>
  );
}
