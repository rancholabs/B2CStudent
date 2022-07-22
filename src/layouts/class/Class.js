import React, { useLayoutEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";

import authorsTableData from "layouts/tables/data/authorsTableData";
function Class() {
  const location = useLocation();
  let [Data, setData] = useState([]);
  console.log(location, "saty");
  useLayoutEffect(() => {
    Data = [];
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
  const rows = Data;
  const columns = [
    { Header: "Session Number", accessor: "sessionNumber", width: "45%", align: "left" },
    { Header: "Session Topic", accessor: "sessionTopic", align: "left" },
    { Header: "Slides Link", accessor: "slidesLink", align: "center" },
    { Header: "H.W. Project Link", accessor: "hwProjectLink", align: "center" },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <br></br>
        <Grid item xs={12}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Class Table
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </MDBox>
          </Card>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default Class;
