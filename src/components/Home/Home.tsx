import React, { useEffect } from "react";
import Categories from "../Categories/Categories";
import Slider from "../Carousel/Carousel";
import { getAllProducts } from "../../store/Product/fetchProducts";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import Products from "../Products/Products";
import ProductsFilter from "../Products/Products-Filter";
import Footer from "../Footer/Footer";
import WomensCollection from '../WomensCollection/WomensCollection';
import News from "../News/News";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.productsList);


  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Slider />
      {/* <Categories /> */}

        <ProductsFilter updatedProducts={products} />
         <WomensCollection />   
         <News />
      <Footer />
    </>
  );
};

export default Home;
