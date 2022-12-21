import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { useAppSelector } from "../../hooks/index";
import Products from "../Products/Products";
import { Product } from "../../types/Product";
import "./TabsIndex.scss";

const TabsIndex = () => {
  const [type, setType] = useState<string>("");
  const categories = useAppSelector((state) => state.product.categories);

  const [updatedProducts, setUpdatedProducts] = useState<Product[]>([]);
  const [uniqueIds, setUniqueIds] = useState<any>([]);
  const products = useAppSelector((state) => state.product.productsList);

  useEffect(() => {
    setUpdatedProducts([]);
    setUniqueIds([]);
    setUpdatedProducts(
      products.filter((product: Product) =>{ 
       if( product.category === type){
        const isDuplicate = uniqueIds.includes(product.id);

        if (!isDuplicate) {

         uniqueIds.push(product.id)
    
          return true;
        }

        return false;
       }
      })
    );
  }, [type]);

 
  useEffect(() => {
    if (categories) {
      setType(categories[1]);
    }
  }, []);

  return (
    <Tabs
      defaultActiveKey={type}
      items={categories.map((category, i) => {
        const id = String(i + 1);

        return {
          label: (
            <span
              onClick={() => {
                setType(category);
              }}
            >
              {category}
            </span>
          ),
          key: id,
          children: (
            <Products updatedProducts={updatedProducts} category={type} />
          ),
        };
      })}
    />
  );
};

export default TabsIndex;
