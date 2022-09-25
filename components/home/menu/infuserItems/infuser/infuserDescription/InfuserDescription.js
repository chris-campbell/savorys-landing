import React from "react";

const InfuserDescription = ({ desc }) => {
  const modDescription = desc.replace(/<[^>]+>/g, "");

  return <p>{modDescription}</p>;
};

export default InfuserDescription;
