import React from "react";
import { Product } from "../../types/Product";
import { useAppDispatch } from "../../hooks";
import { Row, Col } from "antd";
//import "./CartMenu.scss";

type IProps = {
  product: Product;
};

const FavoriteProduct = (props: IProps) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="cartProducts">
      <Row className="cartProduct">
        <Col span={5} className="col-product">
          <img src={product.image} alt="product image" />
        </Col>
        <Col span={12} className="second-col-product">
          <p>{product.category}</p>
          <br/>
          <p className="title">{product.title}</p>
        </Col>
        <Col span={7} className="third-product price">
          <p>${product.price}</p>
        
          <i className="fa-solid fa-heart"></i>
        </Col>
      </Row>
    </div>
  );
};

export default FavoriteProduct;
