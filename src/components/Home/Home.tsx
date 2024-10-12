import { useEffect, useState } from "react";
import Slider from "../SectionsHome/Carousel/Carousel";
import {
  allProducts,
  changeMinMaxPrice,
  changeCategories,
} from "../../store/Product/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import ProductsFilter from "../SectionsHome/Products/Products-Filter";
import WomensCollection from "../SectionsHome/WomensCollection/WomensCollection";
import News from "../SectionsHome/News/News";
import {
  getAllproductsCategories,
  productsCategory,
} from "../../services/Product";
import { changeFilteredData } from "../../store/Filter/filterSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  const [prices, setPrices] = useState<number[]>([]);
  const {
    productsList: { products },
  } = useAppSelector((state) => state.product);

  const category = useAppSelector(
    (state) => state.filter.filteredData.category
  );

  useEffect(() => {
    getAllproductsCategories().then((res) => {
      if (res.data.length > 0) {
        dispatch(changeCategories((res.data.map((item:{name:string})=>item.name).slice(1, 10))));
        handleproductsCategory((res.data.map((item:{name:string})=>item.name).slice(1, 10)));
      }
    });
  }, []);

  useEffect(() => {
    if (prices?.length > 0) {
      dispatch(
        changeMinMaxPrice({
          min: Math.min(...prices),
          max: Math.max(...prices),
        })
      );
    }
  }, [prices]);

  useEffect(() => {
    handleproductsCategory(category);
  }, [category]);

  const handleproductsCategory = (category: string) => {
    setPrices([]);
    dispatch(
      changeFilteredData({
        category,
        minPrice: null,
        maxPrice: null,
      })
    );

    productsCategory(category)
      .then((res) => {
        dispatch(allProducts(res.data));
        setPrices(res.data.products?.map((item: any) => item.price));
      })
      .catch((e) => console.log(e));
    
  };

  return (
    <>
      <Slider />
      <ProductsFilter />
      <WomensCollection />
      <News />
    </>
  );
};

export default Home;
