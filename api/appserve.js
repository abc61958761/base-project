import axios from "axios";

const appserve = axios.create({
  baseURL: "https://api4.cyfang.com.tw/api",
});
export default appserve;
