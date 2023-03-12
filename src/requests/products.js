import { apiDummyJson } from "../services/api";

export async function getProducts() {
  try {
    return await apiDummyJson.get(`/products`);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getProductById(id) {
  try {
    return await apiDummyJson.get(`/products/${id}`);
  } catch (error) {
    console.log(error);
    if(error.response.status === 404) {
      alert('Enter other id more than 100!');
    }
    console.log(error.message);
  }
}

export async function createProduct(newProduct) {
  try {
    return await apiDummyJson.post(`/products/add`, newProduct);
  } catch (error) {
    console.log(error.message);
  }
}
