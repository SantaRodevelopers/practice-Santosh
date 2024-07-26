import React, { useState } from "react";
import ProductItems from "./Components/ProductItems";

const initialState = false;


  


function ProductList({ name, city, listofproducts }) {
  //const initialState = true;
  const [ flag, setFlag ] = useState(initialState);
  console.log(flag);




  function DisplayChange(){
    setFlag(flag=>!flag)
  }
  return (
    <div>
      {flag ? (
        <h3>
          {name} and  {city}
        </h3>
      ) : (
        <h3>Hello</h3>
      )}

      <button onClick={DisplayChange}>Click</button>
      <h3>Ecommerce Projects</h3>
      <ol>
        {listofproducts.map((item,key) => {
          return <ProductItems singleProduct={item} key={key} />
})}
      </ol>
    </div>
  );
}
export default ProductList;
