import { getProducts } from "./requests/products";
import { createMarkupProduct } from "./services/markupService";

import "./styles/normalize.css";
import "./styles/index.css";

// console.log(getProducts());
const productsList = document.querySelector("#allProducts");

async function addAllProducts() {
  const {
    data: { products },
  } = await getProducts();
  createMarkupProduct(products, productsList);
}

addAllProducts();
