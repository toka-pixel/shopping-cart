import React, { useEffect } from "react";
import Categories from "../Categories/Categories";
import Slider from "../Carousel/Carousel";
import { getAllProducts } from "../../store/Product/fetchProducts";
import { useAppDispatch , useAppSelector} from "../../hooks/index";
import Products from "../Products/Products";
import ProductsFilter from '../Products/Products-Filter';
import Footer from "../Footer/Footer";

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
      <ProductsFilter  updatedProducts={products} />
      <Footer />
    </>
  );
};

export default Home;
