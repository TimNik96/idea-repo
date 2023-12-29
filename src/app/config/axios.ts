import axios from "axios"
import qs from "qs"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    paramsSerializer: {
        serialize: (params: Record<string, any>) => {
            return qs.stringify(params)
        },
    },
})

// TODO ADD TOKEN INTERCEPTOR FUNCTION

export default axiosInstance
