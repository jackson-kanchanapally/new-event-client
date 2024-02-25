import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Reg from "./components/Reg";
import ContactUs from "./components/Contactus";
import AboutCompetitions from "./components/AboutCompitions";
export default function App() {
  return (
    <ChakraProvider>
      {/* {isLargerThan800 && <UpNav />} */}
      <Box maxW="100%" overflowX="hidden" bg="black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/competition" element={<AboutCompetitions />} />
        </Routes>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}