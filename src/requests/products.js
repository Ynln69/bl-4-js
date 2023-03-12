import { apiDummyJson } from "../services/api";

export async function getProducts() {
  try {
    return await apiDummyJson.get(`/products`);
  } catch (e) {
    console.log(error.message);
  }
}
