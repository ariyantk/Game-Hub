import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '10d014820f9841b68747a7da3061397d'
    }
})