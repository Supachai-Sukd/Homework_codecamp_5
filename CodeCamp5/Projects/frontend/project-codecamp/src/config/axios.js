import axios from 'axios';
import LocalStorageService from '../services/localStorageService'
import { notification } from 'antd'

axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.request.use(
    config => {
        // เช็คว่าถ้า url ที่ยิงไปเป็นสองอันนี้ไม่ต้องใส่ headers และก็รีเทินคอนฟิกไปเลยไม่ต้องปรับแต่งไรเพิ่ม
        if (config.url.includes("/") || config.url.includes("/register")) return config

        const token = LocalStorageService.getToken()

        //ถ้ามี โทเค่น ให้เซ็ท Headers เป็น Auth และ Bearer เป็น token
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config

    },
    err => {
        Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        if(err.response?.status === 401) {
            LocalStorageService.removeToken()
            window.location.reload()
            notification.error({
                message: "กรุณาเข้าสู่ระบบใหม่"
            })
            return Promise.reject(err)
        }
        return Promise.reject(err)
    }
)

export default axios;