import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Heading,
  Input,
  Select,
  Textarea,
  Button,

  Flex,
 
} from "@chakra-ui/react";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email address format"
    )
    .required("Email is required"),
  ageGroup: Yup.string().required("Age Group is required"),
  competitionType: Yup.string().required("Competition Type is required"),
  Eventdate: Yup.string().required("Date is required"),
  gender: Yup.string().required("Gender is required"),
  mobileNumber: Yup.string()
    .required("Mobile Number is required")
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits "),
  address: Yup.string().required("Address is required"),
});

const Reg = () => {
 // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    ageGroup: "",
    competitionType: "",
    Eventdate:"",
    gender: "",
    mobileNumber: "",
    address: "",
  });
// eslint-disable-next-line no-unused-vars
  const [generatedNumber, setGenNumber] = useState("");
  const handleGenerateNumber = async (values) => {
    try {
      const response = await axios.post("/generateUniqueNumber", {
        name: values.firstName,
        Eventdate:values.Eventdate,
        email: values.email,
      });
      return response.data.uniqueNumber;
    } catch (err) {
      console.error("Error generating unique number:", err);
      return null;
    }
  };

  const handleSubmit = async (values, { resetForm, submitForm }) => {
    try {
      console.log("Data to be sent:", JSON.stringify(values));

      // Generate the unique number
      const generatedNumber = await handleGenerateNumber(values);

      // Now you have the generatedNumber, proceed with form submission
      const sheetApiEndpoint =
        "https://v1.nocodeapi.com/abcd1234/google_sheets/EbXDdmsGRAqLIKvd?tabId=Sheet1";
      await fetch(sheetApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          [
            generatedNumber,
            values.firstName,
            values.middleName,
            values.lastName,
            values.email,
            values.ageGroup,
            values.competitionType,
            values.Eventdate,
            values.gender,
            values.mobileNumber,
            values.address,
          ],
        ]),
      });

      // Use toast to display success message
      toast.success("Registration successful! Your ID has been sent to your email.", {
        autoClose: 3000, // Close the toast after 3 seconds
      });
      resetForm();
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Flex
    direction="column"
    align="center"
    justify="center"
    minHeight="100vh"
    bgGradient="linear(to-b, purple.600 0%, purple.400 15%, purple.300 20%, white 55%)"
  

  >
    <Box
      bg="white"
      w={["90%", "80%", "500px"]}
      p="4"
      borderWidth="1px"
      borderRadius="1.2rem"
      mt="4"
      boxShadow="md"
    >
      <Heading mb="4" textAlign="center">
        Competition Registration
      </Heading>
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          ageGroup: "",
          competitionType: "",
          Eventdate: "",
          gender: "",
          mobileNumber: "",
          address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* First Name */}
          <Field as={Input} mb="3" placeholder="First Name" name="firstName" required />
          <ErrorMessage
            name="firstName"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Middle Name */}
          <Field as={Input} mb="3" placeholder="Middle Name" name="middleName" required />
          <ErrorMessage
            name="middleName"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Last Name */}
          <Field as={Input} mb="3" placeholder="Last Name" name="lastName" required />
          <ErrorMessage
            name="lastName"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Email */}
          <Field as={Input} mb="3" placeholder="Email ID" name="email" required />
          <ErrorMessage
            name="email"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Age Group */}
          <Field as={Select} mb="3" placeholder="Select your Age group" name="ageGroup" required>
          <option value="Below 18 years">Below 18 years</option>
                <option value="18 to 20 years">18 to 20 years</option>
                <option value="20 to 30 years">20 to 30 years</option>
                <option value="Above 30 years">Above 30 years</option>
          </Field>
          <ErrorMessage
            name="ageGroup"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Competition Type */}
          <Field as={Select} mb="3" placeholder="Types of Competition" name="competitionType" required>
          <option value="dance">Dance (Below 30)</option>
                <option value="sketching">Sketching (Below 20)</option>
                <option value="rangoli">Rangoli (Above 20)</option>
                <option value="lemon&spoon">
                  Lemon and spoon (30 and above)
                </option>
                <option value="Musical">
                  Musical chair (Any age group, Ms vs Mrs)
                </option>
                <option value="Tennikoit">
                  Tennikoit (Any age group, Ms vs Mrs)
                </option>
                <option value="quiz">Quiz (Any age group, Ms vs Mrs)</option>
                <option value="Anthakshari ">
                  Anthakshari ( Any age group, Ms vs Mrs
                </option>
                <option value="kho-kho">
                  Kho-kho (Any age group Mr vs Mrs)
                </option>
                <option value="blindfold">Blindfold ( Mr vs Mrs)</option>
          </Field>
          <ErrorMessage
            name="competitionType"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Event Date */}
          <Field as={Select} mb="3" placeholder="Select date" name="Eventdate" required>
          <option value="8th">8th march 2024</option>
                <option value="9th">9th march 2024</option>
                <option value="10th">10th march 2024</option>
          </Field>
          <ErrorMessage
            name="Eventdate"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Gender */}
          <Field as={Select} mb="3" placeholder="Select Gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
           
          </Field>
          <ErrorMessage
            name="gender"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Mobile Number */}
          <Field as={Input} mb="3" placeholder="Mobile Number" name="mobileNumber" required />
          <ErrorMessage
            name="mobileNumber"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          {/* Address */}
          <Field as={Textarea} mb="3" placeholder="Address" name="address" required />
          <ErrorMessage
            name="address"
            component="div"
            style={{ paddingLeft: "12px", marginBottom: "8px", color: "red" }}
          />

          <Button  _hover={{
                bg: "white",
                color: "black",
                border:"1px solid black"
              }} type="submit" bg="#000000" color="white" size="md" w="100%">
            Submit
          </Button>
        </Form>
      </Formik>
      <ToastContainer />
    </Box>
  </Flex>
  );
};

export default Reg;