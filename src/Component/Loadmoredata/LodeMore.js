import React, { useEffect, useState } from "react";
import "./Style.css";

const LodeMore = () => {
  const [products, setPorducts] = useState([]);
  const [disable, setDisable] = useState(false);
  const [loadMore, setLoadMore] = useState(0);
  const [productLength, setProductsLength] = useState("");

  let totalPordus;
  const getPorducts = async () => {
    try {
      const responce = await fetch(
        `https://dummyjson.com/products?limit=${20}&skip=${
          loadMore === 0 ? 0 : loadMore * 20
        }`
      );
      const data = await responce.json();
      const { total } = data;
      setProductsLength(total);
      if (data && data.products && data.products.length) {
        setPorducts(
          loadMore === 0 ? data.products : (prev) => [...prev, ...data.products]
        );
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPorducts();
  }, [loadMore]);

  useEffect(() => {
    if (products.length === productLength) setDisable(true);
  }, [products]);

  console.log(products.length);
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products &&
          products.map((item) => (
            <div key={item.id} className="product">
              <img src={item.thumbnail} alt={item.brand} />
              <p>{item.title}</p>
            </div>
          ))}
      </div>

      <div className="button-container">
        <button disabled={disable} onClick={() => setLoadMore(loadMore + 1)}>
          LodeMore
        </button>
      </div>
    </div>
  );
};

export default LodeMore;
