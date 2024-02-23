import axios from "axios"
import Store from "../store/index"

const axiosInstance = axios.create({
    baseURL: "https://api.mankoskin.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    config => {
        const adminState = Store.getState().admin;
        const role = config.url.split("/")[1]

        console.log("admin*token ", adminState.token)

        if (role ==='admin') {
            config.headers['Authorization'] = `Bearer ${adminState?.token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

  export default axiosInstance