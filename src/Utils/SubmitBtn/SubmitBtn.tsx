// React
import React from "react";
// React
// CSS
import styles from "./SubmitBtn.module.css";
// CSS

type SubmitBtnProps = {
  sendPrice: number;
  cartItemPrice: number;
};

const SubmitBtn: React.FunctionComponent<SubmitBtnProps> = ({
  cartItemPrice,
  sendPrice,
}) => {
  return (
    <div className={`${styles.wrap}`}>
      <button
        className={`${styles.submitBtn} text-white text-lg font-bold flex items-center justify-center py-8 my-5 rounded-xl cursor-pointer w-full`}
      >
        <span className="text-xs p-1">{`(`}</span>
        <span className="text-xs">تومان</span>
        <span className="mx-2 ">{`${sendPrice + cartItemPrice}`}</span>
        <span className="text-xs ">{`)`}</span>
        <span className="p-1">ادامه</span>
      </button>
    </div>
  );
};

export default SubmitBtn;
