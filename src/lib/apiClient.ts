import axios from "axios";
import { headers } from "next/headers";

const apiClient =axios.create({
  baseURL:"http://localhost:8000/api",
  headers:{
"Content-type" : "application/json",
// "Authorization" : `Bearer {token}`
  },
});

export default apiClient;