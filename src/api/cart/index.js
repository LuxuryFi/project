import axiosClient from "../axios.config";

const cartAPI = {
  getItem() {
    const url = `/project/cart`;
    return axiosClient.get(url);
  },
  removeItem(cart_id) {
    const url = `/project/cart/${cart_id}`;
    return axiosClient.delete(url);
  },
};

export default cartAPI;
