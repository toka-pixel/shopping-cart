import { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { message, notification } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addProduct } from "../../store/Product/productSlice";
import { favoriteItem } from "../../store/Favorite/favoriteSlice";
import { Link } from "react-router-dom";
import CheckRating from "../shared-components/CheckRating/Index";
import "./Product.scss";

type IProps = {
  product: Product;
};

const ProductDetails = (props: IProps) => {
  const { product } = props;
  const [favItem, setFavItem] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { favoriteList } = useAppSelector((state) => state.favorite);

  const { isDarK, darkColor_2, lightColor } = useAppSelector(
    (state) => state.theme
  );

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
  const [imageSrc, setImageSrc] = useState<string>(product.images[0]);

  const handleMouseOver = (length: number, src: string) => {
    if (length > 1) setImageSrc(src);
  };

  const handleMouseOut = (src: string) => {
    setImageSrc(src);
  };

  const discountedPrice = (
    originalPrice: number,
    discountPercentage: number
  ) => {
    return (originalPrice - originalPrice * (discountPercentage / 100)).toFixed(
      0
    );
  };

  return (
    <>
      <div
        className="product"
        style={{ backgroundColor: !isDarK ? lightColor : darkColor_2 }}
      >
        <Link
          to={{
            pathname: `/product/${product?.id}`,
          }}
        >
          <img
            className="productImg"
            title="product Img"
            onMouseOver={() =>
              handleMouseOver(product.images.length, product.images[1])
            }
            onMouseOut={() => handleMouseOut(product.images[0])}
            src={imageSrc}
          />
          <p className="title">{product.description}</p>
          {product.rating > 0 && <CheckRating rate={product.rating} />}
          <div className="discountedPrice">
            $
            <span>
              {discountedPrice(product.price, product.discountPercentage)}
            </span>
          </div>
          <div className="originalPrice">
            <p>${product.price} </p>
            <span className="discountPercentage">
              {product.discountPercentage}%
            </span>
          </div>
        </Link>
        <div onClick={addToCart}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>

        {/* <div className="add-to-cart" onClick={addToCart}>
          <ButtonSubmit> add to cart</ButtonSubmit>
        </div> */}
        <span
          className="like"
          onClick={() => {
            handleFavorite();
          }}
        >
          {favItem ? (
            <img src="/imgs/save.svg" title="save" />
          ) : isDarK ? (
            <img src="/imgs/white-heart.svg" title="not-save" />
          ) : (
            <img src="/imgs/not-save.svg" title="not-save" />
          )}
        </span>
      </div>
    </>
  );
};

export default ProductDetails;
