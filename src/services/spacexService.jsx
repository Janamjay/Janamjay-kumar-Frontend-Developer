import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v3";

const getItems = () => {
  return axios.get(`${BASE_URL}/launches`);
};

export default {
  getItems,
};
