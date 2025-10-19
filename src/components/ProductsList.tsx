import { useEffect, useState } from "react";
import Product from "./Product";
import {Products} from './Product'

function ProductsList() {
  const [product, setProduct] = useState<Products[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  },[]);

  return (
    <>
      <h2 className="text-center p-5">Our Product</h2>
      <div className="container">
        <div className="row">
          {product.map((product) => {
            return (
              <div className="col-3" key={product.id} >
                <Product product = {product}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
