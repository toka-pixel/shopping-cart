import React from "react";
import { Product } from "../../types/Product";
import { useAppSelector } from "../../hooks/index";
import ProductDetails from "../ProductDetails/Product";
import { Row, Col } from "antd";
import Filter from "../Filter/Filter";
import CenterText from "../shared-components/CenterText/CenterText";
import "./Products.scss";

type IProps = {
  updatedProducts: any;
};

const ProductsFilter = (props: IProps) => {
  const { updatedProducts } = props;

  const { category, minPrice, maxPrice } = useAppSelector(
    (state) => state.product.filteredData
  );

  return (
    <div className="container products pt-60 pb-60">
      <CenterText text={"Products"} />
      <Row>
        <Col xs={24} sm={6}>
          <Filter />
        </Col>
        <Col xs={1}></Col>
        <Col xs={24} sm={16} >
          <Row gutter={0}>
            {updatedProducts.map((product: Product) => {
              if (product.category === category) {
                if (!minPrice && !maxPrice) {
                  return (
                    <Col xs={24} sm={12} md={8} lg={6} key={Math.random()}>
                      <ProductDetails product={product} />
                    </Col>
                  );
                }

                if (!maxPrice && minPrice <= product.price) {
                  return (
                    <Col xs={24} sm={12} md={8} lg={6} key={Math.random()}>
                      <ProductDetails product={product} />
                    </Col>
                  );
                }

                if (!minPrice && maxPrice >= product.price) {
                  return (
                    <Col xs={24} sm={8} md={6} key={Math.random()}>
                      <ProductDetails product={product} />
                    </Col>
                  );
                }
                if (minPrice <= product.price && maxPrice >= product.price) {
                  return (
                    <Col xs={24} sm={8} md={6} key={Math.random()}>
                      <ProductDetails product={product} />
                    </Col>
                  );
                }
              }
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsFilter;
