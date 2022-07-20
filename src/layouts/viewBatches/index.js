import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";

function Batches() {
  const sid = localStorage.getItem("id");
  const [Data, setData] = useState({});

  useEffect(() => {
    console.log("sid is: ", sid);
    axios
      .get(`http://localhost:5000/api/b2c/details/${sid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <p>{Data.name}</p>
    </DashboardLayout>
  );
}

export default Batches;
