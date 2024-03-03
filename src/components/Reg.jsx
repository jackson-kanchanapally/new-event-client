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
  FormLabel,
} from "@chakra-ui/react";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email address format"
    )
    .required("Email is required"),
  ageGroup: Yup.string().required("Age Group is required"),
  Eventdate: Yup.string().required("Date is required"),
  mobileNumber: Yup.string()
    .required("Mobile Number is required")
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits "),
  msg: Yup.string().required("Message is required"),
});

const Reg = () => {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ageGroup: "",
    Eventdate: "",
    mobileNumber: "",
    company: "",
    msg: "",
  });
  const [generatedNumber, setGenNumber] = useState("");
  const handleGenerateNumber = async (values) => {
    try {
      const response = await axios.post("/generateUniqueNumber", {
        name: values.name,
        Eventdate: values.Eventdate,
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
            values.name,
            values.email,
            values.ageGroup,
            values.Eventdate,
            values.company,
            values.mobileNumber,
            values.msg,
          ],
        ]),
      });

      // Use toast to display success message
      toast.success(
        "Registration successful! Your ID has been sent to your email.",
        {
          autoClose: 3000, // Close the toast after 3 seconds
        }
      );
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Flex
      direction="column"
      align="center"
      // justify="center"
      minHeight="100vh"
      bg="white"
    >
      <Flex
        w="100vw"
        h={["302px", "572px"]}
        backgroundImage="low.png"
        backgroundSize="cover"
        backgroundPosition="center"
        color="white"
        overflowX="hidden"
        pl={["10px", "280px"]}
        alignItems="center"
      >
        <Heading
          pt="120px"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
          fontSize={["40px", "60px"]}
        >
          Registration
        </Heading>
      </Flex>
      <Flex
        direction="column"
        w={["85vw", "50%"]}
        pt={["50px", "70px"]}
        pb={["50px", "170px"]}
      >
        <Heading
          color="black"
          mb="4"
          fontSize="26.41px"
          fontWeight="400"
          textAlign="center"
        >
          Competition Registration
        </Heading>
        <Formik
          initialValues={{
            name: "",
            email: "",
            ageGroup: "",
            company: "",
            Eventdate: "",
            mobileNumber: "",
            msg: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Box color="black" pt="10px">
            <Form>
              <Flex justifyContent="center" direction={["column", "row"]}>
                <Box>
                  <FormLabel>Name</FormLabel>
                  <Field
                    as={Input}
                    mb="3"
                    bg="#EEEEEE"
                    style={{
                      height: "48px",
                      width: "305.22px",
                      borderRadius: "15px",
                      color: "black",
                    }}
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{
                      paddingLeft: "12px",
                      marginBottom: "8px",
                      color: "red",
                    }}
                  />
                </Box>
                <Box ml={["0", "10px"]}>
                  <FormLabel>Company</FormLabel>
                  <Field
                    as={Input}
                    mb="3"
                    bg="#EEEEEE"
                    style={{
                      height: "48px",
                      width: "305.22px",
                      borderRadius: "15px",
                      color: "black",
                    }}
                    placeholder="Company"
                    name="company"
                    required
                  />
                  <ErrorMessage
                    name="middleName"
                    component="div"
                    style={{
                      paddingLeft: "12px",
                      marginBottom: "8px",
                      color: "red",
                    }}
                  />
                </Box>
              </Flex>
              <Flex justifyContent="center" direction={["column", "row"]}>
                <Box>
                  {" "}
                  <FormLabel>Phone</FormLabel>
                  <Field
                    as={Input}
                    mb="3"
                    placeholder="122336448"
                    bg="#EEEEEE"
                    style={{
                      height: "48px",
                      width: "305.22px",
                      borderRadius: "15px",
                      color: "black",
                    }}
                    name="mobileNumber"
                    required
                  />
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    style={{
                      paddingLeft: "12px",
                      marginBottom: "8px",
                      color: "red",
                    }}
                  />
                </Box>
                <Box ml={["0", "10px"]}>
                  {" "}
                  <FormLabel>Email</FormLabel>
                  <Field
                    as={Input}
                    mb="3"
                    bg="#EEEEEE"
                    style={{
                      height: "48px",
                      width: "305.22px",
                      borderRadius: "15px",
                      color: "black",
                    }}
                    placeholder="your email id"
                    name="email"
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{
                      paddingLeft: "12px",
                      marginBottom: "8px",
                      color: "red",
                    }}
                  />
                </Box>
              </Flex>
              <Flex justifyContent="center" direction={["column", "row"]}>
                <Box>
                  <FormLabel>Date</FormLabel>
                  <Field
                    as={Select}
                    mb="3"
                    placeholder="Date"
                    name="Eventdate"
                    bg="#EEEEEE"
                    color="#929598"
                    style={{
                      height: "48px",
                      width: "305.22px",
                      borderRadius: "15px",
                      color: "black",
                    }}
                    required
                  >
                    <option value="8th">8th march 2024</option>
                    <option value="9th">9th march 2024</option>
                    <option value="10th">10th march 2024</option>
                  </Field>
                  <ErrorMessage
                    name="Eventdate"
                    component="div"
                    style={{
                      paddingLeft: "12px",
                      marginBottom: "8px",
                      color: "red",
                    }}
                  />
                </Box>
                <Box ml={[0, "10px"]}>
                  <FormLabel>Select Age</FormLabel>
                  <Field
                    as={Select}
                    mb="3"
                    placeholder=" "
                    bg="#EEEEEE"
                    style={{
                      width: "305.22px",
                      height: "48px",
                      borderRadius: "15px",
                      color: "black",
                    }}
                    name="ageGroup"
                    required
                  >
                    <option bg="#EEEEEE" value="Below 18 years">
                      Below 18 years
                    </option>
                    <option value="18 to 20 years">18 to 20 years</option>
                    <option value="20 to 30 years">20 to 30 years</option>
                    <option value="Above 30 years">Above 30 years</option>
                  </Field>
                  <ErrorMessage
                    name="ageGroup"
                    component="div"
                    style={{
                      paddingLeft: "12px",
                      marginBottom: "8px",
                      color: "red",
                    }}
                  />
                </Box>
              </Flex>

              <Flex direction={["column"]} alignItems="center">
                <Box>
                  <FormLabel>Message</FormLabel>
                  <Field
                    as={Textarea}
                    mb="3"
                    name="msg"
                    bg="#EEEEEE"
                    w={["305.22px", "620px"]}
                    // style={{
                    //   width: "620px",
                    //   height: "120px",
                    //   borderRadius: "15px",
                    // }}
                    required
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    style={{
                      paddingLeft: "12px",
                      marginBottom: "8px",
                      color: "red",
                    }}
                  />
                </Box>
                <Button
                  type="submit"
                  bg="#FFA800"
                  color="black"
                  fontSize="16px"
                  w={["305.22px", "620px"]}
                >
                  Book Now
                </Button>
              </Flex>

              <Box></Box>
            </Form>
          </Box>
        </Formik>
        <ToastContainer />
      </Flex>
    </Flex>
  );
};

export default Reg;
