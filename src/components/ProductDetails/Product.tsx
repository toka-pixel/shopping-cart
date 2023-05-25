import React, { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { message, notification } from "antd";
import ButtonSubmit from "../shared-components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addProduct } from "../../store/Product/productSlice";
import { favoriteItem } from "../../store/Favorite/favoriteSlice";
import { Link } from "react-router-dom";
import ProductImage from "../shared-components/ProductImage/Index";
import "./Product.scss";

type IProps = {
  product: Product;
};

const ProductDetails = (props: IProps) => {
  const { product } = props;
  const [favItem, setFavItem] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { favoriteList } = useAppSelector((state) => state.favorite);

  const checkFavorite = (id: number) =>
    favoriteList.findIndex((item: Product) => item.id == id);

  useEffect(() => {
    checkFavorite(product.id) >= 0 ? setFavItem(true) : setFavItem(false);
  }, [favoriteList]);

  const handleFavorite = () => {
    dispatch(favoriteItem(product));
    checkFavorite(product.id) >= 0 ? setFavItem(true) : setFavItem(false);
    if (!favItem) {
      notification.success({
        message: "Product saved",
        placement: "bottomLeft",
      });
    } else {
      notification.success({
        message: "Product unsaved",
        placement: "bottomLeft",
      });
    }
  };
  const addToCart = () => {
    dispatch(addProduct(product));
    message.success("add product to cart successfully");
  };
  return (
    <>
      <div className="product">
        <Link
          to={{
            pathname: `/product/${product?.id}`,
          }}
        >
          
          <img className="productImg" title='product Img' src={product.image} />
          <p className="title">{product.title}</p>
          <p className="price">${product.price}</p>
        </Link>
        <div className="add-to-cart" onClick={addToCart}>
          <ButtonSubmit> add to cart</ButtonSubmit>
        </div>
        <span
          className="like"
          onClick={() => {
            handleFavorite();
          }}
        >
          {favItem ? (
            <img src="/imgs/save.svg" title='save' />
          ) : (
            <img src="/imgs/not-save.svg" title='not-save' />
          )}
        </span>
      </div>
    </>
  );
};

export default ProductDetails;
