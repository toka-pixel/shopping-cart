import { useEffect, useState } from "react";
import { Row, Col, message } from "antd";
import { getOneProduct } from "../../services/Product";
import { Product } from "../../types/Product";
import { useParams } from "react-router";
import ButtonSubmit from "../../components/shared-components/Button/Button";
import { useAppDispatch } from "../../hooks";
import { addProduct } from "../../store/Product/productSlice";
import Loading from "../shared-components/Loading/Loading";
import CheckRating from "../shared-components/CheckRating/Index";
import RelatedProduct from "../RelatedProduct/Index";
import "./ViewOneProduct.scss";

const ViewOneProduct = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product | any>();
  const [rating, setRating] = useState(0);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    getOneProduct(id).then((res) => {
      const data = res.data;
      setProduct(data);
      setRating(data?.rating.rate);
      setSrc(data?.images[0]);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, [id]);

  const addToCart = () => {
    dispatch(addProduct(product));
    message.success("add product to cart successfully");
  };

  const discountedPrice = (
    originalPrice: number,
    discountPercentage: number
  ) => {
    return (originalPrice - originalPrice * (discountPercentage / 100)).toFixed(
      0
    );
  };

  const handleImg = (src: string) => {
    setSrc(src);
  };

  return (
    <div className="container">
      {product ? (
        <Row className="oneProduct Row">
          <Col xs={24} sm={24} lg={11} className="styleImg">
            <div className="imagesOfProduct">
              {product.images.map((item: string, i: number) => (
                <img
                  onClick={() => handleImg(item)}
                  src={item}
                  key={i}
                  alt="product image"
                />
              ))}
            </div>
            <img className="mainImg" src={src} alt="product image" />
          </Col>
          <Col xs={2}></Col>
          <Col xs={24} sm={24} lg={11}>
            <div className="details">
              <p className="title">{product.description}</p>
              <p>
                {product.title}
                <span className="stock">{product.stock} in stock</span>
              </p>
              <p className="category">{product?.category}</p>
              <p>{product.brand}</p>

              {rating > 0 && <CheckRating rate={rating} />}

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
              <div onClick={addToCart}>
                <ButtonSubmit> add to cart</ButtonSubmit>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Loading />
      )}

      <RelatedProduct category={product?.category} />
    </div>
  );
};

export default ViewOneProduct;
