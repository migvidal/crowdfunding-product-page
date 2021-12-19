import axios from 'axios';

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/migvidal/crowdfunding-product-page",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getRewards() {
        return apiClient.get('/rewards')
    }
}