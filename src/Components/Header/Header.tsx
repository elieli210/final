// React
import React from "react";
// React
// Icons
import { IoChevronBackOutline } from "react-icons/io5";
import { recycleBinIMG } from "../../Images/images";
// Icons
const Header = () => {
  return (
    <header className="flex flex-row-reverse items-center justify-between w-full  mt-10">
      <IoChevronBackOutline
        className="text-3xl"
        style={{ transform: "rotate(180deg)" }}
      />
      <span className="text-xl ">سبد خرید</span>
      <img src={recycleBinIMG} alt="" />
    </header>
  );
};

export default Header;
