import React from "react";
import { Product } from "../../types/Product";
import { useAppDispatch } from "../../hooks";
import { favoriteItem } from "../../store/Favorite/favoriteSlice";
import { Row, Col } from "antd";
import "./FavoriteProduct.scss";

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
          <p className="category">{product.category}</p>

          <p className="title">{product.title}</p>
        </Col>
        <Col span={7} className="third-product price">
          <p className="price">${product.price}</p>
          <label
            onClick={() => {
              dispatch(favoriteItem(product));
            }}
          >
            <i className="fa-solid fa-heart"></i>
          </label>
        </Col>
      </Row>
    </div>
  );
};

export default FavoriteProduct;
