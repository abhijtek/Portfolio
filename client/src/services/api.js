import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-ovdl.onrender.com/api",
});

export default API;
