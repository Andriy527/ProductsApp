import axios, {AxiosInstance} from "axios";

const BASE_API_URL: string = 'https://dummyjson.com/';

export const $host: AxiosInstance = axios.create({
    baseURL: BASE_API_URL
})