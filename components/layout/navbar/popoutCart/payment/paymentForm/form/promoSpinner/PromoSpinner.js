import React from "react";
import { ClipLoader } from "react-spinners";

const PromoSpinner = ({ loading, size }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <ClipLoader color={"#3F2D3B"} loading={loading} size={size} />
    </div>
  );
};

export default PromoSpinner;
