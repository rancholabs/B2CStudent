import React from "react";
import { Link } from "react-router-dom";
import "examples/Cards/Batch/Batch.css";
// @mui material components
import Grid from "@mui/material/Grid";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
function Batch(props) {
  const { batchName, batchStatus, startingDate } = props.batch;
  const changestartingDate = startingDate.split("T")[0];
  return (
    <Grid item xs={12} md={6} lg={3}>
      <MDBox mb={1.5}>
        <ComplexStatisticsCard
          color="dark"
          icon="weekend"
          title="Bookings"
          count={281}
          percentage={{
            color: "success",
            amount: "+55%",
            label: "than lask week",
          }}
        />
      </MDBox>
    </Grid>
  );
}

export default Batch;
