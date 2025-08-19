import React from "react";

const Sample = () => {
  let eids = [101, 102, 103, 104, 102, 103, 104];

  return (
    <div>
      {eids.map((eid, index) => (
        <p key={index}>
          {eid} - {index}
        </p>
      ))}
    </div>
  );
};

export default Sample;
