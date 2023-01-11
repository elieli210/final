// React
import { useState } from "react";
// React
// CSS
import styles from "./DayTimePicker.module.css";
// CSS
// Models
// Models

const DayTimePicker = () => {
  const [selectedDay, setSelectedDay] = useState<"today" | "tomorrow">("today");

  return (
    <div className="w-full py-4 ">
      <div
        className={`${styles.daySelector} w-full flex flex-row-reverse relative`}
      >
        <button
          className={`${styles.today}  w-1/2 pb-4 `}
          style={{ color: selectedDay === "today" ? "#ff5c01" : "#575F6B" }}
          onClick={() => {
            setSelectedDay("today");
          }}
        >
          امروز
        </button>
        <span
          className={`absolute w-full  transition-all bottom-0 `}
          style={{ background: "#575F6B", height: "1.5px" }}
        >
          <span
            className={`absolute w-1/2 h-full transition-all bottom-0 ${
              selectedDay === "tomorrow" ? "left-0" : "left-1/2"
            }`}
            style={{ background: "#ff5c01" }}
          ></span>
        </span>
        <button
          className={`${styles.today}  w-1/2 pb-4 `}
          style={{ color: selectedDay === "tomorrow" ? "#ff5c01" : "#575F6B" }}
          onClick={() => {
            setSelectedDay("tomorrow");
          }}
        >
          فردا
        </button>
      </div>
    </div>
  );
};

export default DayTimePicker;
