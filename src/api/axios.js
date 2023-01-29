import axios from 'axios';
/* import dotenv from "dotenv"
dotenv.config() */

export default axios.create({
    baseURL: 'https://dog-site-api.onrender.com/'
});