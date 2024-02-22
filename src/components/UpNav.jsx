import React, { useState, useEffect } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function UpNav() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const today = new Date();
    const march8th = new Date(today.getFullYear(), 2, 8);

    if (
      today.getMonth() > 2 ||
      (today.getMonth() === 2 && today.getDate() > 8)
    ) {
      march8th.setFullYear(today.getFullYear() + 1);
    }

    const differenceInTime = march8th.getTime() - today.getTime();

    return {
      days: Math.floor(differenceInTime / (1000 * 3600 * 24)),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <Flex
      bg="#f0f0f1"
      w="100vw"
      h="6vh"
      alignItems="center"
      px={["150px"]}
      fontSize="15px"
      color="black"
    >
      <Text>Hey! The Show is Starting in {timeRemaining.days} Days.</Text>
      <Spacer />
    <Link to="/contactUs">
    <Text
        transition="transform 0.3s ease"
        _hover={{ transform: "translateX(-5px)" }}
      >
        Contact Us Now!
      </Text>
    </Link>
      <Box mx="5px" fontSize={"13px"}>
        <FaArrowRight />
      </Box>
    </Flex>
  );
}
