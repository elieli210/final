// React
import React from "react";
import { sendTimes } from "../../Data/sendTimes";
import { I_sendTime } from "../../Models/interfaces";
import DetailTimePickerCard from "../DetailTimePickerCard/DetailTimePickerCard";
// React
// CSS
// import styles from "./DetailTimePicker.module.css";
// CSS

type DetailTimePickerProps = {
  currentSendTime: I_sendTime;
  setCurrentSendTime: React.Dispatch<React.SetStateAction<I_sendTime>>;
};

const DetailTimePicker: React.FunctionComponent<DetailTimePickerProps> = ({
  currentSendTime,
  setCurrentSendTime,
}) => {
  return (
    <div className="flex flex-col items-end justify-start px-5 pb-7">
      {sendTimes.map((item) => (
        <DetailTimePickerCard
        
          key={item.start + item.end}
          data={item}
          currentSendTime={currentSendTime}
          setCurrentSendTime={setCurrentSendTime}
        />
      ))}
    </div>
  );
};

export default DetailTimePicker;
