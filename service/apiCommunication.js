import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3/';

export default axios.create({
    baseURL: baseUrl,
    params: {
        api_key: 'd10f5394d21912776bca07b9035b4aa1'
    }
})