import React from "react";
import { Product } from "../../../types/Product";
import { useAppDispatch } from "../../../hooks";
import { DeleteOutlined } from "@ant-design/icons";
import "./CartProduct.scss";
import {
  addProduct,
  removeProduct,
  clearProduct,
} from "../../../store/Product/productSlice";
import { Link } from "react-router-dom";

type IProps = {
  product: Product;
  className: string;
};

const CartProduct = (props: IProps) => {
  const { product, className } = props;
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(clearProduct(product));
  };
  return (
    <div className={`cartProducts `}>
      <div className={`cartProduct ${className}`}>
        <div className="col-product">
          <Link
            to={{
              pathname: `/product/${product?.id}`,
            }}
          >
            <img src={product.thumbnail} alt="product image" />
          </Link>
        </div>

        <div className="second-col-product">
          <Link
            to={{
              pathname: `/product/${product?.id}`,
            }}
          >
            <p className="title">{product.description}</p>
          </Link>
          <p className="">
            <span onClick={() => dispatch(addProduct(product))}>
              <i className="fa-solid fa-circle-plus"></i>
            </span>
            <span className="quantity">{product.quantity}</span>
            <span onClick={() => dispatch(removeProduct(product))}>
              <i className="fa-solid fa-circle-minus"></i>
            </span>
          </p>
        </div>
        <div className="third-product price">
          <p>${product.price}</p>
          <DeleteOutlined onClick={deleteProduct} className="delete" />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
