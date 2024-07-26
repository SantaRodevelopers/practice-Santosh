import React from "react";

function Buttons() {
  return (
    <div>
      <button>Click</button>
    </div>
  );
}

function ProductItems(p) {
  //console.log(p);
  return (
    <div style={{ padding: "20px", border: "2px solid white ", margin: "5px" }}>
      <p>p</p>
      <Buttons />
    </div>
  );
}

export default ProductItems;
