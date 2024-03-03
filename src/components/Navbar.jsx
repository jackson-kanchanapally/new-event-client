import {
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  Box,
  // Box,
} from "@chakra-ui/react";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      height={["90px"]}
      w={["100%"]}
      alignItems="center"
      pl={["20px", "160px"]}
      justifyContent={["", "center"]}
      bg="transparent"
      borderBottom="1px solid white"
      position="absolute"
      // overflow="hidden"
    >
      <Link to="/">
        <Image src="logo.png" w={["90px"]} mr={["20px"]} />
      </Link>

      {isLargerThan800 ? (
        <>
          <HStack
            spacing={["40px"]}
            mr={["25px"]}
            h="38px"
            color="white"
            fontSize={["16px"]}
          >
            <Flex
              alignItems="center"
              fontWeight="500"
              h="100%"
              borderBottom={pathname === "/" && "2px solid #D69E2E"}
            >
              <Link to="/">
                <Text
                  fontSize={["16px"]}
                  color={pathname === "/" && "yellow.500"}
                >
                  Home
                </Text>
              </Link>
            </Flex>
            <Flex
              alignItems="center"
              h="100%"
              borderBottom={pathname === "/about" && "2px solid #D69E2E"}
              fontWeight="500"
            >
              <Link to="/about">
                <Text color={pathname === "/about" && "yellow.500"}>About</Text>
              </Link>
            </Flex>
            <Flex
              alignItems="center"
              h="100%"
              borderBottom={pathname === "/competition" && "2px solid #D69E2E"}
              fontWeight="500"
            >
              <Link to="/competition">
                <Text color={pathname === "/competition" && "yellow.500"}>
                  Competitions
                </Text>
              </Link>
            </Flex>
            <Flex
              alignItems="center"
              h="100%"
              borderBottom={pathname === "/register" && "2px solid #D69E2E"}
              fontWeight="500"
            >
              <Link to="/register">
                <Text color={pathname === "/register" && "yellow.500"}>
                  Registration
                </Text>
              </Link>
            </Flex>
            <Flex
              alignItems="center"
              h="100%"
              borderBottom={pathname === "/contactUs" && "2px solid #D69E2E"}
              fontWeight="500"
            >
              <Link to="/contactUs">
                <Text color={pathname === "/contactUs" && "yellow.500"}>
                  Contact
                </Text>
              </Link>
            </Flex>
            {/* <Spacer/> */}
          </HStack>
          <Flex ml="250px" color="white">
            <Flex
              direction="column"
              mr="10px"
              alignItems="end"
              justifyContent="center"
            >
              <Box fontSize="15px">For booking up the stalls Contact</Box>
              <Box fontSize="20px">+91 90329 44441</Box>
            </Flex>
            <Box bg="yellow.500" h="90px" w="90px" fontSize="35px" p="6">
              <FiPhoneCall />
            </Box>
          </Flex>
        </>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            border="none"
            fontSize="25px"
            aria-label="Options"
            icon={<RxHamburgerMenu />}
            variant="outline"
            color="white"
            ml="45vw"
          />
          <MenuList bg="transparent" backdropFilter="blur(8px)" color="white" >
            <MenuItem bg="transparent" fontWeight="600">
              <Link to="/">
                <Text>Home</Text>
              </Link>
            </MenuItem>
            <MenuItem bg="transparent" fontWeight="600">
              <Link to="/about">
                <Text>About Us</Text>
              </Link>
            </MenuItem>
            <MenuItem bg="transparent" fontWeight="600">
              <Link to="/competition">
                <Text>Competitions</Text>
              </Link>
            </MenuItem>
            <MenuItem bg="transparent" fontWeight="600">
              <Link to="/register">
                <Text>Registration</Text>
              </Link>
            </MenuItem>
            <MenuItem bg="transparent" fontWeight="600">
              <Link to="/contactUs">
                <Text>Contact Us</Text>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}
