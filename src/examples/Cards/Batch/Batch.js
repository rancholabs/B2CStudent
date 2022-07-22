import React from "react";
import { Link } from "react-router-dom";
import "examples/Cards/Batch/Batch.css";

function Batch(props) {
  const { batchName, batchStatus, startingDate } = props.batch;
  const changestartingDate = startingDate.split("T")[0];
  return (
    <Link to={{ pathname: "/view-class" }}>
      <div className="outerDiv">
        <div>
          <h3 className="BatchHeading">{batchName}</h3>
        </div>
        <p>batchStatus: {batchStatus}</p>
        <p>startingDate: {changestartingDate}</p>
      </div>
    </Link>
  );
}

export default Batch;
