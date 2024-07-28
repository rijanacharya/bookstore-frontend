import axios from 'axios';
import { Book } from '../types';

const API_URL = 'http://localhost:8080/api/books';

const api = {
    getBooks: () => axios.get<Book[]>(API_URL).then(res => res.data),
};

export default api;