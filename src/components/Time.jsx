import { Box, Text } from "@chakra-ui/react";
import React, { useState, useEffect} from "react";
export default function Time({ d, val }) {

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
      hours: Math.floor(
        (differenceInTime % (1000 * 3600 * 24)) / (1000 * 3600)
      ),
      minutes: Math.floor((differenceInTime % (1000 * 3600)) / (1000 * 60)),
      seconds: Math.floor((differenceInTime % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <Box>
      <Text px={["10px", "30px"]} color="white" fontSize="15px">
        {d}
      </Text>
      <Text
        px={["10px", "30px"]}
        fontSize="30px"
        fontWeight="bold"
        color="white"
        textAlign="center"
      >
        {timeRemaining[val]}
      </Text>
    </Box>
  );
}
