import React, { useEffect, useLayoutEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";

import { Link } from "react-router-dom";
import "examples/Cards/Batch/Batch.css";
// @mui material components
import Grid from "@mui/material/Grid";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
//batchCard

import Batch from "examples/Cards/Batch/Batch.js";

function Batches() {
  const sid = localStorage.getItem("id");
  const [Data, setData] = useState([]);
  const [BatchesData, setBatchesData] = useState([]);

  useLayoutEffect(() => {
    setBatchesData([]);
    axios
      .get(`http://localhost:5000/api/b2c/details/${sid}`)
      .then((res) => {
        setData(res.data);
        for (let i = 0; i < res.data.batches.length; i++) {
          const element = res.data.batches[i];

          axios.get(`http://localhost:5000/api/b2c/batch/${element}`).then((response) => {
            console.log("response is: ", response);
            setBatchesData((prev) => [...prev, response.data]);
            localStorage.setItem("curriculum", response.data.curriculumId[0]);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("BatchesData is: ", BatchesData);

  if (BatchesData.length === 0) {
    return <></>;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br></br>
      <Grid container spacing={3}>
        {BatchesData.map((batch, index) => (
          <Grid key={index} item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <Link to="/view-class" state={batch}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title={`No. Of Classes - ${batch.classDataArray.length}`}
                  count={batch.batchName}
                  date={batch.startingDate.split("T")[0]}
                  percentage={{
                    color:
                      batch.batchStatus === "running"
                        ? "success"
                        : batch.batchStatus === "willStart"
                        ? "warning"
                        : "danger",
                    amount:
                      batch.batchStatus === "running"
                        ? "running"
                        : batch.batchStatus === "willStart"
                        ? "will start"
                        : "ended",
                  }}
                />
              </Link>
            </MDBox>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
}

export default Batches;
