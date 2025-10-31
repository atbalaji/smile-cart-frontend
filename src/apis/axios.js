import axios from "axios";
import { keysToCamelCase } from "neetocist";

const setHttpHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

const transformResponseKeysToCamelcase = response => {
  if (response.data) response.data = keysToCamelCase(response.data);
};

const responseInterceptors = () => {
  axios.interceptors.response.use(response => {
    transformResponseKeysToCamelcase(response);

    return response.data;
  });
};

export default function initializeAxios() {
  axios.defaults.baseURL =
    "https://smile-cart-backend-staging.neetodeployapp.com/";
  setHttpHeaders();
  responseInterceptors();
}
