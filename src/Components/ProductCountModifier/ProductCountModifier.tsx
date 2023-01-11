// React
import React from "react";
import { addButton, negImg } from "../../Images/images";
// React
// CSS
import styles from "./ProductCountModifier.module.css";
// CSS

type ProductCountModifierProps = {
  onIncrementHandler: Function;
  onDecrementHandler: Function;
  count: number;
};

const ProductCountModifier: React.FunctionComponent<
  ProductCountModifierProps
> = ({ count, onDecrementHandler, onIncrementHandler }) => {
  return (
    <div className="flex flex-row-reverse items-center ">
      <img
        src={addButton}
        alt="addBtn"
        className="cursor-pointer"
        onClick={() => onIncrementHandler()}
      />
      <p className="mx-2">{count}</p>
      <button onClick={() => onDecrementHandler()} className="rounded-full">
        {count !== 1 ? (
          <span className={`${styles.negBtn} px-2 py-1`}>-</span>
        ) : (
          <img src={negImg} alt="negBtn" />
        )}
      </button>
    </div>
  );
};

export default ProductCountModifier;
