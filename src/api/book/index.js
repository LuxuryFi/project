import axiosClient from "../axios.config";

const bookAPI = {
  getTrending() {
    const url = `/project/product`;
    return axiosClient.get(url);
  },
  getBestSeller() {
    const url = `/project/product`;
    return axiosClient.get(url);
  },
  getNewest() {
    const url = `/project/product`;
    return axiosClient.get(url);
  },
};

export default bookAPI;
