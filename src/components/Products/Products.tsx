import React, { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import ProductDetails from "../ProductDetails/Product";
import { Row, Col } from "antd";
import './Products.scss'

type IProps = {
  updatedProducts:any
};

const Products = (props: IProps) => {
  const {  updatedProducts} = props;
 

  return (
    <div className="container products">

      <Row gutter={0}>
        {updatedProducts.map((product: Product) => {
          return (
            <Col xs={24} sm={12} md={6} key={Math.random()}>
              <ProductDetails product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
