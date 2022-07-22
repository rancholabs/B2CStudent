import React, { useLayoutEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Class() {
  const [Data, setData] = useState([]);

  useLayoutEffect(() => {
    const curriculumId = localStorage.getItem("curriculum");

    axios.get(`http://localhost:5000/api/b2c/curriculum/${curriculumId}`).then((res) => {
      console.log("res is: ", res);
      for (let i = 0; i < res.data.classes.length; i++) {
        let x = res.data.classes[i];
        axios.get(`http://localhost:5000/api/b2c/class/${x}`).then((response) => {
          console.log("response is: ", response);
          setData((prev) => [...prev, response.data]);
        });
      }
    });
  }, []);

  console.log("Data is: ", Data);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div></div>
    </DashboardLayout>
  );
}

export default Class;
