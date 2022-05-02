import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/exploit-J/hnm-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  const topButton = document.querySelector(".top-button");
  const topButtonActive = () => {
    if (window.scrollY > 600) {
      topButton.classList.add("active");
    } else {
      topButton.classList.remove("active");
    }
  };
  window.addEventListener("scroll", topButtonActive);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, i) => (
            <Col lg={3} md={6} key={i}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
        <div
          className="top-button"
          onClick={() => {
            window.scrollTo({
              top: 0,
            });
          }}
        >
          top
        </div>
      </Container>
    </div>
  );
};

export default ProductAll;
