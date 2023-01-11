import React from "react";
import CoponCard from "../CoponCard/CoponCard";

const SelectedCopon = () => {
  return (
    <div className="w-full flex flex-col items-ens justify-start mt-9">
      <p className="text-right" style={{ color: "#575f6b" }}>
        کوپن انتخاب شده
      </p>
      <CoponCard />
    </div>
  );
};

export default SelectedCopon;
