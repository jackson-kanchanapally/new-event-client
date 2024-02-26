import { HStack, Box, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <>
      <HStack h="519px" w="100%" bg="#1B1F27">
        <Box ml="17rem" alignItems="flex-start" spacing={4} w="300px" >
          <Image
            src="sachi_logo.png"
            alt="Your Image Alt Text"
            w="103px"
            h="137px"
            mb="10px"
          />
          <Box
            w="233px"
            padding="0"
            h="80px"
            color="white"
            fontSize="14px"
            fontFamily="oswald"
            mb="12px"
          >
            For us, events are not just moments; they are opportunities for
            transformation. We believe in the power of gatherings to inspire,
            educate, and connect people.
          </Box>
          <Box
            color="white"
            fontSize="14px"
            fontFamily="oswald"
         
            
          >
            Join us in creating
          </Box>
          <Box color="white" fontSize="14px" fontFamily="oswald" >
            significant memories.
          </Box>
        </Box>
        <Box color="white" h="200px" w="200px" alignItems="left" mb="3.7rem" >
        <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
            About Us
          </Text>
          <VStack spacing={4} alignItems="left">
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Our Vision
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Our Mission
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Our Way
            </Text>
            </VStack>
        </Box>

        <Box color="white" h="200px" w="200px" alignItems="left"mb="3.7rem" >
        <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
            Competitions
          </Text>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Get Started Us
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Contact Us
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Needs Helps?
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Join With Us
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Ask Question
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Newsletters
            </Text>
          </VStack>
        </Box>

        <Box color="white" h="200px" w="200px" alignItems="left"mb="3.7rem" >
        <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
            Quick Links
          </Text>
          <VStack spacing={4} alignItems="left">
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Home
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              About Us
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Competitions
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Registration
            </Text>
            <Text fontSize="16px" fontFamily="oswald" color="white">
              Contact Us
            </Text>
            </VStack>
        </Box>

        <Box color="white" h="200px" w="200px" alignItems="left"mb="3.7rem" mr="17rem" >
        <Text fontSize="18px" fontFamily="oswald" color="white" mb="18px">
        Instagram
          </Text>
          <VStack spacing={4} alignItems="left" mb="10px">
            <HStack spacing={2} >
            <Image
            src="post1.png"
            alt="Your Image Alt Text"
            w="83px"
            h="83px"
           
          />
            <Image
            src="post2.png"
            alt="Your Image Alt Text"
            w="83px"
            h="83px"
           
          />
            <Image
            src="post3.png"
            alt="Your Image Alt Text"
            w="83px"
            h="83px"
           
          />
            </HStack>
            </VStack>
            <VStack spacing={4} alignItems="left">
            <HStack spacing={2} >
            <Image
            src="post1.png"
            alt="Your Image Alt Text"
            w="83px"
            h="83px"
           
          />
            <Image
            src="yello_post.png"
            alt="Your Image Alt Text"
            w="83px"
            h="83px"
           
          />
            <Image
            src="post3.png"
            alt="Your Image Alt Text"
            w="83px"
            h="83px"
           
          />
            </HStack>
            </VStack>
        
        </Box>


      

      </HStack>

      <HStack
        spacing={2}
        h="80px"
        bg="#11161E"
        justify="space-between"
        align="center"
        ml="17rem"
        mr="17rem"
      >
        <Box color="white" fontSize="14px" fontFamily="oswald">
          Copyright by
          <Text as="span" color="#FFA800">
            {" "}
            Sachi Events.
          </Text>{" "}
          All Rights Reserved
        </Box>
        <HStack
          color="white"
          spacing={4}
          justify="space-between"
          align="center"
          fontSize="14px"
          fontFamily="oswald"
        >
          <Box>Privacy</Box>
          <Box>Terms & Conditions</Box>
        </HStack>
      </HStack>
    </>
  );
}
