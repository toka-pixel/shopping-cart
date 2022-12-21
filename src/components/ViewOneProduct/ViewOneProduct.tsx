import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { getOneProduct } from "../../services/Product";
import { Product } from "../../types/Product";
import { useParams } from "react-router";
import ButtonSubmit from "../../components/shared-components/Button/Button";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useAppDispatch } from "../../hooks";
import { addProduct } from "../../store/Product/productSlice";
import "./ViewOneProduct.scss";
const ViewOneProduct = (props: any) => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product | any>();
  const [rating, setRating] = useState(0);


  useEffect(() => {
    getOneProduct(id).then((res) => {
      setProduct(res.data);
      setRating(res?.data?.rating.rate);
    });
  }, [id]);

  const checkRating = (rate: number) => {
    return [...new Array(5)].map((arr, index) => {

      return index <= rate ? (
        <StarFilled className="filled" />
      ) : (
        <StarOutlined className="outlined" />
      );
    });
  };
  return (
    <div className="container">
      <Row className="oneProduct Row">
        <Col xs={24} sm={11} className="styleImg">
          <img src={product?.image} alt='product image' />
        </Col>
        <Col xs={24} sm={11}>
          <div className="details">
            <p className="title">{product?.title}</p>
            <p className="category">{product?.category}</p>

            {rating > 0 && checkRating(rating)}

            <p className="description">{product?.description}</p>
            <p className="price">${product?.price}</p>
            <div onClick={() => dispatch(addProduct(product))}>
              <ButtonSubmit> add to cart</ButtonSubmit>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ViewOneProduct;
