import axios from "axios";

// export const API_URL = "http://174.138.41.186/";
export const API_URL = "http://127.0.0.1:5000/";

const API = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

const getAuthTokenJWT = () => {
    return JSON.parse(localStorage.getItem("authToken"));
};

API.interceptors.request.use((config) => {
    // config.headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json"
    // }

    if (getAuthTokenJWT()) {
        config.headers = {
            // ...config.headers,
            "Authorization": "Bearer " + getAuthTokenJWT()
        }
    }

    console.log(config.headers);

    return config;
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createUser: (data) => API.post("auth/jwt/create/", data),
    getUser: () => API.get("user/"),
    getWishlist: () => API.get("wishlist/"),
    createWishlist: (id, data) => API.post("wishlist/create/" + id + "/", data),
    deleteWishlist: (id) => API.post("wishlist/delete/" + id),
};
