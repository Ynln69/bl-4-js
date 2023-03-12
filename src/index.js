import { getProducts, getProductById } from "./requests/products";
import { createMarkupProducts, createMarkupProduct } from "./services/markupService";

import "./styles/normalize.css";
import "./styles/index.css";

// console.log(getProducts());
const productsList = document.querySelector("#allProducts");
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');

singleProductForm.addEventListener('submit', findProductById);

// async function addAllProducts() {
//   const {
//     data: { products },
//   } = await getProducts();
//   createMarkupProducts(products, productsList);
// }

// addAllProducts();


async function findProductById(evt) {
  evt.preventDefault();

  const productId = evt.target.elements.id.value.trim();
  if(!productId) {
    return;
  }
  const {data} = await getProductById(productId);
  createMarkupProduct(data, singleProduct);
};
