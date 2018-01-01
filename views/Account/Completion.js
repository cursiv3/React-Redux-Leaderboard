import React from "react";

const Completion = () => (
  <div>
    <h3>Category Completion</h3>
    {props.percentOfCategoryCompleted.map(stats => {
      return (
        <p>
          {stats.category}
          <div
            role="progressbar"
            aria-valuenow={stats.percent}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: stats.percent + "%" }}
          />
        </p>
      );
    })}
  </div>
);

export default Completion;
