// React
import React from "react";
import AboutSection from "../../Utils/AboutSection/AboutSection";
// React
// CSS
import styles from "./Description.module.css";
// CSS
const Description = () => {
  return (
    <div className={`${styles.description} mt-7 mb-10`}>
      <AboutSection about="توضیحات" className="mt-5" />
      <input
        type="text"
        className="w-full h-4 mt-4"
        id={styles.descriptionInput}
        placeholder="توضیحات سفارش خود را وارد کنید ....."
      />
    </div>
  );
};

export default Description;
