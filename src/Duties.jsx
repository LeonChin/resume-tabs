import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

function Duties({ duties }) {
  return duties.map((duty) => {
    const id = uuidv4();
    return (
      <div className="job-desc" key={id}>
        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
        <p>{duty}</p>
      </div>
    );
  });
}

export default Duties;
