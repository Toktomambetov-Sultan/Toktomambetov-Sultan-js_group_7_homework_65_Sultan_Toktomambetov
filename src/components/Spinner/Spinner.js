import React from "react";
import svg from "./../../assets/svg/spinner.svg";
const Spinner = ({ show }) => {
  return (
    <div
      style={{
        display: show ? "block" : "none",
      }}
    >
      <img src={svg} alt="preloader" />
    </div>
  );
};

export default Spinner;
