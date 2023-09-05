import { useState, useEffect } from "react";
import { Product } from "../../../types/Product";
import { useAppSelector } from "../../../hooks/index";
import ProductDetails from "../../ProductDetails/Product";
import { Row, Col } from "antd";
import Filter from "../Filter/Filter";
import CenterText from "../../shared-components/CenterText/CenterText";
import "./Products.scss";

const ProductsFilter = () => {
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const {
    productsList: { products },
  } = useAppSelector((state) => state.product);

  const {
    filteredData: { category, minPrice, maxPrice },
  } = useAppSelector((state) => state.filter);

  useEffect(() => {
    if (products) {
      setFilteredProducts(
        products.filter(
          (product: Product) =>
            product.category === category &&
            (product.price >= minPrice || product.price <= maxPrice)
        )
      );
    }
  }, [products, minPrice, maxPrice]);

  const Item = ({ product }: { product: Product }) => {
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={8} key={Math.random()}>
        <ProductDetails product={product} />
      </Col>
    );
  };

  return (
    <div className="container products pt-60 pb-60">
      <CenterText text={"Products"} />
      <Row>
        <Col xs={24} md={6}>
          <Filter />
        </Col>
        <Col xs={1}></Col>
        <Col xs={24} md={16}>
          <Row gutter={[16, 16]}>
            {filteredProducts?.length > 0 ? (
              filteredProducts.map((product: Product) => {
                return <Item product={product} />;
              })
            ) : (
              <div className="not-found">
                <img src="/imgs/not-found.svg" className="" title="not-found" />
                <p>Sorry, we can’t find results</p>
                <span>try another search</span>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsFilter;
