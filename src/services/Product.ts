import axios from "axios";

export const getProducts = () => {
  return axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
    
  });
};
