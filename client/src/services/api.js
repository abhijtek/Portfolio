import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-ovdl.onrender.com",
});

export default API;
