import React, { useEffect, useLayoutEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";

//batchCard

import Batch from "examples/Cards/Batch/Batch.js";

function Batches() {
  const sid = localStorage.getItem("id");
  const [Data, setData] = useState([]);
  const [BatchesData, setBatchesData] = useState([]);

  useLayoutEffect(() => {
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
      {BatchesData.length != 0 &&
        BatchesData.map((batch, index) => <Batch key={index} batch={batch}></Batch>)}
    </DashboardLayout>
  );
}

export default Batches;
