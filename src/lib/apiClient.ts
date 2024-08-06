import axios from "axios";
import { headers } from "next/headers";

const apiClient =axios.create({
  // baseURL:"http://localhost:8000/api",
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers:{
"Content-type" : "application/json",
// "Authorization" : `Bearer {token}`
  },
});

export default apiClient;