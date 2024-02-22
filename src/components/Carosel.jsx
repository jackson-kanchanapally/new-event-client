import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Carosel() {
  // const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const items = [
    <Image src="about-image.jpg" w="260px" h="180px" />,
    <Image src="event-01.jpg" w="260px" h="180px" />,
    <Image src="event-02.jpg" w="260px" h="180px" />,
    <Image src="event-03.jpg" w="260px" h="180px" />,
    <Image src="event-page-03.jpg" w="260px" h="180px" />,
    <Image src="event-page-01.jpg" w="260px" h="180px" />,
    <Image src="event-page-04.jpg" w="260px" h="180px" />,
  ];

  return (
    <Flex
      height="50px"
      w={["90vw", "75vw"]}
      justifyContent="center"
      alignItems="center"
      ml={["50px","200px"]}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayDirection={2000}
        animationDuration={2000}
        disableDotsControls
        responsive={{ 0: { items: 1 }, 512: { items: 4 }}}
        autoPlay
        disableButtonsControls
        items={items}
      />
    </Flex>
  );
}
