import "./App.css";
import FunctionalComponenets from "./Components/FunctionalComponenets";
import ProductList from "./Components/Products/ProductList";

const dummyproducts = ["Product 1", "Product 2", "Product 3"];


function App() {
  return (
    <>
      <div>
        <h1>Hi This is React Basics</h1>
        <ProductList listofproducts={dummyproducts} name="Maggie" city="NYC" />
      </div>
    </>
  );
}
export default App;
