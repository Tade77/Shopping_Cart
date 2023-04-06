import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductStore from "../components/ProductStore";
import { productLists } from "../data/Store";

const StoreItems = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3}>
        {productLists.map((list, id) => (
          <Col key={list.id}>
            <ProductStore {...list} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StoreItems;
