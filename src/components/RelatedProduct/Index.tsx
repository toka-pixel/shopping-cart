import { useEffect, useState } from "react";
import { productsCategory } from "../../services/Product";
import CenterText from "../shared-components/CenterText/CenterText";
import { Product } from "../../types/Product";
import ProductDetails from "../ProductDetails/Product";
import { Col, Row } from "antd";

type IProps = {
  category: string;
};

const RelatedProduct = (props: IProps) => {
  const { category } = props;

  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    productsCategory(category)
      .then((res) => {
        setData(res.data.products);
      })
      .catch(() => {});
  }, [category]);

  return (
    <div>
      {data.length > 0 && (
        <>
          <CenterText text="Related Product" />
          <br />
          <Row gutter={[16, 16]}>
            {data?.map((item, i) => (
              <Col xs={24} sm={12} md={8} lg={6} key={i}>
                <ProductDetails product={item} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default RelatedProduct;
