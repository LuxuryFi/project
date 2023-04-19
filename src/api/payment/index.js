import axiosClient from '../axios.config';

const orderAPI = {
  getAll() {
    const url = `/project/order`;
    return axiosClient.get(url);
  },
  getOne(order_id) {
    const url = `/project/order/${order_id}`;
    return axiosClient.get(url);
  },
  getDetails(order_id) {
    const url = `/project/detail/${order_id}`;
    return axiosClient.get(url);
  },
};

export default orderAPI;
