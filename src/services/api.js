import axios from "axios";

const api = axios.create({
  baseURL: "https://estufaarduino.herokuapp.com/",
});

export default api;
