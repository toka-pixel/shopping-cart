import React, { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import ButtonSubmit from "../shared-components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addProduct } from "../../store/Product/productSlice";
import { favoriteItem } from "../../store/Favorite/favoriteSlice";
import { Link } from "react-router-dom";
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

  const handleFavorite=()=>{
    dispatch(favoriteItem(product));
    checkFavorite(product.id) >= 0 ? setFavItem(true) : setFavItem(false);
    console.log(favItem)
  }
  return (
    <>
      <div className="product">
        <Link
          to={{
            pathname: `/product/${product?.id}`,
          }}
        >
          <img className="productImg" src={product.image} />
          <p className="title">{product.title}</p>
          <p className="price">${product.price}</p>
        </Link>
        <div
          className="add-to-cart"
          onClick={() => dispatch(addProduct(product))}
        >
          <ButtonSubmit> add to cart</ButtonSubmit>
        </div>
        <span
          className="like"
          onClick={() => {
            handleFavorite()
          }}
        >
          {/* {checkFavorite(product.id) >=0 ? (
          setFavItem(true)
          ) : (
            setFavItem(false)
          )} */}
          {
            favItem ?  <img src='/imgs/save.svg' />: <img src='/imgs/not-save.svg' />
          }
          
          {/* {favoriteList.map((item: Product) => {
            if (item.id === product.id)
              return <i className="fa-solid fa-heart"></i>;

            return <i className="fa-regular fa-heart"></i>;
          })} */}
          {/* {product?.favorite ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )} */}
        </span>
      </div>
    </>
  );
};

export default ProductDetails;
