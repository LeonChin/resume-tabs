import React from "react";

function BtnContainer({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentItem(index);
            }}
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
