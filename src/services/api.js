import axios from "axios";

// const BASE_URL = "https://dummyjson.com";

// // export const apiDummyJson = axios.create({
//   baseURL: BASE_URL,
  // timeout: 500,
// });
export class ApiDummyJson {
#BASE_URL = "https://dummyjson.com";
constructor() {
    this.instance = axios.create({
      baseURL: this.#BASE_URL, 
      // timeout: 500,
    });
}

async getProducts() {
  try {
    return await this.instance.get(`/products`);
  } catch (error) {
    console.log(error.message);
  }
}

async getProductById(id) {
  try {
    return await this.instance.get(`/products/${id}`);
  } catch (error) {
    console.log(error);
    if(error.response.status === 404) {
      alert('Enter other id more than 100!');
    }
    console.log(error.message);
  }
}

async createProduct(newProduct) {
  try {
    return await this.instance.post(`/products/add`, newProduct);
  } catch (error) {
    console.log(error.message);
  }
}
}

