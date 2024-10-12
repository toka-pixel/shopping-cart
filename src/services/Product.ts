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

export const  productsCategory = (category:string) => {
  let concatenated = category;

  if (typeof category === "string") {
      const words = category.split(" ");
      if (words.length === 2) {
          concatenated = words.join("-");
      }
  }

  return axios({
    method: "GET",
    url: `${url}products/category/${concatenated}`,
  });
};


export const getAllproductsCategories=()=>{
  return axios({
    method: "GET",
    url: `${url}products/categories`,
  });
}

