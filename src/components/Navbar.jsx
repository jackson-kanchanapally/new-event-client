import {
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  // Box,
} from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
      height={["70px"]}
      w={["100vw"]}
      alignItems="center"
      px={["40px", "148px"]}
      bg="white"
    
       
    >
      <Link to="/">
        <Image src="logo.png" w={["60px"]} />
      </Link>
      <Heading fontSize={["20px"]} color="black"  fontWeight="500">
        Sachi Events
      </Heading>

      <Spacer />
      {isLargerThan800 ? (
        <HStack spacing={["40px"]} mr={["25px"]} h="70px" color="black">
          <Flex
            alignItems="center"
            fontWeight="500"
            h="100%"
            borderTop={pathname === "/" && "4px solid black"}
          >
            <Link to="/">
              <Text>Home</Text>
            </Link>
          </Flex>
          <Flex
            alignItems="center"
            h="100%"
            borderTop={pathname === "/about" && "4px solid black"}
            fontWeight="500"
          >
            <Link to="/about">
              <Text>About Us</Text>
            </Link>
          </Flex>
          <Flex
            alignItems="center"
            h="100%"
            borderTop={pathname === "/competition" && "4px solid black"}
            fontWeight="500"
          >
            <Link to="/competition">
              <Text>Competitions</Text>
            </Link>
          </Flex>
          <Flex
            alignItems="center"
            h="100%"
            borderTop={pathname === "/register" && "4px solid black"}
            fontWeight="500"
          >
            <Link to="/register">
              <Text>Registration</Text>
            </Link>
          </Flex>
          <Flex
            alignItems="center"
            h="100%"
            borderTop={pathname === "/contactUs" && "4px solid black"}
            fontWeight="500"
          >
            <Link to="/contactUs">
              <Text>Contact Us</Text>
            </Link>
          </Flex>
        </HStack>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            border="none"
            fontSize="25px"
            aria-label="Options"
            icon={<RxHamburgerMenu />}
            variant="outline"
            color="black"
          />
          <MenuList>
            <MenuItem>
              <Link to="/">
                <Text>Home</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">
                <Text>About Us</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/competition">
                <Text>Competitions</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/register">
                <Text>Registration</Text>
              </Link>
            </MenuItem>
            <MenuItem>
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