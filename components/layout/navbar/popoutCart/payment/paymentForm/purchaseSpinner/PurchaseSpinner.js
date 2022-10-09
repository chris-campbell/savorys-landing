import React from "react";
import { ClipLoader } from "react-spinners";

const PurchaseSpinner = ({ loading, size }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "7rem",
        }}
      >
        <ClipLoader color={"#3F2D3B"} loading={loading} size={size} />
        <p style={{ marginTop: "2rem", color: "#3F2D3B", fontWeight: "600" }}>
          Processing Payment
        </p>
      </div>
    </div>
  );
};

export default PurchaseSpinner;
