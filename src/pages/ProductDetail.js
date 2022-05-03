import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/exploit-J/hnm-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className="detail">
      <Container>
        <Row className="detail-wrap">
          <Col lg={4} className="img">
            <img src={product?.img} />
          </Col>
          <Col lg={4} className="desc">
            <div className="product">
              <div className="info-wrap">
                <p className="md-pick">
                  {product?.choice == true ? "MD's pick! " : ""}
                </p>
                <p className="new-item">
                  {product?.new == true ? "신제품!" : ""}
                </p>
              </div>
              <div className="title-wrap">
                <p className="title">{product?.title}</p>
                <p className="price">￦{product?.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="select-menu">
              <select>
                <option>사이즈</option>
                {product?.size.length > 0 ? (
                  product.size.map((item, i) => <option key={i}>{item}</option>)
                ) : (
                  <option>품절</option>
                )}
              </select>
              <button>장바구니에 담기</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
