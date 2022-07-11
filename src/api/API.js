import axios from "axios";

// dev api host + port
// export const API_URL = "http://ovz1.kupalex.n03kn.vps.myjino.ru:49192/";
export const API_URL = "http://127.0.0.1:5000/";

const API = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

const getAuthToken = () => {
    return localStorage.getItem("authToken");
};

API.interceptors.request.use((config) => {
    if (getAuthToken()) {
        config.headers = {
            "Authorization": "token " + getAuthToken()
        }
    }

    return config;
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    loginUser: (data) => API.post('auth/token/login/', data),
    registerUser: (data) => API.post("auth/users/", data),
    getUser: () => API.get("auth/users/me/"),
    logout: () => API.post('auth/token/logout'),
    addOrderSegment: (data) => API.post('order/segment/add/'),
    deleteOrderSegment: (data) => API.post('order/segment/delete/'),
    getWishlist: () => API.get("wishlist/"),
    createWishlist: (data) => API.post("wishlist/create/", data),
    deleteWishlist: (track_id) => API.delete("wishlist/delete/", track_id),
    accountProfileSave: (data) => API.post('account/profile/save/', data),
    accountSubscriptionInfo: () => API.get('account/subscription/'),
    accountSubscriptionOn: () => API.put('account/subscription/on/'),
    accountSubscriptionOff: () => API.put('account/subscription/off/'),
    accountCoupons: () => API.get('account/coupons/'),
};
