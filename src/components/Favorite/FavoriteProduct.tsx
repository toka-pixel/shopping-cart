import React from "react";
import { Product } from "../../types/Product";
import { useAppDispatch } from "../../hooks";
import { favoriteItem } from "../../store/Favorite/favoriteSlice";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./FavoriteProduct.scss";

type FavoriteProps = {
  product: Product;
};

const FavoriteProduct: React.FC<FavoriteProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleFavoriteItem = () => {
    dispatch(favoriteItem(product));
  };
  return (
    <div className="cartProducts">
      <Row className="cartProduct">
        <Col span={5} className="col-product">
          <Link
            to={{
              pathname: `/product/${product?.id}`,
            }}
          >
            <img src={product.thumbnail} alt="product image" />
          </Link>
        </Col>
        <Col span={12} className="second-col-product">
          <p className="category">{product.category}</p>

          <p className="title">{product.title}</p>
        </Col>
        <Col span={7} className="third-product price">
          <p className="price">${product.price}</p>
          <label onClick={handleFavoriteItem}>
            <i className="fa-solid fa-heart"></i>
          </label>
        </Col>
      </Row>
    </div>
  );
};

export default FavoriteProduct;
