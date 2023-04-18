import axiosClient from "../axios.config";

const cartAPI = {
  addItem(newItem) {
    const url = `/project/product`;
    return axiosClient.post(url, newItem);
  },
  removeItem(item_id) {
    // to do
  },
};

export default cartAPI;
