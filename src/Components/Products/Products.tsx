// React
import React from "react";
// React
// Models
import { I_Product } from "../../Models/interfaces";
// Models
// Components
import ProductCard from "../ProductCard/ProductCard";
import { Fade } from "react-awesome-reveal";
// Components

type ProductsProps = {
  products: I_Product[];
  onIncrementHandler: Function;
  onDecrementHandler: Function;
};
const Products: React.FunctionComponent<ProductsProps> = ({
  onDecrementHandler,
  onIncrementHandler,
  products,
}) => {
  return (
    <div>
      {products.map((item, index) => (
        <Fade key={item.id}>
          <ProductCard
            data={item}
            onIncrementHandler={onIncrementHandler}
            onDecrementHandler={onDecrementHandler}
            className={index === 0 ? "mt-5" : "mt-3"}
          />
        </Fade>
      ))}
    </div>
  );
};

export default Products;
