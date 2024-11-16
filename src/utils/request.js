import axios from 'axios'
import {SYSTEM_CONFIG} from "~/config";

const Request = axios.create({
    baseURL: SYSTEM_CONFIG.API_BASE_URL,
    timeout: 5000,
    method: 'post'
})

export default Request