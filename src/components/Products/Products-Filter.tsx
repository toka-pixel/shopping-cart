import React ,{useEffect} from "react";
import { Product } from "../../types/Product";
import { useAppSelector } from "../../hooks/index";
import ProductDetails from "../ProductDetails/Product";
import { Row, Col } from "antd";
import Filter from "../Filter/Filter";
import CenterText from "../shared-components/CenterText/CenterText";
import "./Products.scss";

type IProps = {
  products: any;
};

const ProductsFilter = (props: IProps) => {
  const { products } = props;

  const { category, minPrice, maxPrice } = useAppSelector(
    (state) => state.product.filteredData
  );

  const filteredProducts = products.filter(
    (product: Product) =>
      product.category === category &&
      (product.price >= minPrice || product.price <= maxPrice)
  );

  useEffect(()=>{
    fetch('https://fakestoreapi.com/users',{
      method:"POST",
      body:JSON.stringify(
          {
              email:'aa@gmail.com',
              username:'aaa',
              password:'team',
              // name:{
              //     firstname:'mark mark',
              //     lastname:'Doe'
              // },
              // address:{
              //     city:'kilcoole',
              //     street:'7835 new road',
              //     number:3,
              //     zipcode:'12926-3874',
              //     geolocation:{
              //         lat:'-37.3159',
              //         long:'81.1496'
              //     }
              // },
              phone:'1-570-236-7033'
          }
      )
  })
  .then(res=>res.json())
      .then(json=>console.log(json))
  },[])

  const item = (product: Product) => {
    return (
      <Col xs={24} sm={12} md={8} lg={6} key={Math.random()}>
        <ProductDetails product={product} />
      </Col>
    );
  };

  return (
    <div className="container products pt-60 pb-60">
      <CenterText text={"Products"} />
      <Row>
        <Col xs={24} sm={6}>
          <Filter />
        </Col>
        <Col xs={1}></Col>
        <Col xs={24} sm={16}>
          <Row gutter={0}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: Product) => {
                return item(product);
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
