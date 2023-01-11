// React
import React from "react";
import { I_Product } from "../../Models/interfaces";
import ProductCountModifier from "../ProductCountModifier/ProductCountModifier";
// React
// CSS
import styles from "./ProductCard.module.css";
import { useSplitNumbers } from "../../Hooks/useSplitNumbers";
// CSS

type ProductCardProps = {
  data: I_Product;
  onIncrementHandler: Function;
  onDecrementHandler: Function;
  className?: string;
};

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  data: { count, id, image, name, price },
  onDecrementHandler,
  onIncrementHandler,
  className,
}) => {
  return (
    <div
      className={`${styles.productCard} flex flex-col w-full px-2.5 ${className}`}
    >
      <div className="top w-full text-right mt-2" style={{ color: " #2C3036" }}>
        {name}
      </div>
      <div className="bottom flex flex-row-reverse items-center justify-between mt-4 pb-1.5">
        <p className="flex flex-row-reverse">
          <span>{useSplitNumbers(price * count)}</span>
          <span className="mr-2">تومان</span>
        </p>
        <ProductCountModifier
          count={count}
          onIncrementHandler={() => onIncrementHandler(id)}
          onDecrementHandler={() => onDecrementHandler(id)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
