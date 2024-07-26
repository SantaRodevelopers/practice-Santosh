import React, { useState } from "react";
import ProductItems from "./Components/ProductItems";

const initialState = false;

function ProductList({ name, city, listofproducts }) {
  const { flag, setFlag } = useState(true);
  console.log(flag);
  return (
    <div>
      {flag ? (
        <h3>
          {name} and  {city}
        </h3>
      ) : (
        <h3>Hello</h3>
      )}
      <h3>Ecommerce Projects</h3>
      <ol>
        {listofproducts.map((item) => (
          <ProductItems singleProduct={item} />
        ))}
      </ol>
    </div>
  );
}
export default ProductList;
