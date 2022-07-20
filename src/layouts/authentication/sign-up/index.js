// react-router-dom components
import { Link } from "react-router-dom";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useState } from "react";

function Cover() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [name, setName] = useState("");
  const [classS, setClassS] = useState("");
  const [school, setSchool] = useState("");

  const handleLogin = () => {
    console.log(email, password);
    axios
      .post("http://localhost:5000/api/b2c/signup", {
        name: name,
        emailId: email,
        password: password,
        phoneNumber: phoneNumber,
        role: "student",
        class: classS,
        school: school,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/authentication/sign-in";
        localStorage.setItem("auth", true);
        localStorage.setItem("id", res.data.userId);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.savedStudent.role);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="phoneNumber"
                variant="standard"
                fullWidth
                onChange={(e) => {
                  setphoneNumber(e.target.value);
                }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Class"
                variant="standard"
                fullWidth
                onChange={(e) => {
                  setClassS(e.target.value);
                }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="School"
                variant="standard"
                fullWidth
                onChange={(e) => {
                  setSchool(e.target.value);
                }}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={() => handleLogin()}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
