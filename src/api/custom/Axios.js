import {BASE_URL} from './BaseURL';
import axios from 'axios';

const axios_instance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
});
export default axios_instance;
