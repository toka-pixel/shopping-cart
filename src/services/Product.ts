import axios from "axios";

export const getProducts = () => {

  return axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
    
  });
};

export const getOneProduct = (id:any) => {

  return axios({
    method: "GET",
    url: `https://fakestoreapi.com/products/${id}`,
    
  });
};

