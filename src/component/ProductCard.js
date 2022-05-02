import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card-container" onClick={showDetail}>
      <img className="card-img" src={item?.img} />
      <div className="md-pick">{item?.choice == true ? "MD's pick! " : ""}</div>
      <div className="title">{item?.title}</div>
      <div className="price">￦{item?.price.toLocaleString()}</div>
      <div className="new-item">{item?.new == true ? "신제품!" : ""}</div>
    </div>
  );
};

export default ProductCard;
