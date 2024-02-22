import {
  Box,
  Stack,
  HStack,
  VStack,
  Image,
  Text,
  Icon,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaFacebookF, FaPinterest, FaGoogle } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <Box  bg="#F3F8FF" color="black"    px={["40px", "148px"]}>
      <Stack
        spacing={{ base: 8, md: 0 }}
        p={{ base: 6, md: 9 }}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        {/* First Box - Flex Start */}
        <HStack spacing={4} justifyContent="flex-start" alignItems="left">
          <VStack spacing={4} alignItems="left">
            <Image
              src="logo.png"
              alt="Company Logo"
              boxSize={{ base: "100px", md: "120px" }}
              objectFit="cover"
            />
            <Box w={{ base: "100%", md: "180px" }} alignContent="left">
              <Text>Turn your dream events into a reality with Sachi.</Text>
            </Box>
          </VStack>
        </HStack>

        {/* Second Box - Center */}
        <HStack spacing={4} justifyContent="left" alignItems="left">
          <VStack spacing={4} alignItems="left">
            <Text fontSize="md" fontWeight="bold">
              Useful Links
            </Text>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/compitions">Competitions</Link>
            <Link to="/eventSchedule">Event Schedule</Link>
            <Link to="/contactUs">Contact us</Link>
          </VStack>
        </HStack>

        {/* Third Box - Flex End */}
        <HStack spacing={4} justifyContent="left" alignItems="left">
          <VStack alignItems="left">
            <Text fontSize="md" fontWeight="bold">
              Subscribe
            </Text>
            <VStack spacing={4} alignItems="left">
              <InputGroup size="lg" mt={4} >
                <Input
                  type="email"
                  placeholder="Your Email"
                  bg="grey.100"
                  color="black"
                 
                />
                <InputRightElement width="8rem">
                  <Button
                    h="2.4rem"
                    bg="black"
                    color="white"
                    size="md"
                    ml="18px"
                 
                    borderRadius="8px"
                  >
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>
            </VStack>
            <Text fontSize="md" fontWeight="bold" mt={4}>
              Social Media
            </Text>
            <HStack spacing={4} mt={6}>
              <Link href="https://www.facebook.com/profile.php?id=61553202830750&mibextid=ZbWKwL">
                <Icon as={FaFacebookF} boxSize={6} />
              </Link>
              <Link href="https://in.pinterest.com/sachievents/?invite_code=a75fddff195e4908b5818d2aedef1cd8&sender=869617146706185539">
                <Icon as={FaPinterest} boxSize={6} />
              </Link>
              <Link href="https://instagram.com/sachi_events_28?igshid=MzMyNGUyNmU2YQ==">
                <Icon as={IoLogoInstagram} boxSize={6} />
              </Link>
              <Link href="https://sachievents.com/">
                <Icon as={FaGoogle} boxSize={6} />
              </Link>
            </HStack>
          </VStack>
        </HStack>
      </Stack>

     
    </Box>
     <Box textAlign="center" p={4} bg="purple.400" w="100%" color="white" px={[0, "148px"]}>
     © 2024 All rights reserved. |{" "}
     <Link href="https://sachievents.com/" fontWeight="bold">
       Sachi events
     </Link>
   </Box>
   </>
  );
};

export default Footer;
