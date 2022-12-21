import React, { useEffect } from "react";
import Categories from "../Categories/Categories";
import Slider from "../Carousel/Carousel";
import { getAllProducts } from "../../store/Product/fetchProducts";
import { useAppDispatch , useAppSelector} from "../../hooks/index";
import Products from "../Products/Products";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.productsList);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Slider />
      <Categories />
      {/* <Products category={""} updatedProducts={products} /> */}
    </>
  );
};

export default Home;
