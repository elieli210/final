// React
import React from "react";
// React
// CSS
import styles from "./TimeBox.module.css";
// CSS
// Models
import DayTimePicker from "../DayTimePicker/DayTimePicker";
import DetailTimePicker from "../DetailTimePicker/DetailTimePicker";
import { I_sendTime } from "../../Models/interfaces";
// Models

type TimeBoxProps = {
  currentSendTime: I_sendTime;
  setCurrentSendTime: React.Dispatch<React.SetStateAction<I_sendTime>>;
};

const TimeBox: React.FunctionComponent<TimeBoxProps> = ({
  currentSendTime,
  setCurrentSendTime,
}) => {
  return (
    <div className={`w-full mt-10  ${styles.timeBox}`}>
      <DayTimePicker />
      <DetailTimePicker
        currentSendTime={currentSendTime}
        setCurrentSendTime={setCurrentSendTime}
      />
    </div>
  );
};

export default TimeBox;
