// React
import React from "react";
// React
// CSS
import styles from "./RecomendedCard.module.css";
// CSS
// Models
import { I_Product } from "../../Models/interfaces";
import { useSplitNumbers } from "../../Hooks/useSplitNumbers";
import { addButton } from "../../Images/images";
// Models

type RecomendedCardProps = {
  data: I_Product;
  addToCartHandler: Function;
};

const RecomendedCard: React.FunctionComponent<RecomendedCardProps> = ({
  data: { count, id, image, name, price },
  addToCartHandler,
}) => {
  return (
    <div className={`${styles.recomendedCard} flex flex-row-reverse relative `}>
      <img src={image} alt="" className="h-full cursor-pointer" />
      <div className={` flex flex-col items-end justify-around mr-3.5`}>
        <p>{name}</p>
        <p className="flex  flex-row-reverse ">
          <span>{useSplitNumbers(price)}</span>
          <span className="mr-2">تومان</span>
        </p>
      </div>
      <img
        src={addButton}
        alt="addBtn"
        className="absolute top-6 rounded-full left-0 cursor-pointer"
        onClick={() => addToCartHandler(id)}
      />
    </div>
  );
};

export default RecomendedCard;
