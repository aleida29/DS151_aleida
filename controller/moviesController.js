import api from '../service/apiCommunication';

export const getPopularMovies = async () => {
    try {
        const response = await api.get(`movie/popular?include_adult=false`);
        return response.data.results;
    } catch (error) {
        throw error;
    }
}

export const searchMovies = async (query) => {
    try {
        const response = await api.get(`search/movie?query=${query}&include_adult=false`);
        return response.data.results;
    } catch (error) {
        throw error;
    }
}