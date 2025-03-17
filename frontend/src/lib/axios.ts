import Axios from "axios";

Axios.defaults.withXSRFToken = true;

const axios = Axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
    },
})

export default axios;
