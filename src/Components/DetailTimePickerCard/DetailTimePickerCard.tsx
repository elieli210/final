// React
import React from "react";
// React
// CSS
import styles from "./DetailTimePickerCard.module.css";
// CSS
// Models
import { I_sendTime } from "../../Models/interfaces";
// Models

type DetailTimePickerCardProps = {
  data: I_sendTime;
  setCurrentSendTime: React.Dispatch<React.SetStateAction<I_sendTime>>;
  currentSendTime: I_sendTime;
};

const DetailTimePickerCard: React.FunctionComponent<
  DetailTimePickerCardProps
> = ({ data: { end, price, start }, currentSendTime, setCurrentSendTime }) => {
  return (
    <>
      <div
        onClick={() => {
          setCurrentSendTime({
            start,
            end,
            price,
          });
        }}
        className="flex flex-row mt-6"
      >
        <span className="flex flex-row-reverse  ">
          <div className="mr-4">
            {start} - {end}
          </div>
          {price !== 0 ? (
            <div className={`${styles.priceHolder} mr-4 flex flex-row-reverse`}>
              <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              <p className="mr-1 ">تومان</p>
            </div>
          ) : (
            <div className="mr-4">رایگان</div>
          )}
        </span>
        <div className={styles.inputContainer}>
          <span className={styles.outer}>
            {JSON.stringify(currentSendTime) ===
            JSON.stringify({ start, end, price }) ? (
              <span className={`${styles.inner} absolute`}></span>
            ) : (
              <span className={`${styles.inner} absolute opacity-0`}></span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailTimePickerCard;
