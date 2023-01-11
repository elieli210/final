// React
import React from "react";
import { I_sendTime } from "../../Models/interfaces";
// React
// CSS
import styles from "./DeliveryTime.module.css";
// CSS
// Components
import AboutSection from "../../Utils/AboutSection/AboutSection";
import TimeBox from "../TimeBox/TimeBox";
// Components

type DeliveryTimeProps = {
  currentSendTime: I_sendTime;
  setCurrentSendTime: React.Dispatch<React.SetStateAction<I_sendTime>>;
};

const DeliveryTime: React.FunctionComponent<DeliveryTimeProps> = ({
  currentSendTime,
  setCurrentSendTime,
}) => {
  return (
    <div className={`mt-12 w-full  `}>
      <AboutSection about="زمان تحویل" className="mb-5 text-sm" />
      <TimeBox
        currentSendTime={currentSendTime}
        setCurrentSendTime={setCurrentSendTime}
      />
    </div>
  );
};

export default DeliveryTime;
