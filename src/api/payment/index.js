import axiosClient from '../axios.config';

const paymentAPI = {
  getAll() {
    const url = `/patient/payment/`;
    return axiosClient.get(url);
  },
  getOne(payment_id) {
    const url = `/patient/payment/patient/${payment_id}`;
    return axiosClient.get(url);
  },
  getDetails(payment_id) {
    const url = `/patient/detail/payment/${payment_id}`;
    return axiosClient.get(url);
  },
};

export default paymentAPI;
