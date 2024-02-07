import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Pagination = () => {
  const [datas, setData] = useState([]);
  const [page, setPage] = useState(2);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    console.log(response.products);
    setData(response.products);
  };

  return (
    <div>
      {datas.length > 0 && (
        <div className="ecommerce-container">
          {datas.slice(page * 10 - 10, page * 10).map((data) => (
            <div key={data.title} className="product-container">
              <img
                src={data.images[0]}
                alt={data.title}
                className="product-image"
              />
              <h3 className="product-category">Category: {data.category}</h3>
              <h3 className="product-title">Name: {data.title}</h3>
              <p className="product-brand">Brand: {data.brand}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
