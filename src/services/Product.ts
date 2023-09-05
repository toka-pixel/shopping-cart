import axios from "axios";

const url = "https://dummyjson.com/";

export const getProducts = () => {
  return axios({
    method: "GET",
    url: `${url}products`,
  });
};

export const getOneProduct = (id: any) => {
  return axios({
    method: "GET",
    // url: `https://fakestoreapi.com/products/${id}`,
    url: `${url}products/${id}`,
  });
};

export const  productsCategory = (category: string) => {
  return axios({
    method: "GET",
    url: `${url}products/category/${category}`,
  });
};


export const getAllproductsCategories=()=>{
  return axios({
    method: "GET",
    url: `${url}products/categories`,
  });
}

