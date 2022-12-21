import React from "react";
import { Product } from "../../../types/Product";
import { useAppDispatch } from "../../../hooks";
import { Row, Col } from "antd";
import "./CartMenu.scss";
import { addProduct, removeProduct } from "../../../store/Product/productSlice";

type IProps = {
  product: Product;
};

const CartProduct = (props: IProps) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="cartProducts">
      <Row className="cartProduct">
        <Col span={5} className="col-product">
          <img src={product.image} alt='product image' />
        </Col>
        <Col span={12} className="second-col-product">
          <p className="title">{product.title}</p>
          <p className="">
            <span onClick={() => dispatch(addProduct(product))}>
              <i className="fa-solid fa-circle-plus"></i>
            </span>
            <span className="quantity">{product.quantity}</span>
            <span onClick={() => dispatch(removeProduct(product))}>
           
              <i className="fa-solid fa-circle-minus"></i>
            </span>
          </p>
        </Col>
        <Col span={7} className="third-product price">
          <p>${product.price}</p>
        </Col>
      </Row>
    </div>
  );
};

export default CartProduct;
