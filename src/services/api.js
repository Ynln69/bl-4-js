import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const apiDummyJson = axios.create({
  baseURL: BASE_URL,
  // timeout: 500,
});
