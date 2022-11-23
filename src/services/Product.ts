import axios from "axios";

export const getProducts = () => {
  console.log('a')
  return axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
    
  });
};
