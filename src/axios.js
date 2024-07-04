import axios from 'axios';
import { baseUrl } from './constants/constants';
// import axios from '../../axios'; // This line is unnecessary if you have the import above

const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;
