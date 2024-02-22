import React, { useState } from 'react';
import {
  Flex,
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Center,
} from '@chakra-ui/react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add further logic to send the form data to a server, etc.
  };

  return (
    <Box bgGradient="linear(to-b, purple.600 0%, purple.400 15%, purple.300 20%, white 55%)">
        <Flex
      direction={{ base: 'column', md: 'row' }}
     
      

    >
     
      {/* Image Box */}
      <Box
        display="flex"
        alignItems="center"
        justify={{ base: 'center', md: 'flex-end' }}
        w={{ base: '100%', md: '50%' }}
        mb="3rem"
        marginRight="8rem"
      
      >
        <Center w="100%" h="100%">
          <Box
          display="flex"
          alignItems="center"
          justify={{ base: 'center', md: 'flex-end'}}
            w={{ base: '200px', md: '300px' }}
            h={{ base: '150px', md: '200px' }}
            mb={{ base: '2rem', md: '0' }}
         
          >
            <img
              src="logo.png"
              alt="Company Logo"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
        </Center>
      </Box>

       {/* Form Box */}
       <Box w={{ base: '100%', md: '50%' }} mb={{ base: '2rem', md: '0' }}  m="1rem" >
        <Heading mb="4">Contact Us</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb="4" boxShadow="md">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              boxShadow="md" 
              bg="white"
            />
          </FormControl>

          <FormControl mb="4" boxShadow="md">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              boxShadow="md" 
              bg="white"
            />
          </FormControl>

          <FormControl mb="4" boxShadow="md">
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your contact number"
              boxShadow="md" 
              bg="white"
            />
          </FormControl>

          <FormControl mb="4" boxShadow="md">
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              boxShadow="md" 
              bg="white"
            />
          </FormControl>

          <Button  hover={{
                bg: "white",
                color: "black",
                border:"1px solid black"
              }} 
                 bg="black" color="white" type="submit"  mb="2rem">
            Submit
          </Button>
        </form>
      </Box>

    </Flex>
    </Box>
  );
};

export default ContactUs;