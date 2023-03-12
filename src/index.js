// import {
//   getProducts,
//   getProductById,
//   createProduct,
// } from "./requests/products";
import {
  createMarkupProducts,
  createMarkupProduct,
  createMarkupAddProduct,
} from "./services/markupService";

import "./styles/normalize.css";
import "./styles/index.css";
import  { ApiDummyJson } from './services/api';

// console.log(getProducts());
const productsList = document.querySelector("#allProducts");
const singleProductForm = document.querySelector("#singleProductForm");
const singleProduct = document.querySelector("#singleProduct");
const addProductForm = document.querySelector("#add-product-form");
const newProductElem = document.querySelector("#newProductSection");

singleProductForm.addEventListener("submit", findProductById);
addProductForm.addEventListener("submit", addProduct);

const apiDummyJson = new ApiDummyJson();
async function addAllProducts() {
  const {
    data: { products },
  } = await apiDummyJson.getProducts();
  createMarkupProducts(products, productsList);
}

addAllProducts();

async function findProductById(evt) {
  evt.preventDefault();

  const productId = evt.target.elements.id.value.trim();
  if (!productId) {
    return;
  }
  const { data } = await apiDummyJson.getProductById(productId);
  createMarkupProduct(data, singleProduct);
}

async function addProduct(e) {
  e.preventDefault();
  const title = e.target.elements.title.value.trim();
  const description = e.target.elements.description.value.trim();
  const price = e.target.elements.price.value.trim();
  const newProduct = { title, description, price };
  const { data } = await apiDummyJson.createProduct(newProduct);
  console.log(data);
  createMarkupAddProduct(data, newProductElem);
  e.target.reset();
}
