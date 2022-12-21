import React from "react";
import { Product } from "../../types/Product";
import ButtonSubmit from "../shared-components/Button/Button";
import { useAppDispatch } from "../../hooks";
import { addProduct } from "../../store/Product/productSlice";
import { favoriteItem } from "../../store/Favorite/favoriteSlice";

import "./Product.scss";
import { Link } from "react-router-dom";

type IProps = {
  product: Product;
};
const ProductDetails = (props: IProps) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="product">
        <Link
          to={{
            pathname: `/product/${product?.id}`,
          }}
        >
          <img src={product.image} />
          <p className="title">{product.title}</p>
          <p className="price">${product.price}</p>
        </Link>
        <div
          className="add-to-cart"
          onClick={() => dispatch(addProduct(product))}
        >
          <ButtonSubmit> add to cart</ButtonSubmit>
        </div>
        <span className="like" onClick={() => dispatch(favoriteItem(product))}>
          <i className="fa-regular fa-heart"></i>
        </span>
      </div>
    </>
  );
};

export default ProductDetails;
