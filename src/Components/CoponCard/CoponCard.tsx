// React
import React from "react";
// React
// CSS
import styles from "./CoponCard.module.css";
import { coponImage, lineIMG } from "../../Images/images";

// CSS
const CoponCard = () => {
  return (
    <div
      className={`w-full flex items-center justify-between relative overflow-hidden pt-4 pb-7 mt-10 ${styles.masterCopon}`}
    >
      <div
        className={` px-4 relative ${styles.change}`}
        style={{
          color: "#FF5C01",
        }}
      >
        تغییر
      </div>
      <img
        src={lineIMG}
        className={`${styles.cut2} absolute h-full z-10 rotate-0 `}
        style={{ transform: "rotate(0deg)" }}
        alt=""
      />
      <span className={`${styles.cut} absolute -top-2  w-4 h-4 z-20`}></span>{" "}
      <span className={`${styles.cut} absolute -bottom-2  w-4 h-4`}></span>
      <div className={`${styles.right} flex flex-row-reverse items-center `}>
        <img src={coponImage} alt="img" className="w-10 h-8" />
        <p className="flex flex-col items-end justify-start mr-6">
          <span className="text-sm">ارسال رایگان سفارش</span>
          <span
            style={{
              color: "#575F6B",
            }}
            className="text-xs"
          >
            مخصوص سفارش اول{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CoponCard;
